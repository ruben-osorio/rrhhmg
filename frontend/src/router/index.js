
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useAuth } from 'src/composables/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		//Dashboard routes


//_idpermiso routes

//almacen routes

//altashv routes
		{ path: '/altashv', name: 'altashvlist', component: () => import('pages/altashv/list.vue'), props: true },
		{ path: '/altashv/index/:fieldName?/:fieldValue?', component: () => import('pages/altashv/list.vue'), props: true },
		{ path: '/altashv/view/:id', name: 'altashvview', component: () => import('pages/altashv/view.vue'), props: true },
		{ path: '/altashv/add', name: 'altashvadd', component: () => import('pages/altashv/add.vue'), props: true },
		{ path: '/altashv/edit/:id', name: 'altashvedit', component: () => import('pages/altashv/edit.vue'), props: true },

//alternativahv routes
		{ path: '/alternativahv', name: 'alternativahvlist', component: () => import('pages/alternativahv/list.vue'), props: true },
		{ path: '/alternativahv/index/:fieldName?/:fieldValue?', component: () => import('pages/alternativahv/list.vue'), props: true },
		{ path: '/alternativahv/view/:id', name: 'alternativahvview', component: () => import('pages/alternativahv/view.vue'), props: true },
		{ path: '/alternativahv/add', name: 'alternativahvadd', component: () => import('pages/alternativahv/add.vue'), props: true },
		{ path: '/alternativahv/edit/:id', name: 'alternativahvedit', component: () => import('pages/alternativahv/edit.vue'), props: true },

//antiguedad routes
		{ path: '/antiguedad', name: 'antiguedadlist', component: () => import('pages/antiguedad/list.vue'), props: true },
		{ path: '/antiguedad/index/:fieldName?/:fieldValue?', component: () => import('pages/antiguedad/list.vue'), props: true },
		{ path: '/antiguedad/view/:id', name: 'antiguedadview', component: () => import('pages/antiguedad/view.vue'), props: true },
		{ path: '/antiguedad/add', name: 'antiguedadadd', component: () => import('pages/antiguedad/add.vue'), props: true },
		{ path: '/antiguedad/edit/:id', name: 'antiguedadedit', component: () => import('pages/antiguedad/edit.vue'), props: true },

//archivos routes
		{ path: '/archivos', name: 'archivoslist', component: () => import('pages/archivos/list.vue'), props: true },
		{ path: '/archivos/index/:fieldName?/:fieldValue?', component: () => import('pages/archivos/list.vue'), props: true },
		{ path: '/archivos/view/:id', name: 'archivosview', component: () => import('pages/archivos/view.vue'), props: true },
		{ path: '/archivos/add', name: 'archivosadd', component: () => import('pages/archivos/add.vue'), props: true },
		{ path: '/archivos/edit/:id', name: 'archivosedit', component: () => import('pages/archivos/edit.vue'), props: true },

//bandeja_eval_curricular routes
		{ path: '/bandeja_eval_curricular', name: 'bandeja_eval_curricularlist', component: () => import('pages/bandeja_eval_curricular/list.vue'), props: true },
		{ path: '/bandeja_eval_curricular/index/:fieldName?/:fieldValue?', component: () => import('pages/bandeja_eval_curricular/list.vue'), props: true },
		{ path: '/bandeja_eval_curricular/view/:id', name: 'bandeja_eval_curricularview', component: () => import('pages/bandeja_eval_curricular/view.vue'), props: true },
		{ path: '/bandeja_eval_curricular/add', name: 'bandeja_eval_curricularadd', component: () => import('pages/bandeja_eval_curricular/add.vue'), props: true },
		{ path: '/bandeja_eval_curricular/edit/:id', name: 'bandeja_eval_curricularedit', component: () => import('pages/bandeja_eval_curricular/edit.vue'), props: true },

//calidadhv routes
		{ path: '/calidadhv', name: 'calidadhvlist', component: () => import('pages/calidadhv/list.vue'), props: true },
		{ path: '/calidadhv/index/:fieldName?/:fieldValue?', component: () => import('pages/calidadhv/list.vue'), props: true },
		{ path: '/calidadhv/view/:id', name: 'calidadhvview', component: () => import('pages/calidadhv/view.vue'), props: true },
		{ path: '/calidadhv/add', name: 'calidadhvadd', component: () => import('pages/calidadhv/add.vue'), props: true },
		{ path: '/calidadhv/edit/:id', name: 'calidadhvedit', component: () => import('pages/calidadhv/edit.vue'), props: true },

//carrerashv routes
		{ path: '/carrerashv', name: 'carrerashvlist', component: () => import('pages/carrerashv/list.vue'), props: true },
		{ path: '/carrerashv/index/:fieldName?/:fieldValue?', component: () => import('pages/carrerashv/list.vue'), props: true },
		{ path: '/carrerashv/view/:id', name: 'carrerashvview', component: () => import('pages/carrerashv/view.vue'), props: true },
		{ path: '/carrerashv/add', name: 'carrerashvadd', component: () => import('pages/carrerashv/add.vue'), props: true },
		{ path: '/carrerashv/edit/:id', name: 'carrerashvedit', component: () => import('pages/carrerashv/edit.vue'), props: true },

//cas routes
		{ path: '/cas', name: 'caslist', component: () => import('pages/cas/list.vue'), props: true },
		{ path: '/cas/index/:fieldName?/:fieldValue?', component: () => import('pages/cas/list.vue'), props: true },
		{ path: '/cas/view/:id', name: 'casview', component: () => import('pages/cas/view.vue'), props: true },
		{ path: '/cas/add', name: 'casadd', component: () => import('pages/cas/add.vue'), props: true },
		{ path: '/cas/edit/:id', name: 'casedit', component: () => import('pages/cas/edit.vue'), props: true },

//categoria routes
		{ path: '/categoria', name: 'categorialist', component: () => import('pages/categoria/list.vue'), props: true },
		{ path: '/categoria/index/:fieldName?/:fieldValue?', component: () => import('pages/categoria/list.vue'), props: true },
		{ path: '/categoria/view/:id', name: 'categoriaview', component: () => import('pages/categoria/view.vue'), props: true },
		{ path: '/categoria/add', name: 'categoriaadd', component: () => import('pages/categoria/add.vue'), props: true },
		{ path: '/categoria/edit/:id', name: 'categoriaedit', component: () => import('pages/categoria/edit.vue'), props: true },

//categoria_escala routes
		{ path: '/categoria_escala', name: 'categoria_escalalist', component: () => import('pages/categoria_escala/list.vue'), props: true },
		{ path: '/categoria_escala/index/:fieldName?/:fieldValue?', component: () => import('pages/categoria_escala/list.vue'), props: true },
		{ path: '/categoria_escala/view/:id', name: 'categoria_escalaview', component: () => import('pages/categoria_escala/view.vue'), props: true },
		{ path: '/categoria_escala/add', name: 'categoria_escalaadd', component: () => import('pages/categoria_escala/add.vue'), props: true },
		{ path: '/categoria_escala/edit/:id', name: 'categoria_escalaedit', component: () => import('pages/categoria_escala/edit.vue'), props: true },

//cicloesc routes

//ciu_bolivia routes

//ciudad routes

//cod_soa routes

//compra routes

//comunicados routes
		{ path: '/comunicados', name: 'comunicadoslist', component: () => import('pages/comunicados/list.vue'), props: true },
		{ path: '/comunicados/index/:fieldName?/:fieldValue?', component: () => import('pages/comunicados/list.vue'), props: true },
		{ path: '/comunicados/view/:id', name: 'comunicadosview', component: () => import('pages/comunicados/view.vue'), props: true },
		{ path: '/comunicados/add', name: 'comunicadosadd', component: () => import('pages/comunicados/add.vue'), props: true },
		{ path: '/comunicados/edit/:id', name: 'comunicadosedit', component: () => import('pages/comunicados/edit.vue'), props: true },

//configuracion routes
		{ path: '/configuracion', name: 'configuracionlist', component: () => import('pages/configuracion/list.vue'), props: true },
		{ path: '/configuracion/index/:fieldName?/:fieldValue?', component: () => import('pages/configuracion/list.vue'), props: true },
		{ path: '/configuracion/view/:id', name: 'configuracionview', component: () => import('pages/configuracion/view.vue'), props: true },
		{ path: '/configuracion/add', name: 'configuracionadd', component: () => import('pages/configuracion/add.vue'), props: true },
		{ path: '/configuracion/edit/:id', name: 'configuracionedit', component: () => import('pages/configuracion/edit.vue'), props: true },

