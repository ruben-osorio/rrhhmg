/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Eval_Temp_Grid = DB.Eval_Temp_Grid;
const router = express.Router();




/**
 * Route to list eval_temp_grid records
 * @route {GET} /eval_temp_grid/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Eval_Temp_Grid.getQuery();
		
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
			let searchFields = Eval_Temp_Grid.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Eval_Temp_Grid.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_eval_tem', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Eval_Temp_Grid.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Eval_Temp_Grid record
 * @route {GET} /eval_temp_grid/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eval_Temp_Grid.getQuery();
		query.where("id_eval_tem=:recid", { recid });
		let selectFields = Eval_Temp_Grid.viewFields();
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
 * Route to insert Eval_Temp_Grid record
 * @route {POST} /eval_temp_grid/add
 */
router.post('/add/' , 
	[
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('idref').optional({nullable: true, checkFalsy: true}),
		body('ultimo_secund_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof1').optional({nullable: true, checkFalsy: true}),
		body('ultimo_universit_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof2').optional({nullable: true, checkFalsy: true}),
		body('postgrado_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof3').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Eval_Temp_Grid record
		let record = await Eval_Temp_Grid.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Eval_Temp_Grid record for edit
 * @route {GET} /eval_temp_grid/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eval_Temp_Grid.getQuery();
		const editFields = Eval_Temp_Grid.editFields(); // get fields to edit
		query.where("id_eval_tem=:recid", { recid });
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
 * Route to update  Eval_Temp_Grid record
 * @route {POST} /eval_temp_grid/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('idref').optional({nullable: true, checkFalsy: true}),
		body('ultimo_secund_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof1').optional({nullable: true, checkFalsy: true}),
		body('ultimo_universit_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof2').optional({nullable: true, checkFalsy: true}),
		body('postgrado_perfil').optional({nullable: true, checkFalsy: true}),
		body('estadof3').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Eval_Temp_Grid.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Eval_Temp_Grid.getQuery();
		query.where("id_eval_tem=:recid", { recid });
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
 * Route to delete Eval_Temp_Grid record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /eval_temp_grid/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Eval_Temp_Grid.getQuery();
		query.where({'id_eval_tem': In(recid)});
		 
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
