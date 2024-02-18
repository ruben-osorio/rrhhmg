import express, { Application } from 'express';
import passport from './helpers/passport-auth';
import cors from 'cors';
import ejs from 'ejs';
import config from './config';
import { HttpRequest, HttpResponse, HttpMiddleWare } from './helpers/http';
import RbacMiddleWare from  './helpers/rbac';
import { AppDataSource } from './datasource';
import HomeController from './controllers/home';
import ComponentsDataController from './controllers/components_data';
import FileUploaderController from './controllers/fileuploader';
import S3UploaderController from './controllers/s3uploader';
import AuthController from './controllers/auth';
import AccountController from './controllers/account';
import AltashvController from './controllers/altashv';
import AlternativahvController from './controllers/alternativahv';
import AntiguedadController from './controllers/antiguedad';
import ArchivosController from './controllers/archivos';
import BandejaEvalCurricularController from './controllers/bandeja_eval_curricular';
import CalidadhvController from './controllers/calidadhv';
import CarrerashvController from './controllers/carrerashv';
import CasController from './controllers/cas';
import CategoriaController from './controllers/categoria';
import CategoriaEscalaController from './controllers/categoria_escala';
import ComunicadosController from './controllers/comunicados';
import ConfiguracionController from './controllers/configuracion';
import CursocolegioController from './controllers/cursocolegio';
import CursosController from './controllers/cursos';
import CursosbasicosestudiosController from './controllers/cursosbasicosestudios';
import CursoshvController from './controllers/cursoshv';
import DecjuradaController from './controllers/decjurada';
import DeclaracionPreguntaUsuarioController from './controllers/declaracion_pregunta_usuario';
import DeclaracionesController from './controllers/declaraciones';
import DenominacionController from './controllers/denominacion';
import DenominacionEoController from './controllers/denominacion_eo';
import DetboletaController from './controllers/detboleta';
import DetescalaController from './controllers/detescala';
import DetitemController from './controllers/detitem';
import EntidadController from './controllers/entidad';
import EoMaestraController from './controllers/eo_maestra';
import EscalaController from './controllers/escala';
import EstadocivilController from './controllers/estadocivil';
import EstructuraOrgController from './controllers/estructura_org';
import EstudiosController from './controllers/estudios';
import EvalCurricController from './controllers/eval_curric';
import EvalcurricularController from './controllers/evalcurricular';
import EvaluacionController from './controllers/evaluacion';
import EventualesController from './controllers/eventuales';
import ExperienciaController from './controllers/experiencia';
import ExperienciahvController from './controllers/experienciahv';
import ExtranjerosHvController from './controllers/extranjeros_hv';
import FormdtspersController from './controllers/formdtspers';
import Formestudiossup3Controller from './controllers/formestudiossup3';
import FuenteController from './controllers/fuente';
import GeneroController from './controllers/genero';
import GestionController from './controllers/gestion';
import GradocolegiohvController from './controllers/gradocolegiohv';
import HojavidaController from './controllers/hojavida';
import IdiomashvController from './controllers/idiomashv';
import InfouserController from './controllers/infouser';
import InsthvController from './controllers/insthv';
import ItemEscalaController from './controllers/item_escala';
import LogReportesController from './controllers/log_reportes';
import MedidaController from './controllers/medida';
import ModalidadhvController from './controllers/modalidadhv';
import NativosHvController from './controllers/nativos_hv';
import NivelEoController from './controllers/nivel_eo';
import NivelEscalaController from './controllers/nivel_escala';
import NivelunivhvController from './controllers/nivelunivhv';
import ParametrosDefinicionController from './controllers/parametros_definicion';
import ParentescoController from './controllers/parentesco';
import PerfilreferencialController from './controllers/perfilreferencial';
import PermanenteController from './controllers/permanente';
import PermisosController from './controllers/permisos';
import PermissionsController from './controllers/permissions';
import PexternoController from './controllers/pexterno';
import PlanillaPresupuestariaController from './controllers/planilla_presupuestaria';
import PlanillasController from './controllers/planillas';
import PlanillatemporalController from './controllers/planillatemporal';
import PlantGeneralUoController from './controllers/plant_general_uo';
import PlantillaEstructuraOrgController from './controllers/plantilla_estructura_org';
import PlantillauoController from './controllers/plantillauo';
import PlasalarioController from './controllers/plasalario';
import PoaController from './controllers/poa';
import PostgradohvController from './controllers/postgradohv';
import PrimariahvController from './controllers/primariahv';
import RolesController from './controllers/roles';
import SalarioMinController from './controllers/salario_min';
import SecundariahvController from './controllers/secundariahv';
import StockController from './controllers/stock';
import TabEscController from './controllers/tab_esc';
import TitbachhvController from './controllers/titbachhv';
import TitulocursohvController from './controllers/titulocursohv';
import UnidadController from './controllers/unidad';
import UsersController from './controllers/users';
import UsuariosController from './controllers/usuarios';
import VEscalaimprController from './controllers/v_escalaimpr';
import VNpermanenteController from './controllers/v_npermanente';
import VacacionesController from './controllers/vacaciones';
AppDataSource.initialize().then(() => {
    console.log("Database initialized!")
}).catch((err) => {
    console.error("Database initialization Error", err)
});


const app: Application = express();

//set view engine use to return Html
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(HttpMiddleWare);

app.use(cors());

app.use(express.static(config.app.publicDir));