//cursocolegio routes
		{ path: '/cursocolegio', name: 'cursocolegiolist', component: () => import('pages/cursocolegio/list.vue'), props: true },
		{ path: '/cursocolegio/index/:fieldName?/:fieldValue?', component: () => import('pages/cursocolegio/list.vue'), props: true },
		{ path: '/cursocolegio/view/:id', name: 'cursocolegioview', component: () => import('pages/cursocolegio/view.vue'), props: true },
		{ path: '/cursocolegio/add', name: 'cursocolegioadd', component: () => import('pages/cursocolegio/add.vue'), props: true },
		{ path: '/cursocolegio/edit/:id', name: 'cursocolegioedit', component: () => import('pages/cursocolegio/edit.vue'), props: true },

//cursos routes
		{ path: '/cursos', name: 'cursoslist', component: () => import('pages/cursos/list.vue'), props: true },
		{ path: '/cursos/index/:fieldName?/:fieldValue?', component: () => import('pages/cursos/list.vue'), props: true },
		{ path: '/cursos/view/:id', name: 'cursosview', component: () => import('pages/cursos/view.vue'), props: true },
		{ path: '/cursos/add', name: 'cursosadd', component: () => import('pages/cursos/add.vue'), props: true },
		{ path: '/cursos/edit/:id', name: 'cursosedit', component: () => import('pages/cursos/edit.vue'), props: true },

//cursosbasicosestudios routes
		{ path: '/cursosbasicosestudios', name: 'cursosbasicosestudioslist', component: () => import('pages/cursosbasicosestudios/list.vue'), props: true },
		{ path: '/cursosbasicosestudios/index/:fieldName?/:fieldValue?', component: () => import('pages/cursosbasicosestudios/list.vue'), props: true },
		{ path: '/cursosbasicosestudios/view/:id', name: 'cursosbasicosestudiosview', component: () => import('pages/cursosbasicosestudios/view.vue'), props: true },
		{ path: '/cursosbasicosestudios/add', name: 'cursosbasicosestudiosadd', component: () => import('pages/cursosbasicosestudios/add.vue'), props: true },
		{ path: '/cursosbasicosestudios/edit/:id', name: 'cursosbasicosestudiosedit', component: () => import('pages/cursosbasicosestudios/edit.vue'), props: true },

//cursoshv routes
		{ path: '/cursoshv', name: 'cursoshvlist', component: () => import('pages/cursoshv/list.vue'), props: true },
		{ path: '/cursoshv/index/:fieldName?/:fieldValue?', component: () => import('pages/cursoshv/list.vue'), props: true },
		{ path: '/cursoshv/view/:id', name: 'cursoshvview', component: () => import('pages/cursoshv/view.vue'), props: true },
		{ path: '/cursoshv/add', name: 'cursoshvadd', component: () => import('pages/cursoshv/add.vue'), props: true },
		{ path: '/cursoshv/edit/:id', name: 'cursoshvedit', component: () => import('pages/cursoshv/edit.vue'), props: true },

//decjurada routes
		{ path: '/decjurada', name: 'decjuradalist', component: () => import('pages/decjurada/list.vue'), props: true },
		{ path: '/decjurada/index/:fieldName?/:fieldValue?', component: () => import('pages/decjurada/list.vue'), props: true },
		{ path: '/decjurada/view/:id', name: 'decjuradaview', component: () => import('pages/decjurada/view.vue'), props: true },
		{ path: '/decjurada/add', name: 'decjuradaadd', component: () => import('pages/decjurada/add.vue'), props: true },
		{ path: '/decjurada/edit/:id', name: 'decjuradaedit', component: () => import('pages/decjurada/edit.vue'), props: true },

//declaracion_pregunta_usuario routes
		{ path: '/declaracion_pregunta_usuario', name: 'declaracion_pregunta_usuariolist', component: () => import('pages/declaracion_pregunta_usuario/list.vue'), props: true },
		{ path: '/declaracion_pregunta_usuario/index/:fieldName?/:fieldValue?', component: () => import('pages/declaracion_pregunta_usuario/list.vue'), props: true },
		{ path: '/declaracion_pregunta_usuario/view/:id', name: 'declaracion_pregunta_usuarioview', component: () => import('pages/declaracion_pregunta_usuario/view.vue'), props: true },
		{ path: '/declaracion_pregunta_usuario/add', name: 'declaracion_pregunta_usuarioadd', component: () => import('pages/declaracion_pregunta_usuario/add.vue'), props: true },
		{ path: '/declaracion_pregunta_usuario/edit/:id', name: 'declaracion_pregunta_usuarioedit', component: () => import('pages/declaracion_pregunta_usuario/edit.vue'), props: true },

//declaraciones routes
		{ path: '/declaraciones', name: 'declaracioneslist', component: () => import('pages/declaraciones/list.vue'), props: true },
		{ path: '/declaraciones/index/:fieldName?/:fieldValue?', component: () => import('pages/declaraciones/list.vue'), props: true },
		{ path: '/declaraciones/view/:id', name: 'declaracionesview', component: () => import('pages/declaraciones/view.vue'), props: true },
		{ path: '/declaraciones/add', name: 'declaracionesadd', component: () => import('pages/declaraciones/add.vue'), props: true },
		{ path: '/declaraciones/edit/:id', name: 'declaracionesedit', component: () => import('pages/declaraciones/edit.vue'), props: true },

//denominacion routes
		{ path: '/denominacion', name: 'denominacionlist', component: () => import('pages/denominacion/list.vue'), props: true },
		{ path: '/denominacion/index/:fieldName?/:fieldValue?', component: () => import('pages/denominacion/list.vue'), props: true },
		{ path: '/denominacion/view/:id', name: 'denominacionview', component: () => import('pages/denominacion/view.vue'), props: true },
		{ path: '/denominacion/add', name: 'denominacionadd', component: () => import('pages/denominacion/add.vue'), props: true },
		{ path: '/denominacion/edit/:id', name: 'denominacionedit', component: () => import('pages/denominacion/edit.vue'), props: true },
		{ path: '/denominacion/vista', name: 'denominacionvista', component: () => import('pages/denominacion/vista.vue'), props: true },
		{ path: '/denominacion/vistainte', name: 'denominacionvistainte', component: () => import('pages/denominacion/vistainte.vue'), props: true },

//denominacion_eo routes
		{ path: '/denominacion_eo', name: 'denominacion_eolist', component: () => import('pages/denominacion_eo/list.vue'), props: true },
		{ path: '/denominacion_eo/index/:fieldName?/:fieldValue?', component: () => import('pages/denominacion_eo/list.vue'), props: true },
		{ path: '/denominacion_eo/view/:id', name: 'denominacion_eoview', component: () => import('pages/denominacion_eo/view.vue'), props: true },
		{ path: '/denominacion_eo/add', name: 'denominacion_eoadd', component: () => import('pages/denominacion_eo/add.vue'), props: true },
		{ path: '/denominacion_eo/edit/:id', name: 'denominacion_eoedit', component: () => import('pages/denominacion_eo/edit.vue'), props: true },

//detallecompra routes

//detallepedido routes

//detboleta routes
		{ path: '/detboleta', name: 'detboletalist', component: () => import('pages/detboleta/list.vue'), props: true },
		{ path: '/detboleta/index/:fieldName?/:fieldValue?', component: () => import('pages/detboleta/list.vue'), props: true },
		{ path: '/detboleta/view/:id', name: 'detboletaview', component: () => import('pages/detboleta/view.vue'), props: true },
		{ path: '/detboleta/add', name: 'detboletaadd', component: () => import('pages/detboleta/add.vue'), props: true },
		{ path: '/detboleta/edit/:id', name: 'detboletaedit', component: () => import('pages/detboleta/edit.vue'), props: true },

//detescala routes
		{ path: '/detescala', name: 'detescalalist', component: () => import('pages/detescala/list.vue'), props: true },
		{ path: '/detescala/index/:fieldName?/:fieldValue?', component: () => import('pages/detescala/list.vue'), props: true },
		{ path: '/detescala/view/:id', name: 'detescalaview', component: () => import('pages/detescala/view.vue'), props: true },
		{ path: '/detescala/add', name: 'detescalaadd', component: () => import('pages/detescala/add.vue'), props: true },
		{ path: '/detescala/edit/:id', name: 'detescalaedit', component: () => import('pages/detescala/edit.vue'), props: true },

