/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Gestion = DB.Gestion;
const router = express.Router();




/**
 * Route to list gestion records
 * @route {GET} /gestion/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Gestion.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		
		const selectFields = Gestion.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idgestion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Gestion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Gestion record
 * @route {GET} /gestion/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Gestion.getQuery();
		query.where("idgestion=:recid", { recid });
		let selectFields = Gestion.viewFields();
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
 * Route to insert Gestion record
 * @route {POST} /gestion/add
 */
router.post('/add/' , 
	[
		body('habilitado').not().isEmpty(),
		body('detalle').optional({nullable: true, checkFalsy: true}),
		body('anyo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codgestion').not().isEmpty(),
		body('id_user').not().isEmpty().isNumeric(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		await beforeAdd(modeldata, req);
		
		//save Gestion record
		let record = await Gestion.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});
/**
    * Before create new record
    * @param {object} postdata // validated form data used to create new record
    */
async function beforeAdd(postdata, req:HttpRequest){
    //enter statement here
    const sqltext = `select generar_idgestion()` ;
    const records = await rawQuery(sqltext);
    //  console.log("valores ", records[0]);
    // console.log("postdata ROA ", postdata);
    postdata.idgestion = records[0].generar_idgestion;
}


/**
 * Route to get  Gestion record for edit
 * @route {GET} /gestion/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Gestion.getQuery();
		const editFields = Gestion.editFields(); // get fields to edit
		query.where("idgestion=:recid", { recid });
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
 * Route to update  Gestion record
 * @route {POST} /gestion/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('habilitado').optional({nullable: true}).not().isEmpty(),
		body('detalle').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true}).not().isEmpty(),
		body('id_user').optional({nullable: true}).not().isEmpty().isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Gestion.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Gestion.getQuery();
		query.where("idgestion=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		await afterEdit(recid, record, req);
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});
/**
    * After page record updated
    * @param {string} recid // updated record id
    * @param {object} record // updated page record
    */
async function afterEdit(recid, record, req:HttpRequest){
    //enter statement here
    let queryParams = [record.idgestion];
    let sqltext = `CALL actualiza_gestion_act($1)`;
    let result = await rawQuery(sqltext, queryParams);
}


/**
 * Route to delete Gestion record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /gestion/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Gestion.getQuery();
		query.where({'idgestion': In(recid)});
		 
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
 * Route to get  Gestion record for edit
 * @route {GET} /gestion/edit/{recid}
 */
router.get('/editar/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Gestion.getQuery();
		const editFields = Gestion.editarFields(); // get fields to edit
		query.where("idgestion=:recid", { recid });
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
 * Route to update  Gestion record
 * @route {POST} /gestion/edit/{recid}
 */
router.post('/editar/:recid' , 
	[
		body('idgestion').optional({nullable: true}).not().isEmpty(),
		body('habilitado').optional({nullable: true}).not().isEmpty(),
		body('detalle').optional({nullable: true, checkFalsy: true}),
		body('anyo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codgestion').optional({nullable: true}).not().isEmpty(),
		body('id_user').optional({nullable: true}).not().isEmpty().isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Gestion.editarFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Gestion.getQuery();
		query.where("idgestion=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		await afterEditar(recid, record, req);
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});
/**
    * After page record updated
    * @param {string} recid // updated record id
    * @param {object} record // updated page record
    */
async function afterEditar(recid, record, req:HttpRequest){
    //enter statement here
      let queryParams = [record.idgestion];
    let sqltext = `CALL actualiza_gestion_act($1)`;
    let result = await rawQuery(sqltext, queryParams);
}
export default router;
