/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Formacion_Guia = DB.Formacion_Guia;
const router = express.Router();




/**
 * Route to list formacion_guia records
 * @route {GET} /formacion_guia/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Formacion_Guia.getQuery();
		
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
			let searchFields = Formacion_Guia.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Formacion_Guia.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idfg', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Formacion_Guia.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Formacion_Guia record
 * @route {GET} /formacion_guia/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formacion_Guia.getQuery();
		query.where("idfg=:recid", { recid });
		let selectFields = Formacion_Guia.viewFields();
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
 * Route to insert Formacion_Guia record
 * @route {POST} /formacion_guia/add
 */
router.post('/add/' , 
	[
		body('idfg').not().isEmpty().isNumeric(),
		body('valorfg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripciofg').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Formacion_Guia record
		let record = await Formacion_Guia.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Formacion_Guia record for edit
 * @route {GET} /formacion_guia/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formacion_Guia.getQuery();
		const editFields = Formacion_Guia.editFields(); // get fields to edit
		query.where("idfg=:recid", { recid });
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
 * Route to update  Formacion_Guia record
 * @route {POST} /formacion_guia/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('idfg').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('valorfg').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripciofg').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Formacion_Guia.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Formacion_Guia.getQuery();
		query.where("idfg=:recid", { recid });
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
 * Route to delete Formacion_Guia record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /formacion_guia/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Formacion_Guia.getQuery();
		query.where({'idfg': In(recid)});
		 
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
export default router;