//detitem routes
		{ path: '/detitem', name: 'detitemlist', component: () => import('pages/detitem/list.vue'), props: true },
		{ path: '/detitem/index/:fieldName?/:fieldValue?', component: () => import('pages/detitem/list.vue'), props: true },
		{ path: '/detitem/view/:id', name: 'detitemview', component: () => import('pages/detitem/view.vue'), props: true },
		{ path: '/detitem/add', name: 'detitemadd', component: () => import('pages/detitem/add.vue'), props: true },
		{ path: '/detitem/edit/:id', name: 'detitemedit', component: () => import('pages/detitem/edit.vue'), props: true },

//detvacacion routes

//entidad routes
		{ path: '/entidad', name: 'entidadlist', component: () => import('pages/entidad/list.vue'), props: true },
		{ path: '/entidad/index/:fieldName?/:fieldValue?', component: () => import('pages/entidad/list.vue'), props: true },
		{ path: '/entidad/view/:id', name: 'entidadview', component: () => import('pages/entidad/view.vue'), props: true },
		{ path: '/entidad/add', name: 'entidadadd', component: () => import('pages/entidad/add.vue'), props: true },
		{ path: '/entidad/edit/:id', name: 'entidadedit', component: () => import('pages/entidad/edit.vue'), props: true },

//eo_maestra routes
		{ path: '/eo_maestra', name: 'eo_maestralist', component: () => import('pages/eo_maestra/list.vue'), props: true },
		{ path: '/eo_maestra/index/:fieldName?/:fieldValue?', component: () => import('pages/eo_maestra/list.vue'), props: true },
		{ path: '/eo_maestra/view/:id', name: 'eo_maestraview', component: () => import('pages/eo_maestra/view.vue'), props: true },
		{ path: '/eo_maestra/add', name: 'eo_maestraadd', component: () => import('pages/eo_maestra/add.vue'), props: true },
		{ path: '/eo_maestra/edit/:id', name: 'eo_maestraedit', component: () => import('pages/eo_maestra/edit.vue'), props: true },

//escala routes
		{ path: '/escala', name: 'escalalist', component: () => import('pages/escala/list.vue'), props: true },
		{ path: '/escala/index/:fieldName?/:fieldValue?', component: () => import('pages/escala/list.vue'), props: true },
		{ path: '/escala/view/:id', name: 'escalaview', component: () => import('pages/escala/view.vue'), props: true },
		{ path: '/escala/add', name: 'escalaadd', component: () => import('pages/escala/add.vue'), props: true },
		{ path: '/escala/edit/:id', name: 'escalaedit', component: () => import('pages/escala/edit.vue'), props: true },
		{ path: '/escala/edicion/:id', name: 'escalaedicion', component: () => import('pages/escala/edicion.vue'), props: true },
		{ path: '/escala/listado', name: 'escalalistado', component: () => import('pages/escala/listado.vue'), props: true },

//escala_t routes

//estadocivil routes
		{ path: '/estadocivil', name: 'estadocivillist', component: () => import('pages/estadocivil/list.vue'), props: true },
		{ path: '/estadocivil/index/:fieldName?/:fieldValue?', component: () => import('pages/estadocivil/list.vue'), props: true },
		{ path: '/estadocivil/view/:id', name: 'estadocivilview', component: () => import('pages/estadocivil/view.vue'), props: true },
		{ path: '/estadocivil/add', name: 'estadociviladd', component: () => import('pages/estadocivil/add.vue'), props: true },
		{ path: '/estadocivil/edit/:id', name: 'estadociviledit', component: () => import('pages/estadocivil/edit.vue'), props: true },

//estructura_org routes
		{ path: '/estructura_org', name: 'estructura_orglist', component: () => import('pages/estructura_org/list.vue'), props: true },
		{ path: '/estructura_org/index/:fieldName?/:fieldValue?', component: () => import('pages/estructura_org/list.vue'), props: true },
		{ path: '/estructura_org/view/:id', name: 'estructura_orgview', component: () => import('pages/estructura_org/view.vue'), props: true },
		{ path: '/estructura_org/add', name: 'estructura_orgadd', component: () => import('pages/estructura_org/add.vue'), props: true },
		{ path: '/estructura_org/edit/:id', name: 'estructura_orgedit', component: () => import('pages/estructura_org/edit.vue'), props: true },
		{ path: '/estructura_org/agregarorg', name: 'estructura_orgagregarorg', component: () => import('pages/estructura_org/agregarorg.vue'), props: true },
		{ path: '/estructura_org/edicionorg/:id', name: 'estructura_orgedicionorg', component: () => import('pages/estructura_org/edicionorg.vue'), props: true },
		{ path: '/estructura_org/vista', name: 'estructura_orgvista', component: () => import('pages/estructura_org/vista.vue'), props: true },

//estudios routes
		{ path: '/estudios', name: 'estudioslist', component: () => import('pages/estudios/list.vue'), props: true },
		{ path: '/estudios/index/:fieldName?/:fieldValue?', component: () => import('pages/estudios/list.vue'), props: true },
		{ path: '/estudios/view/:id', name: 'estudiosview', component: () => import('pages/estudios/view.vue'), props: true },
		{ path: '/estudios/add', name: 'estudiosadd', component: () => import('pages/estudios/add.vue'), props: true },
		{ path: '/estudios/edit/:id', name: 'estudiosedit', component: () => import('pages/estudios/edit.vue'), props: true },

//eval_curric routes
		{ path: '/eval_curric', name: 'eval_curriclist', component: () => import('pages/eval_curric/list.vue'), props: true },
		{ path: '/eval_curric/index/:fieldName?/:fieldValue?', component: () => import('pages/eval_curric/list.vue'), props: true },
		{ path: '/eval_curric/view/:id', name: 'eval_curricview', component: () => import('pages/eval_curric/view.vue'), props: true },
		{ path: '/eval_curric/add', name: 'eval_curricadd', component: () => import('pages/eval_curric/add.vue'), props: true },
		{ path: '/eval_curric/edit/:id', name: 'eval_curricedit', component: () => import('pages/eval_curric/edit.vue'), props: true },

//evalcurricular routes
		{ path: '/evalcurricular', name: 'evalcurricularlist', component: () => import('pages/evalcurricular/list.vue'), props: true },
		{ path: '/evalcurricular/index/:fieldName?/:fieldValue?', component: () => import('pages/evalcurricular/list.vue'), props: true },
		{ path: '/evalcurricular/view/:id', name: 'evalcurricularview', component: () => import('pages/evalcurricular/view.vue'), props: true },
		{ path: '/evalcurricular/add', name: 'evalcurricularadd', component: () => import('pages/evalcurricular/add.vue'), props: true },
		{ path: '/evalcurricular/edit/:id', name: 'evalcurricularedit', component: () => import('pages/evalcurricular/edit.vue'), props: true },

//evaluacion routes
		{ path: '/evaluacion', name: 'evaluacionlist', component: () => import('pages/evaluacion/list.vue'), props: true },
		{ path: '/evaluacion/index/:fieldName?/:fieldValue?', component: () => import('pages/evaluacion/list.vue'), props: true },
		{ path: '/evaluacion/view/:id', name: 'evaluacionview', component: () => import('pages/evaluacion/view.vue'), props: true },
		{ path: '/evaluacion/add', name: 'evaluacionadd', component: () => import('pages/evaluacion/add.vue'), props: true },
		{ path: '/evaluacion/edit/:id', name: 'evaluacionedit', component: () => import('pages/evaluacion/edit.vue'), props: true },

//eventuales routes
		{ path: '/eventuales', name: 'eventualeslist', component: () => import('pages/eventuales/list.vue'), props: true },
		{ path: '/eventuales/index/:fieldName?/:fieldValue?', component: () => import('pages/eventuales/list.vue'), props: true },
		{ path: '/eventuales/view/:id', name: 'eventualesview', component: () => import('pages/eventuales/view.vue'), props: true },
		{ path: '/eventuales/add', name: 'eventualesadd', component: () => import('pages/eventuales/add.vue'), props: true },
		{ path: '/eventuales/edit/:id', name: 'eventualesedit', component: () => import('pages/eventuales/edit.vue'), props: true },

