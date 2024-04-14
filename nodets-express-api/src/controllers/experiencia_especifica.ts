/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Experiencia_Especifica = DB.Experiencia_Especifica;
const router = express.Router();




/**
 * Route to list experiencia_especifica records
 * @route {GET} /experiencia_especifica/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Experiencia_Especifica.getQuery();
		
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
			let searchFields = Experiencia_Especifica.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Experiencia_Especifica.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_ee', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Experiencia_Especifica.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Experiencia_Especifica record
 * @route {GET} /experiencia_especifica/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Experiencia_Especifica.getQuery();
		query.where("id_ee=:recid", { recid });
		let selectFields = Experiencia_Especifica.viewFields();
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
 * Route to insert Experiencia_Especifica record
 * @route {POST} /experiencia_especifica/add
 */
router.post('/add/' , 
	[
		body('id_evaluacionperfil').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('detalle_ee').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Experiencia_Especifica record
		let record = await Experiencia_Especifica.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Experiencia_Especifica record for edit
 * @route {GET} /experiencia_especifica/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Experiencia_Especifica.getQuery();
		const editFields = Experiencia_Especifica.editFields(); // get fields to edit
		query.where("id_ee=:recid", { recid });
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
 * Route to update  Experiencia_Especifica record
 * @route {POST} /experiencia_especifica/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id_ee').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('id_evaluacionperfil').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('detalle_ee').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Experiencia_Especifica.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Experiencia_Especifica.getQuery();
		query.where("id_ee=:recid", { recid });
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
 * Route to delete Experiencia_Especifica record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /experiencia_especifica/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Experiencia_Especifica.getQuery();
		query.where({'id_ee': In(recid)});
		 
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
