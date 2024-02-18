
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formdtspers', schema: 'public' })
export default class Formdtspers extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formdtspers");
	}
	
	@Column({name: 'nrotitpos' })
	nrotitpos: number
	
	@Column({name: 'hrscursbasico' })
	hrscursbasico: number
	
	@Column({name: 'gestioncursbasico' })
	gestioncursbasico: string
	
	@Column({name: 'gestionpos' })
	gestionpos: string
	
	@Column({name: 'gestioncolegio' })
	gestioncolegio: string
	
	@Column({name: 'hrsotrcursos' })
	hrsotrcursos: number
	
	@Column({name: 'nrotitbach' })
	nrotitbach: number
	
	@Column({name: 'gestionotrcursos' })
	gestionotrcursos: string
	
	@Column({name: 'finicioexp' })
	finicioexp: string
	
	@Column({name: 'ffinexp' })
	ffinexp: string
	
	@Column({name: 'hrsidioma' })
	hrsidioma: number
	
	@Column({name: 'gestionidioma' })
	gestionidioma: string
	
	@Column({name: 'nrotituniv' })
	nrotituniv: number
	
	@Column({name: 'gestionuniv' })
	gestionuniv: string
	
	@PrimaryGeneratedColumn({name: 'id_formdtspers'})
	id_formdtspers: number

	@Column({name: 'nomidioma' })
	nomidioma: string
	
	@Column({name: 'tipoidioma' })
	tipoidioma: string
	
	@Column({name: 'certidioma' })
	certidioma: string
	
	@Column({name: 'nomcursbasico' })
	nomcursbasico: string
	
	@Column({name: 'instcursbasico' })
	instcursbasico: string
	
	@Column({name: 'nomotrcursos' })
	nomotrcursos: string
	
	@Column({name: 'instotrcursos' })
	instotrcursos: string
	
	@Column({name: 'certotrcursos' })
	certotrcursos: string
	
	@Column({name: 'entidadexp' })
	entidadexp: string
	
	@Column({name: 'cargoexp' })
	cargoexp: string
	
	@Column({name: 'funcionesexp' })
	funcionesexp: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'grado' })
	grado: string
	
	@Column({name: 'curso' })
	curso: string
	
	@Column({name: 'titulobach' })
	titulobach: string
	
	@Column({name: 'colegio' })
	colegio: string
	
	@Column({name: 'carrerauniv' })
	carrerauniv: string
	
	@Column({name: 'casaestuniv' })
	casaestuniv: string
	
	@Column({name: 'calidaduniv' })
	calidaduniv: string
	
	@Column({name: 'niveluniv' })
	niveluniv: string
	
	@Column({name: 'titulouniv' })
	titulouniv: string
	
	@Column({name: 'cursopost' })
	cursopost: string
	
	@Column({name: 'nomcurspost' })
	nomcurspost: string
	
	@Column({name: 'instpost' })
	instpost: string
	
	@Column({name: 'modalidadpost' })
	modalidadpost: string
	
	@Column({name: 'titpos' })
	titpos: string
	
	
	
	static listFields(): string[]{
		return [
			"nrotitpos", 
			"hrscursbasico", 
			"gestioncursbasico", 
			"gestionpos", 
			"gestioncolegio", 
			"hrsotrcursos", 
			"nrotitbach", 
			"gestionotrcursos", 
			"finicioexp", 
			"ffinexp", 
			"hrsidioma", 
			"gestionidioma", 
			"nrotituniv", 
			"gestionuniv", 
			"id_formdtspers", 
			"nomidioma", 
			"tipoidioma", 
			"certidioma", 
			"nomcursbasico", 
			"instcursbasico", 
			"nomotrcursos", 
			"instotrcursos", 
			"certotrcursos", 
			"entidadexp", 
			"cargoexp", 
			"funcionesexp", 
			"codusuario", 
			"codgestion", 
			"grado", 
			"curso", 
			"titulobach", 
			"colegio", 
			"carrerauniv", 
			"casaestuniv", 
			"calidaduniv", 
			"niveluniv", 
			"titulouniv", 
			"cursopost", 
			"nomcurspost", 
			"instpost", 
			"modalidadpost", 
			"titpos"
		];
	}

	static exportListFields(): string[]{
		return [
			"nrotitpos", 
			"hrscursbasico", 
			"gestioncursbasico", 
			"gestionpos", 
			"gestioncolegio", 
			"hrsotrcursos", 
			"nrotitbach", 
			"gestionotrcursos", 
			"finicioexp", 
			"ffinexp", 
			"hrsidioma", 
			"gestionidioma", 
			"nrotituniv", 
			"gestionuniv", 
			"id_formdtspers", 
			"nomidioma", 
			"tipoidioma", 
			"certidioma", 
			"nomcursbasico", 
			"instcursbasico", 
			"nomotrcursos", 
			"instotrcursos", 
			"certotrcursos", 
			"entidadexp", 
			"cargoexp", 
			"funcionesexp", 
			"codusuario", 
			"codgestion", 
			"grado", 
			"curso", 
			"titulobach", 
			"colegio", 
			"carrerauniv", 
			"casaestuniv", 
			"calidaduniv", 
			"niveluniv", 
			"titulouniv", 
			"cursopost", 
			"nomcurspost", 
			"instpost", 
			"modalidadpost", 
			"titpos"
		];
	}

	static viewFields(): string[]{
		return [
			"nrotitpos", 
			"hrscursbasico", 
			"gestioncursbasico", 
			"gestionpos", 
			"gestioncolegio", 
			"hrsotrcursos", 
			"nrotitbach", 
			"gestionotrcursos", 
			"finicioexp", 
			"ffinexp", 
			"hrsidioma", 
			"gestionidioma", 
			"nrotituniv", 
			"gestionuniv", 
			"id_formdtspers", 
			"nomidioma", 
			"tipoidioma", 
			"certidioma", 
			"nomcursbasico", 
			"instcursbasico", 
			"nomotrcursos", 
			"instotrcursos", 
			"certotrcursos", 
			"entidadexp", 
			"cargoexp", 
			"funcionesexp", 
			"codusuario", 
			"codgestion", 
			"grado", 
			"curso", 
			"titulobach", 
			"colegio", 
			"carrerauniv", 
			"casaestuniv", 
			"calidaduniv", 
			"niveluniv", 
			"titulouniv", 
			"cursopost", 
			"nomcurspost", 
			"instpost", 
			"modalidadpost", 
			"titpos"
		];
	}

	static exportViewFields(): string[]{
		return [
			"nrotitpos", 
			"hrscursbasico", 
			"gestioncursbasico", 
			"gestionpos", 
			"gestioncolegio", 
			"hrsotrcursos", 
			"nrotitbach", 
			"gestionotrcursos", 
			"finicioexp", 
			"ffinexp", 
			"hrsidioma", 
			"gestionidioma", 
			"nrotituniv", 
			"gestionuniv", 
			"id_formdtspers", 
			"nomidioma", 
			"tipoidioma", 
			"certidioma", 
			"nomcursbasico", 
			"instcursbasico", 
			"nomotrcursos", 
			"instotrcursos", 
			"certotrcursos", 
			"entidadexp", 
			"cargoexp", 
			"funcionesexp", 
			"codusuario", 
			"codgestion", 
			"grado", 
			"curso", 
			"titulobach", 
			"colegio", 
			"carrerauniv", 
			"casaestuniv", 
			"calidaduniv", 
			"niveluniv", 
			"titulouniv", 
			"cursopost", 
			"nomcurspost", 
			"instpost", 
			"modalidadpost", 
			"titpos"
		];
	}

	static editFields(): string[]{
		return [
			"nrotitpos", 
			"hrscursbasico", 
			"gestioncursbasico", 
			"gestionpos", 
			"gestioncolegio", 
			"hrsotrcursos", 
			"nrotitbach", 
			"gestionotrcursos", 
			"finicioexp", 
			"ffinexp", 
			"hrsidioma", 
			"gestionidioma", 
			"nrotituniv", 
			"gestionuniv", 
			"id_formdtspers", 
			"nomidioma", 
			"tipoidioma", 
			"certidioma", 
			"nomcursbasico", 
			"instcursbasico", 
			"nomotrcursos", 
			"instotrcursos", 
			"certotrcursos", 
			"entidadexp", 
			"cargoexp", 
			"funcionesexp", 
			"codusuario", 
			"codgestion", 
			"grado", 
			"curso", 
			"titulobach", 
			"colegio", 
			"carrerauniv", 
			"casaestuniv", 
			"calidaduniv", 
			"niveluniv", 
			"titulouniv", 
			"cursopost", 
			"nomcurspost", 
			"instpost", 
			"modalidadpost", 
			"titpos"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomidioma iLIKE :search", 
			"tipoidioma iLIKE :search", 
			"certidioma iLIKE :search", 
			"nomcursbasico iLIKE :search", 
			"instcursbasico iLIKE :search", 
			"nomotrcursos iLIKE :search", 
			"instotrcursos iLIKE :search", 
			"certotrcursos iLIKE :search", 
			"entidadexp iLIKE :search", 
			"cargoexp iLIKE :search", 
			"funcionesexp iLIKE :search", 
			"codusuario iLIKE :search", 
			"codgestion iLIKE :search", 
			"grado iLIKE :search", 
			"curso iLIKE :search", 
			"titulobach iLIKE :search", 
			"colegio iLIKE :search", 
			"carrerauniv iLIKE :search", 
			"casaestuniv iLIKE :search", 
			"calidaduniv iLIKE :search", 
			"niveluniv iLIKE :search", 
			"titulouniv iLIKE :search", 
			"cursopost iLIKE :search", 
			"nomcurspost iLIKE :search", 
			"instpost iLIKE :search", 
			"modalidadpost iLIKE :search", 
			"titpos iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