//experiencia routes
		{ path: '/experiencia', name: 'experiencialist', component: () => import('pages/experiencia/list.vue'), props: true },
		{ path: '/experiencia/index/:fieldName?/:fieldValue?', component: () => import('pages/experiencia/list.vue'), props: true },
		{ path: '/experiencia/view/:id', name: 'experienciaview', component: () => import('pages/experiencia/view.vue'), props: true },
		{ path: '/experiencia/add', name: 'experienciaadd', component: () => import('pages/experiencia/add.vue'), props: true },
		{ path: '/experiencia/edit/:id', name: 'experienciaedit', component: () => import('pages/experiencia/edit.vue'), props: true },

//experienciahv routes
		{ path: '/experienciahv', name: 'experienciahvlist', component: () => import('pages/experienciahv/list.vue'), props: true },
		{ path: '/experienciahv/index/:fieldName?/:fieldValue?', component: () => import('pages/experienciahv/list.vue'), props: true },
		{ path: '/experienciahv/view/:id', name: 'experienciahvview', component: () => import('pages/experienciahv/view.vue'), props: true },
		{ path: '/experienciahv/add', name: 'experienciahvadd', component: () => import('pages/experienciahv/add.vue'), props: true },
		{ path: '/experienciahv/edit/:id', name: 'experienciahvedit', component: () => import('pages/experienciahv/edit.vue'), props: true },

//extranjeros_hv routes
		{ path: '/extranjeros_hv', name: 'extranjeros_hvlist', component: () => import('pages/extranjeros_hv/list.vue'), props: true },
		{ path: '/extranjeros_hv/index/:fieldName?/:fieldValue?', component: () => import('pages/extranjeros_hv/list.vue'), props: true },
		{ path: '/extranjeros_hv/view/:id', name: 'extranjeros_hvview', component: () => import('pages/extranjeros_hv/view.vue'), props: true },
		{ path: '/extranjeros_hv/add', name: 'extranjeros_hvadd', component: () => import('pages/extranjeros_hv/add.vue'), props: true },
		{ path: '/extranjeros_hv/edit/:id', name: 'extranjeros_hvedit', component: () => import('pages/extranjeros_hv/edit.vue'), props: true },

//formactual routes

//formcurbasicos2 routes

//formdtspers routes
		{ path: '/formdtspers', name: 'formdtsperslist', component: () => import('pages/formdtspers/list.vue'), props: true },
		{ path: '/formdtspers/index/:fieldName?/:fieldValue?', component: () => import('pages/formdtspers/list.vue'), props: true },
		{ path: '/formdtspers/view/:id', name: 'formdtspersview', component: () => import('pages/formdtspers/view.vue'), props: true },
		{ path: '/formdtspers/add', name: 'formdtspersadd', component: () => import('pages/formdtspers/add.vue'), props: true },
		{ path: '/formdtspers/edit/:id', name: 'formdtspersedit', component: () => import('pages/formdtspers/edit.vue'), props: true },

//formestudios3 routes

//formestudiossup3 routes
		{ path: '/formestudiossup3', name: 'formestudiossup3list', component: () => import('pages/formestudiossup3/list.vue'), props: true },
		{ path: '/formestudiossup3/index/:fieldName?/:fieldValue?', component: () => import('pages/formestudiossup3/list.vue'), props: true },
		{ path: '/formestudiossup3/view/:id', name: 'formestudiossup3view', component: () => import('pages/formestudiossup3/view.vue'), props: true },
		{ path: '/formestudiossup3/add', name: 'formestudiossup3add', component: () => import('pages/formestudiossup3/add.vue'), props: true },
		{ path: '/formestudiossup3/edit/:id', name: 'formestudiossup3edit', component: () => import('pages/formestudiossup3/edit.vue'), props: true },
		{ path: '/formestudiossup3/vhojavida/:id', name: 'formestudiossup3vhojavida', component: () => import('pages/formestudiossup3/vhojavida.vue'), props: true },

//formgestionest2 routes

//formidiomas2 routes

//formotroscursos2 routes

//formposgestudios2 routes

//fuente routes
		{ path: '/fuente', name: 'fuentelist', component: () => import('pages/fuente/list.vue'), props: true },
		{ path: '/fuente/index/:fieldName?/:fieldValue?', component: () => import('pages/fuente/list.vue'), props: true },
		{ path: '/fuente/view/:id', name: 'fuenteview', component: () => import('pages/fuente/view.vue'), props: true },
		{ path: '/fuente/add', name: 'fuenteadd', component: () => import('pages/fuente/add.vue'), props: true },
		{ path: '/fuente/edit/:id', name: 'fuenteedit', component: () => import('pages/fuente/edit.vue'), props: true },

//genero routes
		{ path: '/genero', name: 'generolist', component: () => import('pages/genero/list.vue'), props: true },
		{ path: '/genero/index/:fieldName?/:fieldValue?', component: () => import('pages/genero/list.vue'), props: true },
		{ path: '/genero/view/:id', name: 'generoview', component: () => import('pages/genero/view.vue'), props: true },
		{ path: '/genero/add', name: 'generoadd', component: () => import('pages/genero/add.vue'), props: true },
		{ path: '/genero/edit/:id', name: 'generoedit', component: () => import('pages/genero/edit.vue'), props: true },

//gestion routes
		{ path: '/gestion', name: 'gestionlist', component: () => import('pages/gestion/list.vue'), props: true },
		{ path: '/gestion/index/:fieldName?/:fieldValue?', component: () => import('pages/gestion/list.vue'), props: true },
		{ path: '/gestion/view/:id', name: 'gestionview', component: () => import('pages/gestion/view.vue'), props: true },
		{ path: '/gestion/add', name: 'gestionadd', component: () => import('pages/gestion/add.vue'), props: true },
		{ path: '/gestion/edit/:id', name: 'gestionedit', component: () => import('pages/gestion/edit.vue'), props: true },
		{ path: '/gestion/editar/:id', name: 'gestioneditar', component: () => import('pages/gestion/editar.vue'), props: true },

//gestionciclo routes

//gradocolegiohv routes
		{ path: '/gradocolegiohv', name: 'gradocolegiohvlist', component: () => import('pages/gradocolegiohv/list.vue'), props: true },
		{ path: '/gradocolegiohv/index/:fieldName?/:fieldValue?', component: () => import('pages/gradocolegiohv/list.vue'), props: true },
		{ path: '/gradocolegiohv/view/:id', name: 'gradocolegiohvview', component: () => import('pages/gradocolegiohv/view.vue'), props: true },
		{ path: '/gradocolegiohv/add', name: 'gradocolegiohvadd', component: () => import('pages/gradocolegiohv/add.vue'), props: true },
		{ path: '/gradocolegiohv/edit/:id', name: 'gradocolegiohvedit', component: () => import('pages/gradocolegiohv/edit.vue'), props: true },

//hojavida routes
		{ path: '/hojavida', name: 'hojavidalist', component: () => import('pages/hojavida/list.vue'), props: true },
		{ path: '/hojavida/index/:fieldName?/:fieldValue?', component: () => import('pages/hojavida/list.vue'), props: true },
		{ path: '/hojavida/view/:id', name: 'hojavidaview', component: () => import('pages/hojavida/view.vue'), props: true },
		{ path: '/hojavida/add', name: 'hojavidaadd', component: () => import('pages/hojavida/add.vue'), props: true },
		{ path: '/hojavida/edit/:id', name: 'hojavidaedit', component: () => import('pages/hojavida/edit.vue'), props: true },

//idiomas routes

//idiomashv routes
		{ path: '/idiomashv', name: 'idiomashvlist', component: () => import('pages/idiomashv/list.vue'), props: true },
		{ path: '/idiomashv/index/:fieldName?/:fieldValue?', component: () => import('pages/idiomashv/list.vue'), props: true },
		{ path: '/idiomashv/view/:id', name: 'idiomashvview', component: () => import('pages/idiomashv/view.vue'), props: true },
		{ path: '/idiomashv/add', name: 'idiomashvadd', component: () => import('pages/idiomashv/add.vue'), props: true },
		{ path: '/idiomashv/edit/:id', name: 'idiomashvedit', component: () => import('pages/idiomashv/edit.vue'), props: true },

