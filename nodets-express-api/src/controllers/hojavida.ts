/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Hojavida = DB.Hojavida;
const router = express.Router();




/**
 * Route to list hojavida records
 * @route {GET} /hojavida/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Hojavida.getQuery();
		
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
			let searchFields = Hojavida.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		
		const selectFields = Hojavida.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idhoja', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		await beforeList(fieldName, fieldValue, req);
		
		//return records and pager info
		const pageData = await Hojavida.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
/**
* Before page list record
* @param {string} fieldName //filter records by table field
* @param {string} fieldValue //filter value
*/
async function beforeList(fieldName, fieldValue, req:HttpRequest){
    //enter statement here
}


/**
 * Route to view Hojavida record
 * @route {GET} /hojavida/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Hojavida.getQuery();
		query.where("idhoja=:recid", { recid });
		let selectFields = Hojavida.viewFields();
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
 * Route to insert Hojavida record
 * @route {POST} /hojavida/add
 */
router.post('/add/' , 
	[
		body('fnacimiento').not().isEmpty(),
		body('nacionalidad').optional({nullable: true, checkFalsy: true}),
		body('ciudad').optional({nullable: true, checkFalsy: true}),
		body('telefono').optional({nullable: true, checkFalsy: true}),
		body('movil').optional({nullable: true, checkFalsy: true}),
		body('correo').not().isEmpty().isEmail(),
		body('direccion').optional({nullable: true, checkFalsy: true}),
		body('estcivil').optional({nullable: true, checkFalsy: true}),
		body('genero').optional({nullable: true, checkFalsy: true}),
		body('militar').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fotografia').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.fotografia !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.fotografia, "fotografia");
			modeldata.fotografia = fileInfo.filepath;
		}
		
		// page business logic validation
		let validationError = validateAddPage(modeldata);
		if(validationError){
			return res.badRequest(validationError);
		}
		await beforeAdd(modeldata, req);
		
		//save Hojavida record
		let record = await Hojavida.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});
/**
* Page business logic validation
* if validation fails return error message else return null
* @param array modeldata
* @return string
*/
function validateAddPage(modeldata){
    //validation logic here
    return null;
}
// emi validador email.js
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
/**
    * Before create new record
    * @param {object} postdata // validated form data used to create new record
    */
async function beforeAdd(postdata, req:HttpRequest){
    //enter statement here
}


/**
 * Route to get  Hojavida record for edit
 * @route {GET} /hojavida/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Hojavida.getQuery();
		const editFields = Hojavida.editFields(); // get fields to edit
		query.where("idhoja=:recid", { recid });
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
 * Route to update  Hojavida record
 * @route {POST} /hojavida/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('fnacimiento').optional({nullable: true}).not().isEmpty(),
		body('nacionalidad').optional({nullable: true, checkFalsy: true}),
		body('ciudad').optional({nullable: true, checkFalsy: true}),
		body('telefono').optional({nullable: true, checkFalsy: true}),
		body('movil').optional({nullable: true, checkFalsy: true}),
		body('correo').optional({nullable: true}).not().isEmpty().isEmail(),
		body('direccion').optional({nullable: true, checkFalsy: true}),
		body('estcivil').optional({nullable: true, checkFalsy: true}),
		body('genero').optional({nullable: true, checkFalsy: true}),
		body('militar').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fotografia').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Hojavida.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.fotografia !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.fotografia, "fotografia");
			modeldata.fotografia = fileInfo.filepath;
		}
		const query = Hojavida.getQuery();
		query.where("idhoja=:recid", { recid });
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
 * Route to delete Hojavida record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /hojavida/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Hojavida.getQuery();
		query.where({'idhoja': In(recid)});
		 
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
