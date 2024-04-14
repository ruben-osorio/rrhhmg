/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Evaluacion_Perfil = DB.Evaluacion_Perfil;
const router = express.Router();




/**
 * Route to list evaluacion_perfil records
 * @route {GET} /evaluacion_perfil/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Evaluacion_Perfil.getQuery();
		
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
			let searchFields = Evaluacion_Perfil.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Evaluacion_Perfil.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Evaluacion_Perfil.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Evaluacion_Perfil record
 * @route {GET} /evaluacion_perfil/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Evaluacion_Perfil.getQuery();
		query.where("id=:recid", { recid });
		let selectFields = Evaluacion_Perfil.viewFields();
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
 * Route to insert Evaluacion_Perfil record
 * @route {POST} /evaluacion_perfil/add
 */
router.post('/add/' , 
	[
		body('coduser').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('item').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('idplanillapres').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('formacion_academica').optional({nullable: true, checkFalsy: true}),
		body('exp_especifica').optional({nullable: true, checkFalsy: true}),
		body('exp_general').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Evaluacion_Perfil record
		let record = await Evaluacion_Perfil.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Evaluacion_Perfil record for edit
 * @route {GET} /evaluacion_perfil/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Evaluacion_Perfil.getQuery();
		const editFields = Evaluacion_Perfil.editFields(); // get fields to edit
		query.where("id=:recid", { recid });
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
 * Route to update  Evaluacion_Perfil record
 * @route {POST} /evaluacion_perfil/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('coduser').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('item').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('idplanillapres').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('formacion_academica').optional({nullable: true, checkFalsy: true}),
		body('exp_especifica').optional({nullable: true, checkFalsy: true}),
		body('exp_general').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Evaluacion_Perfil.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Evaluacion_Perfil.getQuery();
		query.where("id=:recid", { recid });
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
 * Route to delete Evaluacion_Perfil record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /evaluacion_perfil/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Evaluacion_Perfil.getQuery();
		query.where({'id': In(recid)});
		 
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