//infouser routes
		{ path: '/infouser', name: 'infouserlist', component: () => import('pages/infouser/list.vue'), props: true },
		{ path: '/infouser/index/:fieldName?/:fieldValue?', component: () => import('pages/infouser/list.vue'), props: true },
		{ path: '/infouser/view/:id', name: 'infouserview', component: () => import('pages/infouser/view.vue'), props: true },
		{ path: '/infouser/add', name: 'infouseradd', component: () => import('pages/infouser/add.vue'), props: true },
		{ path: '/infouser/edit/:id', name: 'infouseredit', component: () => import('pages/infouser/edit.vue'), props: true },

//insthv routes
		{ path: '/insthv', name: 'insthvlist', component: () => import('pages/insthv/list.vue'), props: true },
		{ path: '/insthv/index/:fieldName?/:fieldValue?', component: () => import('pages/insthv/list.vue'), props: true },
		{ path: '/insthv/view/:id', name: 'insthvview', component: () => import('pages/insthv/view.vue'), props: true },
		{ path: '/insthv/add', name: 'insthvadd', component: () => import('pages/insthv/add.vue'), props: true },
		{ path: '/insthv/edit/:id', name: 'insthvedit', component: () => import('pages/insthv/edit.vue'), props: true },

//item_escala routes
		{ path: '/item_escala', name: 'item_escalalist', component: () => import('pages/item_escala/list.vue'), props: true },
		{ path: '/item_escala/index/:fieldName?/:fieldValue?', component: () => import('pages/item_escala/list.vue'), props: true },
		{ path: '/item_escala/view/:id', name: 'item_escalaview', component: () => import('pages/item_escala/view.vue'), props: true },
		{ path: '/item_escala/add', name: 'item_escalaadd', component: () => import('pages/item_escala/add.vue'), props: true },
		{ path: '/item_escala/edit/:id', name: 'item_escalaedit', component: () => import('pages/item_escala/edit.vue'), props: true },

//log_reportes routes
		{ path: '/log_reportes', name: 'log_reporteslist', component: () => import('pages/log_reportes/list.vue'), props: true },
		{ path: '/log_reportes/index/:fieldName?/:fieldValue?', component: () => import('pages/log_reportes/list.vue'), props: true },
		{ path: '/log_reportes/view/:id', name: 'log_reportesview', component: () => import('pages/log_reportes/view.vue'), props: true },
		{ path: '/log_reportes/add', name: 'log_reportesadd', component: () => import('pages/log_reportes/add.vue'), props: true },
		{ path: '/log_reportes/edit/:id', name: 'log_reportesedit', component: () => import('pages/log_reportes/edit.vue'), props: true },

//material routes

//maxid routes

//medida routes
		{ path: '/medida', name: 'medidalist', component: () => import('pages/medida/list.vue'), props: true },
		{ path: '/medida/index/:fieldName?/:fieldValue?', component: () => import('pages/medida/list.vue'), props: true },
		{ path: '/medida/view/:id', name: 'medidaview', component: () => import('pages/medida/view.vue'), props: true },
		{ path: '/medida/add', name: 'medidaadd', component: () => import('pages/medida/add.vue'), props: true },
		{ path: '/medida/edit/:id', name: 'medidaedit', component: () => import('pages/medida/edit.vue'), props: true },

//modalidadhv routes
		{ path: '/modalidadhv', name: 'modalidadhvlist', component: () => import('pages/modalidadhv/list.vue'), props: true },
		{ path: '/modalidadhv/index/:fieldName?/:fieldValue?', component: () => import('pages/modalidadhv/list.vue'), props: true },
		{ path: '/modalidadhv/view/:id', name: 'modalidadhvview', component: () => import('pages/modalidadhv/view.vue'), props: true },
		{ path: '/modalidadhv/add', name: 'modalidadhvadd', component: () => import('pages/modalidadhv/add.vue'), props: true },
		{ path: '/modalidadhv/edit/:id', name: 'modalidadhvedit', component: () => import('pages/modalidadhv/edit.vue'), props: true },

//nativos_hv routes
		{ path: '/nativos_hv', name: 'nativos_hvlist', component: () => import('pages/nativos_hv/list.vue'), props: true },
		{ path: '/nativos_hv/index/:fieldName?/:fieldValue?', component: () => import('pages/nativos_hv/list.vue'), props: true },
		{ path: '/nativos_hv/view/:id', name: 'nativos_hvview', component: () => import('pages/nativos_hv/view.vue'), props: true },
		{ path: '/nativos_hv/add', name: 'nativos_hvadd', component: () => import('pages/nativos_hv/add.vue'), props: true },
		{ path: '/nativos_hv/edit/:id', name: 'nativos_hvedit', component: () => import('pages/nativos_hv/edit.vue'), props: true },

//nivel_eo routes
		{ path: '/nivel_eo', name: 'nivel_eolist', component: () => import('pages/nivel_eo/list.vue'), props: true },
		{ path: '/nivel_eo/index/:fieldName?/:fieldValue?', component: () => import('pages/nivel_eo/list.vue'), props: true },
		{ path: '/nivel_eo/view/:id', name: 'nivel_eoview', component: () => import('pages/nivel_eo/view.vue'), props: true },
		{ path: '/nivel_eo/add', name: 'nivel_eoadd', component: () => import('pages/nivel_eo/add.vue'), props: true },
		{ path: '/nivel_eo/edit/:id', name: 'nivel_eoedit', component: () => import('pages/nivel_eo/edit.vue'), props: true },

//nivel_escala routes
		{ path: '/nivel_escala', name: 'nivel_escalalist', component: () => import('pages/nivel_escala/list.vue'), props: true },
		{ path: '/nivel_escala/index/:fieldName?/:fieldValue?', component: () => import('pages/nivel_escala/list.vue'), props: true },
		{ path: '/nivel_escala/view/:id', name: 'nivel_escalaview', component: () => import('pages/nivel_escala/view.vue'), props: true },
		{ path: '/nivel_escala/add', name: 'nivel_escalaadd', component: () => import('pages/nivel_escala/add.vue'), props: true },
		{ path: '/nivel_escala/edit/:id', name: 'nivel_escalaedit', component: () => import('pages/nivel_escala/edit.vue'), props: true },

//nivelformestudios routes

//nivelunivhv routes
		{ path: '/nivelunivhv', name: 'nivelunivhvlist', component: () => import('pages/nivelunivhv/list.vue'), props: true },
		{ path: '/nivelunivhv/index/:fieldName?/:fieldValue?', component: () => import('pages/nivelunivhv/list.vue'), props: true },
		{ path: '/nivelunivhv/view/:id', name: 'nivelunivhvview', component: () => import('pages/nivelunivhv/view.vue'), props: true },
		{ path: '/nivelunivhv/add', name: 'nivelunivhvadd', component: () => import('pages/nivelunivhv/add.vue'), props: true },
		{ path: '/nivelunivhv/edit/:id', name: 'nivelunivhvedit', component: () => import('pages/nivelunivhv/edit.vue'), props: true },

//parametros_definicion routes
		{ path: '/parametros_definicion', name: 'parametros_definicionlist', component: () => import('pages/parametros_definicion/list.vue'), props: true },
		{ path: '/parametros_definicion/index/:fieldName?/:fieldValue?', component: () => import('pages/parametros_definicion/list.vue'), props: true },
		{ path: '/parametros_definicion/view/:id', name: 'parametros_definicionview', component: () => import('pages/parametros_definicion/view.vue'), props: true },
		{ path: '/parametros_definicion/add', name: 'parametros_definicionadd', component: () => import('pages/parametros_definicion/add.vue'), props: true },
		{ path: '/parametros_definicion/edit/:id', name: 'parametros_definicionedit', component: () => import('pages/parametros_definicion/edit.vue'), props: true },

//parentesco routes
		{ path: '/parentesco', name: 'parentescolist', component: () => import('pages/parentesco/list.vue'), props: true },
		{ path: '/parentesco/index/:fieldName?/:fieldValue?', component: () => import('pages/parentesco/list.vue'), props: true },
		{ path: '/parentesco/view/:id', name: 'parentescoview', component: () => import('pages/parentesco/view.vue'), props: true },
		{ path: '/parentesco/add', name: 'parentescoadd', component: () => import('pages/parentesco/add.vue'), props: true },
		{ path: '/parentesco/edit/:id', name: 'parentescoedit', component: () => import('pages/parentesco/edit.vue'), props: true },

