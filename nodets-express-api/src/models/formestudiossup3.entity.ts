
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formestudiossup3', schema: 'public' })
export default class Formestudiossup3 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formestudiossup3");
	}
	
	@PrimaryGeneratedColumn({name: 'idformestsup'})
	idformestsup: number

	@Column({name: 'gestionuniv' })
	gestionuniv: number
	
	@Column({name: 'nrotitulo' })
	nrotitulo: number
	
	@Column({name: 'ciclouniv' })
	ciclouniv: string
	
	@Column({name: 'cursouniv' })
	cursouniv: string
	
	@Column({name: 'carrerauniv' })
	carrerauniv: string
	
	@Column({name: 'casaestuniv' })
	casaestuniv: string
	
	@Column({name: 'codusuario' })
	codusuario: number
	
	@Column({name: 'calidaduniver' })
	calidaduniver: string
	
	@Column({name: 'niveluniv' })
	niveluniv: string
	
	
	
	static listFields(): string[]{
		return [
			"idformestsup", 
			"carrerauniv", 
			"nrotitulo", 
			"casaestuniv", 
			"gestionuniv", 
			"calidaduniver", 
			"codusuario", 
			"niveluniv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idformestsup", 
			"carrerauniv", 
			"nrotitulo", 
			"casaestuniv", 
			"gestionuniv", 
			"calidaduniver", 
			"codusuario", 
			"niveluniv"
		];
	}

	static viewFields(): string[]{
		return [
			"idformestsup", 
			"gestionuniv", 
			"nrotitulo", 
			"ciclouniv", 
			"cursouniv", 
			"carrerauniv", 
			"casaestuniv", 
			"codusuario", 
			"calidaduniver", 
			"niveluniv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idformestsup", 
			"gestionuniv", 
			"nrotitulo", 
			"ciclouniv", 
			"cursouniv", 
			"carrerauniv", 
			"casaestuniv", 
			"codusuario", 
			"calidaduniver", 
			"niveluniv"
		];
	}

	static editFields(): string[]{
		return [
			"idformestsup", 
			"gestionuniv", 
			"nrotitulo", 
			"ciclouniv", 
			"cursouniv", 
			"carrerauniv", 
			"casaestuniv", 
			"codusuario", 
			"calidaduniver", 
			"niveluniv"
		];
	}

	static vhojavidaFields(): string[]{
		return [
			"idformestsup", 
			"gestionuniv", 
			"nrotitulo", 
			"ciclouniv", 
			"cursouniv", 
			"carrerauniv", 
			"casaestuniv", 
			"codusuario", 
			"calidaduniver", 
			"niveluniv"
		];
	}

	static exportVhojavidaFields(): string[]{
		return [
			"idformestsup", 
			"gestionuniv", 
			"nrotitulo", 
			"ciclouniv", 
			"cursouniv", 
			"carrerauniv", 
			"casaestuniv", 
			"codusuario", 
			"calidaduniver", 
			"niveluniv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"carrerauniv iLIKE :search", 
			"casaestuniv iLIKE :search", 
			"ciclouniv iLIKE :search", 
			"calidaduniver iLIKE :search", 
			"cursouniv iLIKE :search", 
			"CAST(codusuario AS TEXT) iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


