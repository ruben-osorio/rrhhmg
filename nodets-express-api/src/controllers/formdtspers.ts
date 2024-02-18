/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Formdtspers = DB.Formdtspers;
const router = express.Router();




/**
 * Route to list formdtspers records
 * @route {GET} /formdtspers/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Formdtspers.getQuery();
		
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
			let searchFields = Formdtspers.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Formdtspers.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_formdtspers', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Formdtspers.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Formdtspers record
 * @route {GET} /formdtspers/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formdtspers.getQuery();
		query.where("id_formdtspers=:recid", { recid });
		let selectFields = Formdtspers.viewFields();
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
 * Route to insert Formdtspers record
 * @route {POST} /formdtspers/add
 */
router.post('/add/' , 
	[
		body('nrotitpos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('hrscursbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestioncursbasico').optional({nullable: true, checkFalsy: true}),
		body('gestionpos').optional({nullable: true, checkFalsy: true}),
		body('gestioncolegio').optional({nullable: true, checkFalsy: true}),
		body('hrsotrcursos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nrotitbach').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionotrcursos').optional({nullable: true, checkFalsy: true}),
		body('finicioexp').optional({nullable: true, checkFalsy: true}),
		body('ffinexp').optional({nullable: true, checkFalsy: true}),
		body('hrsidioma').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionidioma').optional({nullable: true, checkFalsy: true}),
		body('nrotituniv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionuniv').optional({nullable: true, checkFalsy: true}),
		body('nomidioma').optional({nullable: true, checkFalsy: true}),
		body('tipoidioma').optional({nullable: true, checkFalsy: true}),
		body('certidioma').optional({nullable: true, checkFalsy: true}),
		body('nomcursbasico').optional({nullable: true, checkFalsy: true}),
		body('instcursbasico').optional({nullable: true, checkFalsy: true}),
		body('nomotrcursos').optional({nullable: true, checkFalsy: true}),
		body('instotrcursos').optional({nullable: true, checkFalsy: true}),
		body('certotrcursos').optional({nullable: true, checkFalsy: true}),
		body('entidadexp').optional({nullable: true, checkFalsy: true}),
		body('cargoexp').optional({nullable: true, checkFalsy: true}),
		body('funcionesexp').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('grado').optional({nullable: true, checkFalsy: true}),
		body('curso').optional({nullable: true, checkFalsy: true}),
		body('titulobach').optional({nullable: true, checkFalsy: true}),
		body('colegio').optional({nullable: true, checkFalsy: true}),
		body('carrerauniv').optional({nullable: true, checkFalsy: true}),
		body('casaestuniv').optional({nullable: true, checkFalsy: true}),
		body('calidaduniv').optional({nullable: true, checkFalsy: true}),
		body('niveluniv').optional({nullable: true, checkFalsy: true}),
		body('titulouniv').optional({nullable: true, checkFalsy: true}),
		body('cursopost').optional({nullable: true, checkFalsy: true}),
		body('nomcurspost').optional({nullable: true, checkFalsy: true}),
		body('instpost').optional({nullable: true, checkFalsy: true}),
		body('modalidadpost').optional({nullable: true, checkFalsy: true}),
		body('titpos').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Formdtspers record
		let record = await Formdtspers.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Formdtspers record for edit
 * @route {GET} /formdtspers/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Formdtspers.getQuery();
		const editFields = Formdtspers.editFields(); // get fields to edit
		query.where("id_formdtspers=:recid", { recid });
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
 * Route to update  Formdtspers record
 * @route {POST} /formdtspers/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nrotitpos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('hrscursbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestioncursbasico').optional({nullable: true, checkFalsy: true}),
		body('gestionpos').optional({nullable: true, checkFalsy: true}),
		body('gestioncolegio').optional({nullable: true, checkFalsy: true}),
		body('hrsotrcursos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nrotitbach').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionotrcursos').optional({nullable: true, checkFalsy: true}),
		body('finicioexp').optional({nullable: true, checkFalsy: true}),
		body('ffinexp').optional({nullable: true, checkFalsy: true}),
		body('hrsidioma').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionidioma').optional({nullable: true, checkFalsy: true}),
		body('nrotituniv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('gestionuniv').optional({nullable: true, checkFalsy: true}),
		body('nomidioma').optional({nullable: true, checkFalsy: true}),
		body('tipoidioma').optional({nullable: true, checkFalsy: true}),
		body('certidioma').optional({nullable: true, checkFalsy: true}),
		body('nomcursbasico').optional({nullable: true, checkFalsy: true}),
		body('instcursbasico').optional({nullable: true, checkFalsy: true}),
		body('nomotrcursos').optional({nullable: true, checkFalsy: true}),
		body('instotrcursos').optional({nullable: true, checkFalsy: true}),
		body('certotrcursos').optional({nullable: true, checkFalsy: true}),
		body('entidadexp').optional({nullable: true, checkFalsy: true}),
		body('cargoexp').optional({nullable: true, checkFalsy: true}),
		body('funcionesexp').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('grado').optional({nullable: true, checkFalsy: true}),
		body('curso').optional({nullable: true, checkFalsy: true}),
		body('titulobach').optional({nullable: true, checkFalsy: true}),
		body('colegio').optional({nullable: true, checkFalsy: true}),
		body('carrerauniv').optional({nullable: true, checkFalsy: true}),
		body('casaestuniv').optional({nullable: true, checkFalsy: true}),
		body('calidaduniv').optional({nullable: true, checkFalsy: true}),
		body('niveluniv').optional({nullable: true, checkFalsy: true}),
		body('titulouniv').optional({nullable: true, checkFalsy: true}),
		body('cursopost').optional({nullable: true, checkFalsy: true}),
		body('nomcurspost').optional({nullable: true, checkFalsy: true}),
		body('instpost').optional({nullable: true, checkFalsy: true}),
		body('modalidadpost').optional({nullable: true, checkFalsy: true}),
		body('titpos').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Formdtspers.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Formdtspers.getQuery();
		query.where("id_formdtspers=:recid", { recid });
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
 * Route to delete Formdtspers record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /formdtspers/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Formdtspers.getQuery();
		query.where({'id_formdtspers': In(recid)});
		 
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