//pedido routes

//perfilreferencial routes
		{ path: '/perfilreferencial', name: 'perfilreferenciallist', component: () => import('pages/perfilreferencial/list.vue'), props: true },
		{ path: '/perfilreferencial/index/:fieldName?/:fieldValue?', component: () => import('pages/perfilreferencial/list.vue'), props: true },
		{ path: '/perfilreferencial/view/:id', name: 'perfilreferencialview', component: () => import('pages/perfilreferencial/view.vue'), props: true },
		{ path: '/perfilreferencial/add', name: 'perfilreferencialadd', component: () => import('pages/perfilreferencial/add.vue'), props: true },
		{ path: '/perfilreferencial/edit/:id', name: 'perfilreferencialedit', component: () => import('pages/perfilreferencial/edit.vue'), props: true },
		{ path: '/perfilreferencial/evalist', name: 'perfilreferencialevalist', component: () => import('pages/perfilreferencial/evalist.vue'), props: true },

//permanente routes
		{ path: '/permanente', name: 'permanentelist', component: () => import('pages/permanente/list.vue'), props: true },
		{ path: '/permanente/index/:fieldName?/:fieldValue?', component: () => import('pages/permanente/list.vue'), props: true },
		{ path: '/permanente/view/:id', name: 'permanenteview', component: () => import('pages/permanente/view.vue'), props: true },
		{ path: '/permanente/add', name: 'permanenteadd', component: () => import('pages/permanente/add.vue'), props: true },
		{ path: '/permanente/edit/:id', name: 'permanenteedit', component: () => import('pages/permanente/edit.vue'), props: true },

//permisos routes
		{ path: '/permisos', name: 'permisoslist', component: () => import('pages/permisos/list.vue'), props: true },
		{ path: '/permisos/index/:fieldName?/:fieldValue?', component: () => import('pages/permisos/list.vue'), props: true },
		{ path: '/permisos/view/:id', name: 'permisosview', component: () => import('pages/permisos/view.vue'), props: true },
		{ path: '/permisos/add', name: 'permisosadd', component: () => import('pages/permisos/add.vue'), props: true },
		{ path: '/permisos/edit/:id', name: 'permisosedit', component: () => import('pages/permisos/edit.vue'), props: true },

//permissions routes
		{ path: '/permissions', name: 'permissionslist', component: () => import('pages/permissions/list.vue'), props: true },
		{ path: '/permissions/index/:fieldName?/:fieldValue?', component: () => import('pages/permissions/list.vue'), props: true },
		{ path: '/permissions/view/:id', name: 'permissionsview', component: () => import('pages/permissions/view.vue'), props: true },
		{ path: '/permissions/add', name: 'permissionsadd', component: () => import('pages/permissions/add.vue'), props: true },
		{ path: '/permissions/edit/:id', name: 'permissionsedit', component: () => import('pages/permissions/edit.vue'), props: true },

//pexterno routes
		{ path: '/pexterno', name: 'pexternolist', component: () => import('pages/pexterno/list.vue'), props: true },
		{ path: '/pexterno/index/:fieldName?/:fieldValue?', component: () => import('pages/pexterno/list.vue'), props: true },
		{ path: '/pexterno/view/:id', name: 'pexternoview', component: () => import('pages/pexterno/view.vue'), props: true },
		{ path: '/pexterno/add', name: 'pexternoadd', component: () => import('pages/pexterno/add.vue'), props: true },
		{ path: '/pexterno/edit/:id', name: 'pexternoedit', component: () => import('pages/pexterno/edit.vue'), props: true },

//planilla_presupuestaria routes
		{ path: '/planilla_presupuestaria', name: 'planilla_presupuestarialist', component: () => import('pages/planilla_presupuestaria/list.vue'), props: true },
		{ path: '/planilla_presupuestaria/index/:fieldName?/:fieldValue?', component: () => import('pages/planilla_presupuestaria/list.vue'), props: true },
		{ path: '/planilla_presupuestaria/view/:id', name: 'planilla_presupuestariaview', component: () => import('pages/planilla_presupuestaria/view.vue'), props: true },
		{ path: '/planilla_presupuestaria/add', name: 'planilla_presupuestariaadd', component: () => import('pages/planilla_presupuestaria/add.vue'), props: true },
		{ path: '/planilla_presupuestaria/edit/:id', name: 'planilla_presupuestariaedit', component: () => import('pages/planilla_presupuestaria/edit.vue'), props: true },
		{ path: '/planilla_presupuestaria/agregar', name: 'planilla_presupuestariaagregar', component: () => import('pages/planilla_presupuestaria/agregar.vue'), props: true },
		{ path: '/planilla_presupuestaria/editar/:id', name: 'planilla_presupuestariaeditar', component: () => import('pages/planilla_presupuestaria/editar.vue'), props: true },

//planillas routes
		{ path: '/planillas', name: 'planillaslist', component: () => import('pages/planillas/list.vue'), props: true },
		{ path: '/planillas/index/:fieldName?/:fieldValue?', component: () => import('pages/planillas/list.vue'), props: true },
		{ path: '/planillas/view/:id', name: 'planillasview', component: () => import('pages/planillas/view.vue'), props: true },
		{ path: '/planillas/add', name: 'planillasadd', component: () => import('pages/planillas/add.vue'), props: true },
		{ path: '/planillas/edit/:id', name: 'planillasedit', component: () => import('pages/planillas/edit.vue'), props: true },

//planillatemporal routes
		{ path: '/planillatemporal', name: 'planillatemporallist', component: () => import('pages/planillatemporal/list.vue'), props: true },
		{ path: '/planillatemporal/index/:fieldName?/:fieldValue?', component: () => import('pages/planillatemporal/list.vue'), props: true },
		{ path: '/planillatemporal/view/:id', name: 'planillatemporalview', component: () => import('pages/planillatemporal/view.vue'), props: true },
		{ path: '/planillatemporal/add', name: 'planillatemporaladd', component: () => import('pages/planillatemporal/add.vue'), props: true },
		{ path: '/planillatemporal/edit/:id', name: 'planillatemporaledit', component: () => import('pages/planillatemporal/edit.vue'), props: true },

//plant_general_uo routes
		{ path: '/plant_general_uo', name: 'plant_general_uolist', component: () => import('pages/plant_general_uo/list.vue'), props: true },
		{ path: '/plant_general_uo/index/:fieldName?/:fieldValue?', component: () => import('pages/plant_general_uo/list.vue'), props: true },
		{ path: '/plant_general_uo/view/:id', name: 'plant_general_uoview', component: () => import('pages/plant_general_uo/view.vue'), props: true },
		{ path: '/plant_general_uo/add', name: 'plant_general_uoadd', component: () => import('pages/plant_general_uo/add.vue'), props: true },
		{ path: '/plant_general_uo/edit/:id', name: 'plant_general_uoedit', component: () => import('pages/plant_general_uo/edit.vue'), props: true },

//plantilla_estructura_org routes
		{ path: '/plantilla_estructura_org', name: 'plantilla_estructura_orglist', component: () => import('pages/plantilla_estructura_org/list.vue'), props: true },
		{ path: '/plantilla_estructura_org/index/:fieldName?/:fieldValue?', component: () => import('pages/plantilla_estructura_org/list.vue'), props: true },
		{ path: '/plantilla_estructura_org/view/:id', name: 'plantilla_estructura_orgview', component: () => import('pages/plantilla_estructura_org/view.vue'), props: true },
		{ path: '/plantilla_estructura_org/add', name: 'plantilla_estructura_orgadd', component: () => import('pages/plantilla_estructura_org/add.vue'), props: true },
		{ path: '/plantilla_estructura_org/edit/:id', name: 'plantilla_estructura_orgedit', component: () => import('pages/plantilla_estructura_org/edit.vue'), props: true },

//plantillauo routes
		{ path: '/plantillauo', name: 'plantillauolist', component: () => import('pages/plantillauo/list.vue'), props: true },
		{ path: '/plantillauo/index/:fieldName?/:fieldValue?', component: () => import('pages/plantillauo/list.vue'), props: true },
		{ path: '/plantillauo/view/:id', name: 'plantillauoview', component: () => import('pages/plantillauo/view.vue'), props: true },
		{ path: '/plantillauo/add', name: 'plantillauoadd', component: () => import('pages/plantillauo/add.vue'), props: true },
		{ path: '/plantillauo/edit/:id', name: 'plantillauoedit', component: () => import('pages/plantillauo/edit.vue'), props: true },

