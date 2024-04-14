/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Perfilreferencial = DB.Perfilreferencial;
const router = express.Router();




/**
 * Route to list perfilreferencial records
 * @route {GET} /perfilreferencial/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Perfilreferencial.getQuery();
		
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
			let searchFields = Perfilreferencial.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Perfilreferencial.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idref', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Perfilreferencial.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Perfilreferencial record
 * @route {GET} /perfilreferencial/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Perfilreferencial.getQuery();
		query.where("idref=:recid", { recid });
		let selectFields = Perfilreferencial.viewFields();
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
 * Route to insert Perfilreferencial record
 * @route {POST} /perfilreferencial/add
 */
router.post('/add/' , 
	[
		body('nivelref').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('denomref').optional({nullable: true, checkFalsy: true}),
		body('haberbasicoref').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('formacadref').optional({nullable: true, checkFalsy: true}),
		body('anioelg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('meselg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('obselg').optional({nullable: true, checkFalsy: true}),
		body('anioele').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mesele').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('obsele').optional({nullable: true, checkFalsy: true}),
		body('idref').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		modeldata['general'] = "EXPERIENCIA ESPECIFICA";
		
		//save Perfilreferencial record
		let record = await Perfilreferencial.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Perfilreferencial record for edit
 * @route {GET} /perfilreferencial/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Perfilreferencial.getQuery();
		const editFields = Perfilreferencial.editFields(); // get fields to edit
		query.where("idref=:recid", { recid });
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
 * Route to update  Perfilreferencial record
 * @route {POST} /perfilreferencial/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nivelref').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('denomref').optional({nullable: true, checkFalsy: true}),
		body('haberbasicoref').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('formacadref').optional({nullable: true, checkFalsy: true}),
		body('anioelg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('meselg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('obselg').optional({nullable: true, checkFalsy: true}),
		body('anioele').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mesele').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('obsele').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('idref').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Perfilreferencial.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Perfilreferencial.getQuery();
		query.where("idref=:recid", { recid });
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
 * Route to delete Perfilreferencial record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /perfilreferencial/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Perfilreferencial.getQuery();
		query.where({'idref': In(recid)});
		 
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
 * Route to list perfilreferencial records
 * @route {GET} /perfilreferencial/index/{fieldname}/{fieldvalue}
 */
router.get(['/evalist/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Perfilreferencial.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.perfilreferencial_denomref){
			let paramValue = req.query.perfilreferencial_denomref;
			query.andWhere("perfilreferencial.denomref=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Perfilreferencial.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Perfilreferencial.evalistFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idref', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Perfilreferencial.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to list perfilreferencial records
 * @route {GET} /perfilreferencial/index/{fieldname}/{fieldvalue}
 */
router.get(['/prlist/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Perfilreferencial.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 2;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		
		if(search){
			let searchFields = Perfilreferencial.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Perfilreferencial.prlistFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idref', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Perfilreferencial.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
