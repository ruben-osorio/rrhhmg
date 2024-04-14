/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Formidiomas2 = DB.Formidiomas2;
const router = express.Router();




/**
 * Route to list formidiomas2 records
 * @route {GET} /formidiomas2/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Formidiomas2.getQuery();
		
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
			let searchFields = Formidiomas2.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Formidiomas2.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idformidioma', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Formidiomas2.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Formidiomas2 record
 * @route {GET} /formidiomas2/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formidiomas2.getQuery();
		query.where("idformidioma=:recid", { recid });
		let selectFields = Formidiomas2.viewFields();
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
 * Route to insert Formidiomas2 record
 * @route {POST} /formidiomas2/add
 */
router.post('/add/' , 
	[
		body('gestioncurso').optional({nullable: true, checkFalsy: true}),
		body('horasingles').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipoidioma').optional({nullable: true, checkFalsy: true}),
		body('certificadoidioma').optional({nullable: true, checkFalsy: true}),
		body('nombreidioma').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('otroidioma').optional({nullable: true, checkFalsy: true}),
		body('institucionidioma').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Formidiomas2 record
		let record = await Formidiomas2.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Formidiomas2 record for edit
 * @route {GET} /formidiomas2/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formidiomas2.getQuery();
		const editFields = Formidiomas2.editFields(); // get fields to edit
		query.where("idformidioma=:recid", { recid });
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
 * Route to update  Formidiomas2 record
 * @route {POST} /formidiomas2/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('gestioncurso').optional({nullable: true, checkFalsy: true}),
		body('horasingles').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipoidioma').optional({nullable: true, checkFalsy: true}),
		body('certificadoidioma').optional({nullable: true, checkFalsy: true}),
		body('nombreidioma').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('otroidioma').optional({nullable: true, checkFalsy: true}),
		body('institucionidioma').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Formidiomas2.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Formidiomas2.getQuery();
		query.where("idformidioma=:recid", { recid });
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
 * Route to delete Formidiomas2 record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /formidiomas2/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Formidiomas2.getQuery();
		query.where({'idformidioma': In(recid)});
		 
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