//plarefrigerio routes

//plasalario routes
		{ path: '/plasalario', name: 'plasalariolist', component: () => import('pages/plasalario/list.vue'), props: true },
		{ path: '/plasalario/index/:fieldName?/:fieldValue?', component: () => import('pages/plasalario/list.vue'), props: true },
		{ path: '/plasalario/view/:id', name: 'plasalarioview', component: () => import('pages/plasalario/view.vue'), props: true },
		{ path: '/plasalario/add', name: 'plasalarioadd', component: () => import('pages/plasalario/add.vue'), props: true },
		{ path: '/plasalario/edit/:id', name: 'plasalarioedit', component: () => import('pages/plasalario/edit.vue'), props: true },

//poa routes
		{ path: '/poa', name: 'poalist', component: () => import('pages/poa/list.vue'), props: true },
		{ path: '/poa/index/:fieldName?/:fieldValue?', component: () => import('pages/poa/list.vue'), props: true },
		{ path: '/poa/view/:id', name: 'poaview', component: () => import('pages/poa/view.vue'), props: true },
		{ path: '/poa/add', name: 'poaadd', component: () => import('pages/poa/add.vue'), props: true },
		{ path: '/poa/edit/:id', name: 'poaedit', component: () => import('pages/poa/edit.vue'), props: true },

//postgradohv routes
		{ path: '/postgradohv', name: 'postgradohvlist', component: () => import('pages/postgradohv/list.vue'), props: true },
		{ path: '/postgradohv/index/:fieldName?/:fieldValue?', component: () => import('pages/postgradohv/list.vue'), props: true },
		{ path: '/postgradohv/view/:id', name: 'postgradohvview', component: () => import('pages/postgradohv/view.vue'), props: true },
		{ path: '/postgradohv/add', name: 'postgradohvadd', component: () => import('pages/postgradohv/add.vue'), props: true },
		{ path: '/postgradohv/edit/:id', name: 'postgradohvedit', component: () => import('pages/postgradohv/edit.vue'), props: true },

//preguntas routes

//primaria routes

//primariahv routes
		{ path: '/primariahv', name: 'primariahvlist', component: () => import('pages/primariahv/list.vue'), props: true },
		{ path: '/primariahv/index/:fieldName?/:fieldValue?', component: () => import('pages/primariahv/list.vue'), props: true },
		{ path: '/primariahv/view/:id', name: 'primariahvview', component: () => import('pages/primariahv/view.vue'), props: true },
		{ path: '/primariahv/add', name: 'primariahvadd', component: () => import('pages/primariahv/add.vue'), props: true },
		{ path: '/primariahv/edit/:id', name: 'primariahvedit', component: () => import('pages/primariahv/edit.vue'), props: true },

//proveedor routes

//regvacacion routes

//result_exists routes

//result_exists2 routes

//result_exists3 routes

//result_exists4 routes

//rm_eo routes

//roles routes
		{ path: '/roles', name: 'roleslist', component: () => import('pages/roles/list.vue'), props: true },
		{ path: '/roles/index/:fieldName?/:fieldValue?', component: () => import('pages/roles/list.vue'), props: true },
		{ path: '/roles/view/:id', name: 'rolesview', component: () => import('pages/roles/view.vue'), props: true },
		{ path: '/roles/add', name: 'rolesadd', component: () => import('pages/roles/add.vue'), props: true },
		{ path: '/roles/edit/:id', name: 'rolesedit', component: () => import('pages/roles/edit.vue'), props: true },

//salario_min routes
		{ path: '/salario_min', name: 'salario_minlist', component: () => import('pages/salario_min/list.vue'), props: true },
		{ path: '/salario_min/index/:fieldName?/:fieldValue?', component: () => import('pages/salario_min/list.vue'), props: true },
		{ path: '/salario_min/view/:id', name: 'salario_minview', component: () => import('pages/salario_min/view.vue'), props: true },
		{ path: '/salario_min/add', name: 'salario_minadd', component: () => import('pages/salario_min/add.vue'), props: true },
		{ path: '/salario_min/edit/:id', name: 'salario_minedit', component: () => import('pages/salario_min/edit.vue'), props: true },

//secuencia_idgestion routes

//secundaria routes

//secundariahv routes
		{ path: '/secundariahv', name: 'secundariahvlist', component: () => import('pages/secundariahv/list.vue'), props: true },
		{ path: '/secundariahv/index/:fieldName?/:fieldValue?', component: () => import('pages/secundariahv/list.vue'), props: true },
		{ path: '/secundariahv/view/:id', name: 'secundariahvview', component: () => import('pages/secundariahv/view.vue'), props: true },
		{ path: '/secundariahv/add', name: 'secundariahvadd', component: () => import('pages/secundariahv/add.vue'), props: true },
		{ path: '/secundariahv/edit/:id', name: 'secundariahvedit', component: () => import('pages/secundariahv/edit.vue'), props: true },

//stock routes
		{ path: '/stock', name: 'stocklist', component: () => import('pages/stock/list.vue'), props: true },
		{ path: '/stock/index/:fieldName?/:fieldValue?', component: () => import('pages/stock/list.vue'), props: true },
		{ path: '/stock/view/:id', name: 'stockview', component: () => import('pages/stock/view.vue'), props: true },
		{ path: '/stock/add', name: 'stockadd', component: () => import('pages/stock/add.vue'), props: true },
		{ path: '/stock/edit/:id', name: 'stockedit', component: () => import('pages/stock/edit.vue'), props: true },

//tab_esc routes
		{ path: '/tab_esc', name: 'tab_esclist', component: () => import('pages/tab_esc/list.vue'), props: true },
		{ path: '/tab_esc/index/:fieldName?/:fieldValue?', component: () => import('pages/tab_esc/list.vue'), props: true },
		{ path: '/tab_esc/view/:id', name: 'tab_escview', component: () => import('pages/tab_esc/view.vue'), props: true },
		{ path: '/tab_esc/add', name: 'tab_escadd', component: () => import('pages/tab_esc/add.vue'), props: true },
		{ path: '/tab_esc/edit/:id', name: 'tab_escedit', component: () => import('pages/tab_esc/edit.vue'), props: true },

//titbachhv routes
		{ path: '/titbachhv', name: 'titbachhvlist', component: () => import('pages/titbachhv/list.vue'), props: true },
		{ path: '/titbachhv/index/:fieldName?/:fieldValue?', component: () => import('pages/titbachhv/list.vue'), props: true },
		{ path: '/titbachhv/view/:id', name: 'titbachhvview', component: () => import('pages/titbachhv/view.vue'), props: true },
		{ path: '/titbachhv/add', name: 'titbachhvadd', component: () => import('pages/titbachhv/add.vue'), props: true },
		{ path: '/titbachhv/edit/:id', name: 'titbachhvedit', component: () => import('pages/titbachhv/edit.vue'), props: true },

//titulocursohv routes
		{ path: '/titulocursohv', name: 'titulocursohvlist', component: () => import('pages/titulocursohv/list.vue'), props: true },
		{ path: '/titulocursohv/index/:fieldName?/:fieldValue?', component: () => import('pages/titulocursohv/list.vue'), props: true },
		{ path: '/titulocursohv/view/:id', name: 'titulocursohvview', component: () => import('pages/titulocursohv/view.vue'), props: true },
		{ path: '/titulocursohv/add', name: 'titulocursohvadd', component: () => import('pages/titulocursohv/add.vue'), props: true },
		{ path: '/titulocursohv/edit/:id', name: 'titulocursohvedit', component: () => import('pages/titulocursohv/edit.vue'), props: true },

//tmpmediovacacion routes

//tmpsaldos routes

//unidad routes
		{ path: '/unidad', name: 'unidadlist', component: () => import('pages/unidad/list.vue'), props: true },
		{ path: '/unidad/index/:fieldName?/:fieldValue?', component: () => import('pages/unidad/list.vue'), props: true },
		{ path: '/unidad/view/:id', name: 'unidadview', component: () => import('pages/unidad/view.vue'), props: true },
		{ path: '/unidad/add', name: 'unidadadd', component: () => import('pages/unidad/add.vue'), props: true },
		{ path: '/unidad/edit/:id', name: 'unidadedit', component: () => import('pages/unidad/edit.vue'), props: true },

