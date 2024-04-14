/**
 * Express router providing related routes to page component data
*/
import express from 'express';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
const router = express.Router();




 /**
 * Route to get codusuario_option_list records
 * @route {GET} /components_data/codusuario_option_list
 */
router.get('/codusuario_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idcarnet as value, idcarnet as label FROM usuarios` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get idpermanente_option_list records
 * @route {GET} /components_data/idpermanente_option_list
 */
router.get('/idpermanente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente AS value,nombre_completo AS label FROM v_permanente2 ORDER BY nombre_completo ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get cas_idpermanente_autofill records
 * @route {GET} /components_data/cas_idpermanente_autofill
 */
router.get('/cas_idpermanente_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `
SELECT 
  permanente.idpermanente,
  permanente.codusuario,
  usuarios.idcarnet,
  usuarios.expedido,
  usuarios.nombres,
  usuarios.appaterno,
  usuarios.apmaterno,
  usuarios.usuario,
  usuarios.estado
FROM
  usuarios
  RIGHT OUTER JOIN permanente ON (usuarios.idcarnet = permanente.codusuario)
  WHERE 
  permanente.idpermanente = $1
  " , array(queryParams.push(req.query.value))` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get cas_anios_serv_autofill records
 * @route {GET} /components_data/cas_anios_serv_autofill
 */
router.get('/cas_anios_serv_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente FROM v_permanente2 WHERE nombre_completo=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codhoja_option_list records
 * @route {GET} /components_data/codhoja_option_list
 */
router.get('/codhoja_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idhoja as value, idhoja as label FROM hojavida` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get iddeclaracion_option_list records
 * @route {GET} /components_data/iddeclaracion_option_list
 */
router.get('/iddeclaracion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iddeclaracion as value, iddeclaracion as label FROM declaraciones` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get coditem_option_list records
 * @route {GET} /components_data/coditem_option_list
 */
router.get('/coditem_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iditem as value, iditem as label FROM detitem` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codescala_option_list records
 * @route {GET} /components_data/codescala_option_list
 */
router.get('/codescala_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idescala as value, idescala as label FROM escala` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codunidad_option_list records
 * @route {GET} /components_data/codunidad_option_list
 */
router.get('/codunidad_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idunidad as value, idunidad as label FROM unidad` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codgestion_option_list records
 * @route {GET} /components_data/codgestion_option_list
 */
router.get('/codgestion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idgestion as value, idgestion as label FROM gestion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get dependencia_option_list records
 * @route {GET} /components_data/dependencia_option_list
 */
router.get('/dependencia_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT identidad as value, identidad as label FROM entidad` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get financiero_option_list records
 * @route {GET} /components_data/financiero_option_list
 */
router.get('/financiero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_desc AS value,fuente_desc AS label FROM fuente where codgestion  in (select codgestion_activa()) ORDER BY idfuente` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get normativa_codigo_option_list records
 * @route {GET} /components_data/normativa_codigo_option_list
 */
router.get('/normativa_codigo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct normativa_codigo AS value,normativa_codigo AS label FROM escala where codgestion = codgestion_activa()` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivel_option_list records
 * @route {GET} /components_data/nivel_option_list
 */
router.get('/nivel_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct nivel_denom AS value,nivel_denom AS label FROM denominacion ORDER BY nivel_denom ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get descripcion_option_list records
 * @route {GET} /components_data/descripcion_option_list
 */
router.get('/descripcion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT descripcion AS value,descripcion AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get dependencia_option_list_2 records
 * @route {GET} /components_data/dependencia_option_list_2
 */
router.get('/dependencia_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT detalle AS value,detalle AS label FROM unidad ORDER BY detalle ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get sigla_option_list records
 * @route {GET} /components_data/sigla_option_list
 */
router.get('/sigla_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT sigla AS value,sigla AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get soa_option_list records
 * @route {GET} /components_data/soa_option_list
 */
router.get('/soa_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT soa AS value,soa AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get item_option_list records
 * @route {GET} /components_data/item_option_list
 */
router.get('/item_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT numero_item AS value,numero_item AS label FROM planilla_presupuestaria ORDER BY numero_item` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codevaluacion_option_list records
 * @route {GET} /components_data/codevaluacion_option_list
 */
router.get('/codevaluacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idevaluacion as value, idevaluacion as label FROM evaluacion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get entidad_option_list records
 * @route {GET} /components_data/entidad_option_list
 */
router.get('/entidad_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_resumen AS value, fuente_resumen AS label FROM fuente WHERE  codgestion = (SELECT codgestion_activa()) ORDER BY fuente_resumen ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get cargo_option_list records
 * @route {GET} /components_data/cargo_option_list
 */
router.get('/cargo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `
SELECT nivel AS value,nivel AS label FROM escala WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) and codgestion  in (select codgestion_activa()) ORDER BY nivel asc
" , array(queryParams.push(req.query.lookup_entidad);)` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get experiencia_cargo_autofill records
 * @route {GET} /components_data/experiencia_cargo_autofill
 */
router.get('/experiencia_cargo_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haberbasico, numero_items, denominacion FROM escala WHERE nivel=$1 and codgestion = (SELECT codgestion_activa())` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get titbachiller_option_list records
 * @route {GET} /components_data/titbachiller_option_list
 */
router.get('/titbachiller_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT tiene AS value,tiene AS label FROM titbachhv ORDER BY tiene` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get estcivil_option_list records
 * @route {GET} /components_data/estcivil_option_list
 */
router.get('/estcivil_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT nombrestciv AS value,nombrestciv AS label FROM estadocivil ORDER BY nombrestciv` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get genero_option_list records
 * @route {GET} /components_data/genero_option_list
 */
router.get('/genero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT nomgenero AS value,nomgenero AS label FROM genero ORDER BY nomgenero` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivelref_option_list records
 * @route {GET} /components_data/nivelref_option_list
 */
router.get('/nivelref_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct nivel AS value, nivel AS label FROM escala WHERE codgestion in (select codgestion_activa()) order by nivel;
` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denomref_option_list records
 * @route {GET} /components_data/denomref_option_list
 */
router.get('/denomref_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT den1 AS value, den1 AS label FROM escala WHERE codgestion IN (SELECT codgestion_activa()) AND nivel = $1 AND den1 IS NOT NULL AND den1 <> '' union SELECT den2 AS value, den2 AS label FROM escala WHERE codgestion IN (SELECT codgestion_activa()) AND nivel = $1 AND den2 IS NOT NULL AND den2 <> '' union SELECT den3 AS value, den3 AS label FROM escala  WHERE codgestion IN (SELECT codgestion_activa()) AND nivel = 1 AND den3 IS NOT NULL AND den3 <> '' union SELECT den4 AS value, den4 AS label FROM escala  WHERE codgestion IN (SELECT codgestion_activa()) AND nivel = $1 AND den4 IS NOT NULL AND den4 <> '';` ;
		let queryParams = [];
		queryParams.push(req.query.lookup_nivelref);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get perfilreferencial_nivelref_autofill records
 * @route {GET} /components_data/perfilreferencial_nivelref_autofill
 */
router.get('/perfilreferencial_nivelref_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haberbasico, codgestion FROM escala WHERE nivel=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get coddetesc_option_list records
 * @route {GET} /components_data/coddetesc_option_list
 */
router.get('/coddetesc_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iddetesc as value, iddetesc as label FROM detescala` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codpermanente_option_list records
 * @route {GET} /components_data/codpermanente_option_list
 */
router.get('/codpermanente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente as value, idpermanente as label FROM permanente` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codboleta_option_list records
 * @route {GET} /components_data/codboleta_option_list
 */
router.get('/codboleta_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idboleta as value, idboleta as label FROM detboleta` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get role_id_option_list records
 * @route {GET} /components_data/role_id_option_list
 */
router.get('/role_id_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT role_id as value, role_name as label FROM roles` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get fuente_option_list records
 * @route {GET} /components_data/fuente_option_list
 */
router.get('/fuente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct fuente_resumen AS value,fuente_resumen AS label FROM fuente ORDER BY fuente_resumen ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivel_option_list_2 records
 * @route {GET} /components_data/nivel_option_list_2
 */
router.get('/nivel_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct nivel AS value,nivel AS label FROM escala WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) and codgestion  in (select codgestion_activa()) ORDER BY nivel asc` ;
		let queryParams = [];
		queryParams.push(req.query.lookup_fuente);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get haber_basico_option_list records
 * @route {GET} /components_data/haber_basico_option_list
 */
router.get('/haber_basico_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT DISTINCT haberbasico AS value,haberbasico AS label FROM escala ORDER BY haberbasico ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get fuente_option_list_2 records
 * @route {GET} /components_data/fuente_option_list_2
 */
router.get('/fuente_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_resumen AS value, fuente_desc AS label FROM fuente WHERE  codgestion = (SELECT codgestion_activa()) ORDER BY fuente_resumen ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivel_option_list_3 records
 * @route {GET} /components_data/nivel_option_list_3
 */
router.get('/nivel_option_list_3', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT nivel AS value,nivel AS label FROM escala WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) and codgestion  in (select codgestion_activa()) ORDER BY nivel asc
` ;
		let queryParams = [];
		queryParams.push(req.query.lookup_fuente);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_cargo_option_list records
 * @route {GET} /components_data/denominacion_cargo_option_list
 */
router.get('/denominacion_cargo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT den1 AS label, den1 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) and codgestion = (SELECT codgestion_activa()) AND COALESCE(den1, '') <> '' and nivel = $2
UNION ALL
SELECT den2 AS label, den2 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den2, '') <> '' and nivel = $2
UNION ALL
SELECT den3 AS label, den3 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den3, '') <> '' and nivel = $2
UNION ALL
SELECT den4 AS label, den4 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den4, '') <> '' and nivel = $2;
` ;
		let queryParams = [];
		queryParams.push(req.query.look_fuente);
console.log('fuente actual agregar:' + req.query.look_fuente );
queryParams.push(req.query.lookup_nivel);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get unidad_organiz_option_list records
 * @route {GET} /components_data/unidad_organiz_option_list
 */
router.get('/unidad_organiz_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT nombreuo AS value,nombreuo AS label FROM plantillauo where codgestion_activa()=codgestion ORDER BY nombreuo ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codgestion_option_list_2 records
 * @route {GET} /components_data/codgestion_option_list_2
 */
router.get('/codgestion_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `select idgestion from gestion
where habilitado ='True'` ;
		let queryParams = [];
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get planilla_presupuestaria_fuente_autofill records
 * @route {GET} /components_data/planilla_presupuestaria_fuente_autofill
 */
router.get('/planilla_presupuestaria_fuente_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT codgestion FROM fuente WHERE fuente_resumen=$1 and codgestion  in (select codgestion_activa())` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get planilla_presupuestaria_nivel_autofill records
 * @route {GET} /components_data/planilla_presupuestaria_nivel_autofill
 */
router.get('/planilla_presupuestaria_nivel_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haberbasico, numero_items, den1, den2, den3, den4 FROM escala WHERE nivel=$1 and codgestion = (SELECT codgestion_activa())` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get planilla_presupuestaria_haber_basico_autofill records
 * @route {GET} /components_data/planilla_presupuestaria_haber_basico_autofill
 */
router.get('/planilla_presupuestaria_haber_basico_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT  *  FROM escala WHERE haberbasico=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get haber_basico_option_list_2 records
 * @route {GET} /components_data/haber_basico_option_list_2
 */
router.get('/haber_basico_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haberbasico AS value,haberbasico AS label FROM escala WHERE nivel=$1 and codgestion = (SELECT codgestion_activa()) ORDER BY haberbasico ASC` ;
		let queryParams = [];
		queryParams.push(req.query.lookup_nivel);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_cargo_option_list_2 records
 * @route {GET} /components_data/denominacion_cargo_option_list_2
 */
router.get('/denominacion_cargo_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT den1 AS label, den1 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) and codgestion = (SELECT codgestion_activa()) AND COALESCE(den1, '') <> '' and nivel = $2
UNION ALL
SELECT den2 AS label, den2 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den2, '') <> '' and nivel = $2
UNION ALL
SELECT den3 AS label, den3 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den3, '') <> '' and nivel = $2
UNION ALL
SELECT den4 AS label, den4 AS value
FROM public.escala
WHERE financiero=( select fuente_desc FROM fuente where fuente_resumen = $1 and codgestion  in (select codgestion_activa()) ) AND codgestion = (SELECT codgestion_activa()) AND COALESCE(den4, '') <> '' and nivel = $2;
` ;
		let queryParams = [];
		queryParams.push(req.query.look_fuente);
console.log('fuente actual:' + req.query.look_fuente );
queryParams.push(req.query.lookup_nivel);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get descrip_puesto_option_list records
 * @route {GET} /components_data/descrip_puesto_option_list
 */
router.get('/descrip_puesto_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT descrip_puesto AS value,descrip_puesto AS label FROM planilla_presupuestaria where codgestion_activa()=codgestion ORDER BY descrip_puesto ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codpla_option_list records
 * @route {GET} /components_data/codpla_option_list
 */
router.get('/codpla_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpla as value, idpla as label FROM planillas` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codalmacen_option_list records
 * @route {GET} /components_data/codalmacen_option_list
 */
router.get('/codalmacen_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idalmacen as value, idalmacen as label FROM almacen` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codmaterial_option_list records
 * @route {GET} /components_data/codmaterial_option_list
 */
router.get('/codmaterial_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idmaterial as value, idmaterial as label FROM material` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Users table
 * @route {GET} /components_data/users_usuario_exist/{fieldvalue}
 */
router.get('/users_usuario_exist/:fieldvalue', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let val = req.params.fieldvalue;
		if(val){
			let recordExists = await DB.Users.getQuery().where({'usuario': val}).exists();
			return res.send(recordExists);
		}
		return res.send("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Users table
 * @route {GET} /components_data/users_email_exist/{fieldvalue}
 */
router.get('/users_email_exist/:fieldvalue', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let val = req.params.fieldvalue;
		if(val){
			let recordExists = await DB.Users.getQuery().where({'email': val}).exists();
			return res.send(recordExists);
		}
		return res.send("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_fuente_option_list records
 * @route {GET} /components_data/denominacion_fuente_option_list
 */
router.get('/denominacion_fuente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT  distinct denominacion.fuente AS value, fuente.fuente_desc AS label  FROM denominacion JOIN fuente ON denominacion.fuente=fuente.fuente_resumen` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get escala_financiero_option_list records
 * @route {GET} /components_data/escala_financiero_option_list
 */
router.get('/escala_financiero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_desc AS value,fuente_desc AS label FROM fuente WHERE codgestion=(SELECT idgestion FROM public.gestion WHERE habilitado='true') ORDER BY idfuente ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get perfilreferencial_denomref_option_list records
 * @route {GET} /components_data/perfilreferencial_denomref_option_list
 */
router.get('/perfilreferencial_denomref_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT denomref AS value,denomref AS label FROM perfilreferencial ORDER BY denomref ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
