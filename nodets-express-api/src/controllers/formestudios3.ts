/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Formestudios3 = DB.Formestudios3;
const router = express.Router();




/**
 * Route to list formestudios3 records
 * @route {GET} /formestudios3/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Formestudios3.getQuery();
		
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
			let searchFields = Formestudios3.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Formestudios3.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idformestudios', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Formestudios3.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Formestudios3 record
 * @route {GET} /formestudios3/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formestudios3.getQuery();
		query.where("idformestudios=:recid", { recid });
		let selectFields = Formestudios3.viewFields();
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
 * Route to insert Formestudios3 record
 * @route {POST} /formestudios3/add
 */
router.post('/add/' , 
	[
		body('nrotitbachiller').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('secundaria').optional({nullable: true, checkFalsy: true}),
		body('cicloesc').optional({nullable: true, checkFalsy: true}),
		body('titbachiller').optional({nullable: true, checkFalsy: true}),
		body('cursoesc').optional({nullable: true, checkFalsy: true}),
		body('nivelesc').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('institucion').optional({nullable: true, checkFalsy: true}),
		body('primaria').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Formestudios3 record
		let record = await Formestudios3.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Formestudios3 record for edit
 * @route {GET} /formestudios3/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formestudios3.getQuery();
		const editFields = Formestudios3.editFields(); // get fields to edit
		query.where("idformestudios=:recid", { recid });
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
 * Route to update  Formestudios3 record
 * @route {POST} /formestudios3/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nrotitbachiller').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('secundaria').optional({nullable: true, checkFalsy: true}),
		body('cicloesc').optional({nullable: true, checkFalsy: true}),
		body('titbachiller').optional({nullable: true, checkFalsy: true}),
		body('cursoesc').optional({nullable: true, checkFalsy: true}),
		body('nivelesc').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('institucion').optional({nullable: true, checkFalsy: true}),
		body('primaria').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Formestudios3.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Formestudios3.getQuery();
		query.where("idformestudios=:recid", { recid });
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
 * Route to delete Formestudios3 record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /formestudios3/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Formestudios3.getQuery();
		query.where({'idformestudios': In(recid)});
		 
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
