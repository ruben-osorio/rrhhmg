import { BaseEntity, DataSource, SelectQueryBuilder } from 'typeorm';
import config from './config';

import Antiguedad from './models/antiguedad.entity';
import Archivos from './models/archivos.entity';
import Bandeja_Eval_Curricular from './models/bandeja_eval_curricular.entity';
import Basicoshv from './models/basicoshv.entity';
import Cas from './models/cas.entity';
import Categoria from './models/categoria.entity';
import Categoria_Escala from './models/categoria_escala.entity';
import Comunicados from './models/comunicados.entity';
import Configuracion from './models/configuracion.entity';
import Cursos from './models/cursos.entity';
import Cursosbasicosestudios from './models/cursosbasicosestudios.entity';
import Decjurada from './models/decjurada.entity';
import Declaracion_Pregunta_Usuario from './models/declaracion_pregunta_usuario.entity';
import Declaraciones from './models/declaraciones.entity';
import Denominacion from './models/denominacion.entity';
import Denominacion_Eo from './models/denominacion_eo.entity';
import Detboleta from './models/detboleta.entity';
import Detescala from './models/detescala.entity';
import Detitem from './models/detitem.entity';
import Entidad from './models/entidad.entity';
import Eo_Maestra from './models/eo_maestra.entity';
import Equivcursoshv from './models/equivcursoshv.entity';
import Escala from './models/escala.entity';
import Estadocivil from './models/estadocivil.entity';
import Estructura_Org from './models/estructura_org.entity';
import Estudios from './models/estudios.entity';
import Eval_Curric from './models/eval_curric.entity';
import Eval_Temp_Grid from './models/eval_temp_grid.entity';
import Evalcurricular from './models/evalcurricular.entity';
import Evaluacion from './models/evaluacion.entity';
import Evaluacion_Perfil from './models/evaluacion_perfil.entity';
import Eventuales from './models/eventuales.entity';
import Experiencia from './models/experiencia.entity';
import Experiencia_Especifica from './models/experiencia_especifica.entity';
import Experienciahv from './models/experienciahv.entity';
import Formacion_Guia from './models/formacion_guia.entity';
import Formestudios3 from './models/formestudios3.entity';
import Formestudiossup3 from './models/formestudiossup3.entity';
import Formidiomas2 from './models/formidiomas2.entity';
import Fuente from './models/fuente.entity';
import Genero from './models/genero.entity';
import Gestion from './models/gestion.entity';
import Grado_Univhv from './models/grado_univhv.entity';
import Hojavida from './models/hojavida.entity';
import Infouser from './models/infouser.entity';
import Inst_Bas_Hv from './models/inst_bas_hv.entity';
import Item_Escala from './models/item_escala.entity';
import Log_Reportes from './models/log_reportes.entity';
import Medida from './models/medida.entity';
import Nivel_Eo from './models/nivel_eo.entity';
import Nivel_Escala from './models/nivel_escala.entity';
import Parametros_Definicion from './models/parametros_definicion.entity';
import Parentesco from './models/parentesco.entity';
import Perfilreferencial from './models/perfilreferencial.entity';
import Permanente from './models/permanente.entity';
import Permisos from './models/permisos.entity';
import Permissions from './models/permissions.entity';
import Pexterno from './models/pexterno.entity';
import Planilla_Presupuestaria from './models/planilla_presupuestaria.entity';
import Planillas from './models/planillas.entity';
import Planillatemporal from './models/planillatemporal.entity';
import Plant_General_Uo from './models/plant_general_uo.entity';
import Plantilla_Estructura_Org from './models/plantilla_estructura_org.entity';
import Plantillauo from './models/plantillauo.entity';
import Plasalario from './models/plasalario.entity';
import Poa from './models/poa.entity';
import Roles from './models/roles.entity';
import Salario_Min from './models/salario_min.entity';
import Stock from './models/stock.entity';
import Tab_Esc from './models/tab_esc.entity';
import Unidad from './models/unidad.entity';
import Users from './models/users.entity';
import Usuarios from './models/usuarios.entity';
import V_Escalaimpr from './models/v_escalaimpr.entity';
import V_Npermanente from './models/v_npermanente.entity';
import Vacaciones from './models/vacaciones.entity';


const dbConfig = config.database
const AppDataSource = new DataSource(
  
{
    type: "postgres",
    host: dbConfig.host,
    port: Number(dbConfig.port),
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.name,
    entities: ["src/models/*.ts"],
    logging: true
}

);

const DB = {
  Antiguedad,
	Archivos,
	Bandeja_Eval_Curricular,
	Basicoshv,
	Cas,
	Categoria,
	Categoria_Escala,
	Comunicados,
	Configuracion,
	Cursos,
	Cursosbasicosestudios,
	Decjurada,
	Declaracion_Pregunta_Usuario,
	Declaraciones,
	Denominacion,
	Denominacion_Eo,
	Detboleta,
	Detescala,
	Detitem,
	Entidad,
	Eo_Maestra,
	Equivcursoshv,
	Escala,
	Estadocivil,
	Estructura_Org,
	Estudios,
	Eval_Curric,
	Eval_Temp_Grid,
	Evalcurricular,
	Evaluacion,
	Evaluacion_Perfil,
	Eventuales,
	Experiencia,
	Experiencia_Especifica,
	Experienciahv,
	Formacion_Guia,
	Formestudios3,
	Formestudiossup3,
	Formidiomas2,
	Fuente,
	Genero,
	Gestion,
	Grado_Univhv,
	Hojavida,
	Infouser,
	Inst_Bas_Hv,
	Item_Escala,
	Log_Reportes,
	Medida,
	Nivel_Eo,
	Nivel_Escala,
	Parametros_Definicion,
	Parentesco,
	Perfilreferencial,
	Permanente,
	Permisos,
	Permissions,
	Pexterno,
	Planilla_Presupuestaria,
	Planillas,
	Planillatemporal,
	Plant_General_Uo,
	Plantilla_Estructura_Org,
	Plantillauo,
	Plasalario,
	Poa,
	Roles,
	Salario_Min,
	Stock,
	Tab_Esc,
	Unidad,
	Users,
	Usuarios,
	V_Escalaimpr,
	V_Npermanente,
	Vacaciones
}

export default DB;


async function rawQuery(query: string, params?: any[]) {
  try {
    const queryRunner = AppDataSource.createQueryRunner();
    const result = await queryRunner.query(query, params);
    queryRunner.release();
    return result;
  }
  catch (err) {
    console.log("raw query failled", err)
  }
}

export { AppDataSource, rawQuery }

// TODO: remove this once it is provided by TypeORM (in case that ever happens)
// check if record exits in a tble
// example: let recordExists = await User.getQuery().where({'user_email': 'emman@radsystems.io'}).exists();

export const isExistsQuery = (query: string) => `CASE WHEN EXISTS(${query}) THEN 1 ELSE 0 END AS "exists"`;
declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    exists<T>(): Promise<boolean>;
  }
}

SelectQueryBuilder.prototype.exists = async function (): Promise<boolean> {
  const result = await this.select(isExistsQuery(this.getQuery())).where('').take(1).getRawOne();
  return result?.exists == '1';
};