//users routes
		{ path: '/users', name: 'userslist', component: () => import('pages/users/list.vue'), props: true },
		{ path: '/users/index/:fieldName?/:fieldValue?', component: () => import('pages/users/list.vue'), props: true },
		{ path: '/users/view/:id', name: 'usersview', component: () => import('pages/users/view.vue'), props: true },
		{ path: '/index/register', name: 'usersuserregister', component: () => import('pages/index/userregister.vue'), props: true },
		{ path: '/account/edit', name: 'usersaccountedit', component: () => import('pages/account/accountedit.vue'), props: true },
		{ path: '/account', name: 'usersaccountview', component: () => import('pages/account/accountview.vue'), props: true },
		{ path: '/users/add', name: 'usersadd', component: () => import('pages/users/add.vue'), props: true },
		{ path: '/users/edit/:id', name: 'usersedit', component: () => import('pages/users/edit.vue'), props: true },
		{ path: '/users/liseval', name: 'usersliseval', component: () => import('pages/users/liseval.vue'), props: true },
		{ path: '/users/vhojavida/:id', name: 'usersvhojavida', component: () => import('pages/users/vhojavida.vue'), props: true },

//usuarios routes
		{ path: '/usuarios', name: 'usuarioslist', component: () => import('pages/usuarios/list.vue'), props: true },
		{ path: '/usuarios/index/:fieldName?/:fieldValue?', component: () => import('pages/usuarios/list.vue'), props: true },
		{ path: '/usuarios/view/:id', name: 'usuariosview', component: () => import('pages/usuarios/view.vue'), props: true },
		{ path: '/usuarios/add', name: 'usuariosadd', component: () => import('pages/usuarios/add.vue'), props: true },
		{ path: '/usuarios/edit/:id', name: 'usuariosedit', component: () => import('pages/usuarios/edit.vue'), props: true },

//v_boletascondatos routes

//v_boletassindatos routes

//v_cantidaditem routes

//v_cargopersonal routes

//v_compra routes

//v_comprastock routes

//v_correspondencia routes

//v_cumpleanyos routes

//v_detitemesc routes

//v_escala routes

//v_escalaasignada routes

//v_escalaimpr routes
		{ path: '/v_escalaimpr', name: 'v_escalaimprlist', component: () => import('pages/v_escalaimpr/list.vue'), props: true },
		{ path: '/v_escalaimpr/index/:fieldName?/:fieldValue?', component: () => import('pages/v_escalaimpr/list.vue'), props: true },

//v_eventual routes

//v_externo routes

//v_gestion routes

//v_gestionplanilas routes

//v_kardexgral routes

//v_migraboleta routes

//v_migraboletax routes

//v_npermanente routes
		{ path: '/v_npermanente', name: 'v_npermanentelist', component: () => import('pages/v_npermanente/list.vue'), props: true },
		{ path: '/v_npermanente/index/:fieldName?/:fieldValue?', component: () => import('pages/v_npermanente/list.vue'), props: true },

//v_pedido routes

//v_perfil routes

//v_permanente routes

//v_permanente201 routes

//v_permisosboletasgeneral routes

//v_permisosvacaciongeneral routes

//v_ppresupuestaria routes

//v_registrovacacion routes

//v_repcompras routes

//v_reppedidos routes

//v_reppersonal routes

//v_repsaldos routes

//v_resumen routes

//v_resumenpermisosandvacaciones routes

//v_stock routes

//v_stockalmacen routes

//v_temporalvacacion routes

//v_unidadboleta routes

//v_unidadorg routes

//v_vacacionescondatos routes

//v_vacacionessindatos routes

//vacaciones routes
		{ path: '/vacaciones', name: 'vacacioneslist', component: () => import('pages/vacaciones/list.vue'), props: true },
		{ path: '/vacaciones/index/:fieldName?/:fieldValue?', component: () => import('pages/vacaciones/list.vue'), props: true },
		{ path: '/vacaciones/view/:id', name: 'vacacionesview', component: () => import('pages/vacaciones/view.vue'), props: true },
		{ path: '/vacaciones/add', name: 'vacacionesadd', component: () => import('pages/vacaciones/add.vue'), props: true },
		{ path: '/vacaciones/edit/:id', name: 'vacacionesedit', component: () => import('pages/vacaciones/edit.vue'), props: true },

//var1 routes

//actualizaalmacen_17665 routes

//actualizaalmacenunidad_17666 routes

//actualizaantiguedad_17667 routes

//revertirvacacion_17738 routes

//sp_planillatemporal_17739 routes

//sp_prueba_17741 routes

//actualizaantiguedad_17668 routes

//actualizaarchivos_17669 routes

//actualizabonos_17670 routes

//actualizacategoria_17671 routes

//actualizacompras_17672 routes

//actualizacomunicados_17673 routes

//actualizaconfiguracion_17674 routes

//actualizadecjuarada_17675 routes

//actualizadeclaracionusuario_17676 routes

//actualizadetallecompra_17677 routes

//actualizadetallepedido_17678 routes

//sp_tmpmediovacacion_17742 routes

//actualizadetallerefrigerio_17679 routes

//actualizadetallesalario_17680 routes

//actualizaentidad_17681 routes

//actualizaevaluacion_17682 routes

//actualizaeventuales_17683 routes

//actualizaplanilla_17694 routes

//actualizainfoxls_17684 routes

//actualizakardex_17685 routes

//actualizamaterial_17686 routes

//actualizamedidas_17687 routes

//actualizaparametrocas_17688 routes

//actualizaparentesco_17689 routes

//actualizapedido_17690 routes

//actualizapermanentes_17691 routes

//actualizapermisos_17692 routes

//actualizapexterno_17693 routes

//actualizaproveedores_17695 routes

//actualizaregvacacion_17696 routes

//actualizaregvacacion_17697 routes

//actualizastock_17698 routes

//actualizatiposboleta_17699 routes

//actualizaunidad_17700 routes

//actualizausuario_17701 routes

//cargaescalaxls_17708 routes

//actualizavacacion_17702 routes

//actualizavacacion_17703 routes

//actualizavacaciones_17704 routes

//aprobarkardex_17705 routes

//cargacompraxls_17707 routes

//cargaitemxls_17709 routes

//cargasaldosxls_17710 routes

//cargavacacionxls_17711 routes

//creaoactualizacurso_17720 routes

//creaoactualizaestudio_17721 routes

//creaoactualizaexperiencia_17722 routes

//creaoactualizahojadevida_17723 routes

//eliminaescala_17724 routes

//eliminaplaitem_17725 routes

//actualiza_gestion_17664 routes

//eliminaregvacacion_17726 routes

//eliminarpermanente_17727 routes

//finalizacioncontrato_17728 routes

//generaitems_17729 routes

//generasaldostmp_17730 routes

//insertalogreporte_17731 routes

//migrarsaldos_17732 routes

//registraescala_17733 routes

//registragestion_17734 routes

//registraitems_17735 routes

//registrausuario_17736 routes

//renuevavacacion_17737 routes

//sumasaldosxavi_17743 routes

//verificasaldosxavi_17745 routes

//actualiza_gestion_salariomin_18863 routes

//actualiza_costomensual_19061 routes

//calculo_cas_17706 routes

//actualiza_gestion_act_19027 routes

//generarestructura_19036 routes

//actualiza_costomensualed_19067 routes

//actualiza_gestion_uo_19176 routes

		
		
//Password reset routes
		{ path: '/index/forgotpassword', name: 'forgotpassword', component: () => import('pages/index/forgotpassword.vue') },
		{ path: '/index/resetpassword', name: 'resetpassword', component: () => import('pages/index/resetpassword.vue') },
		{ path: '/index/resetpassword_completed', name: 'resetpassword_completed', component: () => import('pages/index/resetpassword_completed.vue') },
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	const auth = useAuth();

	
	//get current user data from api on first load
	const { user } = await auth.getUserData();
	if(user){
		const homeRoute = {path: '/', alias: '/home', name: 'home', component: () => import('pages/home/home.vue') }
		mainRoute.children.push(homeRoute);
	}
	else{
		const indexRoute = { path: '/',  alias: '/home', name: 'index', component: () => import('pages/index/index.vue') }
		mainRoute.children.push(indexRoute);
	}

	const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

