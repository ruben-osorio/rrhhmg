/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import importUploader from '../helpers/importuploader';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import csv from 'fast-csv';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
import EstructuraOrgListExport from '../exports/EstructuraOrgList';
const Estructura_Org = DB.Estructura_Org;
const router = express.Router();




/**
 * Route to list estructura_org records
 * @route {GET} /estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Estructura_Org.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.estructura_org_nivel){
			let paramValue = req.query.estructura_org_nivel;
			query.andWhere("estructura_org.nivel=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Estructura_Org.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		
		const selectFields = Estructura_Org.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idunidad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		if(req.query.export){
			const exportFields = Estructura_Org.exportListFields(); // get export fields
			query.select(exportFields);
			let records = await query.getRawMany();
			return EstructuraOrgListExport(records, req, res);
		}
		
		//return records and pager info
		const pageData = await Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to import Estructura_Org records
 * support multi import of csv data files
 * csv file must contain table header on the first line.
 * @route {GET} /estructura_org/importdata
 */
router.post('/importdata', importUploader.array('file'), async (req:HttpRequest, res:HttpResponse) => {
	const uploadedFiles = req.files as any[];
	if(uploadedFiles){	// files uploaded
		var uploadedPaths = uploadedFiles.map((file) =>{
			return file.path;
		});
		if(uploadedPaths.length){
			uploadedPaths.forEach(function (fpath){
				let modeldata = [];
				csv.fromPath(fpath, {headers: true, ignoreEmpty: true}).on("data", function(data){
					if(data){
						modeldata.push(data);
					}
				}).on("end", async() => {
					try{
						const query = Estructura_Org.getQuery();
						const result = await query.insert().values(modeldata).execute();
						return res.send(`${result.raw.affectedRows} Records Imported`);
					}
					catch(err){
						return res.serverError(err);
					}
				});
			});
		}
	}
	else{
		return res.badRequest("Error uploading file")
	}
});


/**
 * Route to view Estructura_Org record
 * @route {GET} /estructura_org/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		query.where("idunidad=:recid", { recid });
		let selectFields = Estructura_Org.viewFields();
		query.select(selectFields);
		let record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Estructura_Org record
 * @route {POST} /estructura_org/add
 */
router.post('/add/' , 
	[
		body('ley').not().isEmpty(),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Estructura_Org record
		let record = await Estructura_Org.save(modeldata);
		await afterAdd(record, req);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});
/**
    * After new record created
    * @param {object} record // newly created record
    */
async function afterAdd(record, req:HttpRequest){
    //enter statement here
    let queryParams = [  record.ley];
    let sqltext = `CALL generarestructura($1)`;
    let result = await rawQuery(sqltext, queryParams);
    // Procesar el resultado aquí
}


/**
 * Route to get  Estructura_Org record for edit
 * @route {GET} /estructura_org/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		const editFields = Estructura_Org.editFields(); // get fields to edit
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		query.where("idunidad=:recid", { recid });
		query.select(editFields);
		let record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Estructura_Org record
 * @route {POST} /estructura_org/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Estructura_Org.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Estructura_Org.getQuery();
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		query.where("idunidad=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Estructura_Org record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /estructura_org/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Estructura_Org.getQuery();
		query.where({'idunidad': In(recid)});
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		 
		const records = await query.getMany();
		if(!records){
			return res.recordNotFound();
		}
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		
		const result = await query.delete().execute();
		
		return res.send(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Estructura_Org record
 * @route {POST} /estructura_org/add
 */
router.post('/agregarorg/' , 
	[
		body('descripcion').not().isEmpty(),
		body('dependencia').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Estructura_Org record
		let record = await Estructura_Org.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Estructura_Org record for edit
 * @route {GET} /estructura_org/edit/{recid}
 */
router.get('/edicionorg/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		const editFields = Estructura_Org.edicionorgFields(); // get fields to edit
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		query.where("idunidad=:recid", { recid });
		query.select(editFields);
		let record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Estructura_Org record
 * @route {POST} /estructura_org/edit/{recid}
 */
router.post('/edicionorg/:recid' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('soa').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Estructura_Org.edicionorgFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Estructura_Org.getQuery();
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		query.where("idunidad=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to list estructura_org records
 * @route {GET} /estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/vista/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Estructura_Org.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		
		if(search){
			let searchFields = Estructura_Org.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere('idunidad=:userid', { userid: req.user.id });
		
		const selectFields = Estructura_Org.vistaFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idunidad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
