/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Cursosbasicosestudios = DB.Cursosbasicosestudios;
const router = express.Router();




/**
 * Route to list cursosbasicosestudios records
 * @route {GET} /cursosbasicosestudios/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Cursosbasicosestudios.getQuery();
		
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
			let searchFields = Cursosbasicosestudios.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Cursosbasicosestudios.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idbasicosestudios', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Cursosbasicosestudios.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Cursosbasicosestudios record
 * @route {GET} /cursosbasicosestudios/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Cursosbasicosestudios.getQuery();
		query.where("idBasicosEstudios=:recid", { recid });
		let selectFields = Cursosbasicosestudios.viewFields();
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
 * Route to insert Cursosbasicosestudios record
 * @route {POST} /cursosbasicosestudios/add
 */
router.post('/add/' , 
	[
		body('gestioncursobasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nombrecursobasico').optional({nullable: true, checkFalsy: true}),
		body('lugarcursobasico').optional({nullable: true, checkFalsy: true}),
		body('certcursobasico').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Cursosbasicosestudios record
		let record = await Cursosbasicosestudios.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Cursosbasicosestudios record for edit
 * @route {GET} /cursosbasicosestudios/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Cursosbasicosestudios.getQuery();
		const editFields = Cursosbasicosestudios.editFields(); // get fields to edit
		query.where("idBasicosEstudios=:recid", { recid });
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
 * Route to update  Cursosbasicosestudios record
 * @route {POST} /cursosbasicosestudios/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('gestioncursobasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nombrecursobasico').optional({nullable: true, checkFalsy: true}),
		body('lugarcursobasico').optional({nullable: true, checkFalsy: true}),
		body('certcursobasico').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Cursosbasicosestudios.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Cursosbasicosestudios.getQuery();
		query.where("idBasicosEstudios=:recid", { recid });
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
 * Route to delete Cursosbasicosestudios record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /cursosbasicosestudios/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Cursosbasicosestudios.getQuery();
		query.where({'idbasicosestudios': In(recid)});
		 
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
