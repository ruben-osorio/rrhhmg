/**
 * Express router providing  related routes
*/
import express from 'express';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
const V_Hojavida = DB.V_Hojavida;
const router = express.Router();




/**
 * Route to list v_hojavida records
 * @route {GET} /v_hojavida/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = V_Hojavida.getQuery();
		
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
			let searchFields = V_Hojavida.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = V_Hojavida.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await V_Hojavida.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