app.use(express.json()) // Parses json, multi-part (file), url-encoded
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//authenticate user and set current user data
app.use('/api',
	async (req:HttpRequest, res:HttpResponse, next) => {
		passport.authenticate('jwt', async (err, user, info) => {
			req.login(user, { session: false }, async (error) => {});
			return next();
		}
		)(req, res);
	}
);

//bind page route to the controllers
app.use('/api/components_data', ComponentsDataController);
app.use('/api/fileuploader', FileUploaderController);
app.use('/api/s3uploader', S3UploaderController);

app.use('/api/auth', AuthController);

//protect all /api endpoints
app.use('/api', async (req:HttpRequest, res:HttpResponse, next) => {
	if(req.user){
		return next();//user is authenticated
	}
	return res.unauthorized();
});

app.use('/api', RbacMiddleWare); // access control middleware.
app.use('/api/account', AccountController);

app.use('/api/', HomeController);
app.use('/api/altashv', AltashvController)
app.use('/api/alternativahv', AlternativahvController)
app.use('/api/antiguedad', AntiguedadController)
app.use('/api/archivos', ArchivosController)
app.use('/api/bandeja_eval_curricular', BandejaEvalCurricularController)
app.use('/api/calidadhv', CalidadhvController)
app.use('/api/carrerashv', CarrerashvController)
app.use('/api/cas', CasController)
app.use('/api/categoria', CategoriaController)
app.use('/api/categoria_escala', CategoriaEscalaController)
app.use('/api/comunicados', ComunicadosController)
app.use('/api/configuracion', ConfiguracionController)
app.use('/api/cursocolegio', CursocolegioController)
app.use('/api/cursos', CursosController)
app.use('/api/cursosbasicosestudios', CursosbasicosestudiosController)
app.use('/api/cursoshv', CursoshvController)
app.use('/api/decjurada', DecjuradaController)
app.use('/api/declaracion_pregunta_usuario', DeclaracionPreguntaUsuarioController)
app.use('/api/declaraciones', DeclaracionesController)
app.use('/api/denominacion', DenominacionController)
app.use('/api/denominacion_eo', DenominacionEoController)
app.use('/api/detboleta', DetboletaController)
app.use('/api/detescala', DetescalaController)
app.use('/api/detitem', DetitemController)
app.use('/api/entidad', EntidadController)
app.use('/api/eo_maestra', EoMaestraController)
app.use('/api/escala', EscalaController)
app.use('/api/estadocivil', EstadocivilController)
app.use('/api/estructura_org', EstructuraOrgController)
app.use('/api/estudios', EstudiosController)
app.use('/api/eval_curric', EvalCurricController)
app.use('/api/evalcurricular', EvalcurricularController)
app.use('/api/evaluacion', EvaluacionController)
app.use('/api/eventuales', EventualesController)
app.use('/api/experiencia', ExperienciaController)
app.use('/api/experienciahv', ExperienciahvController)
app.use('/api/extranjeros_hv', ExtranjerosHvController)
app.use('/api/formdtspers', FormdtspersController)
app.use('/api/formestudiossup3', Formestudiossup3Controller)
app.use('/api/fuente', FuenteController)
app.use('/api/genero', GeneroController)
app.use('/api/gestion', GestionController)
app.use('/api/gradocolegiohv', GradocolegiohvController)
app.use('/api/hojavida', HojavidaController)
app.use('/api/idiomashv', IdiomashvController)
app.use('/api/infouser', InfouserController)
app.use('/api/insthv', InsthvController)
app.use('/api/item_escala', ItemEscalaController)
app.use('/api/log_reportes', LogReportesController)
app.use('/api/medida', MedidaController)
app.use('/api/modalidadhv', ModalidadhvController)
app.use('/api/nativos_hv', NativosHvController)
app.use('/api/nivel_eo', NivelEoController)
app.use('/api/nivel_escala', NivelEscalaController)
app.use('/api/nivelunivhv', NivelunivhvController)
app.use('/api/parametros_definicion', ParametrosDefinicionController)
app.use('/api/parentesco', ParentescoController)
app.use('/api/perfilreferencial', PerfilreferencialController)
app.use('/api/permanente', PermanenteController)
app.use('/api/permisos', PermisosController)
app.use('/api/permissions', PermissionsController)
app.use('/api/pexterno', PexternoController)
app.use('/api/planilla_presupuestaria', PlanillaPresupuestariaController)
app.use('/api/planillas', PlanillasController)
app.use('/api/planillatemporal', PlanillatemporalController)
app.use('/api/plant_general_uo', PlantGeneralUoController)
app.use('/api/plantilla_estructura_org', PlantillaEstructuraOrgController)
app.use('/api/plantillauo', PlantillauoController)
app.use('/api/plasalario', PlasalarioController)
app.use('/api/poa', PoaController)
app.use('/api/postgradohv', PostgradohvController)
app.use('/api/primariahv', PrimariahvController)
app.use('/api/roles', RolesController)
app.use('/api/salario_min', SalarioMinController)
app.use('/api/secundariahv', SecundariahvController)
app.use('/api/stock', StockController)
app.use('/api/tab_esc', TabEscController)
app.use('/api/titbachhv', TitbachhvController)
app.use('/api/titulocursohv', TitulocursohvController)
app.use('/api/unidad', UnidadController)
app.use('/api/users', UsersController)
app.use('/api/usuarios', UsuariosController)
app.use('/api/v_escalaimpr', VEscalaimprController)
app.use('/api/v_npermanente', VNpermanenteController)
app.use('/api/vacaciones', VacacionesController)

app.get('*', function (req, res) {
    res.status(404).json("Page not found");
});

let port = 8063;
//start app
app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});