
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formestudios3', schema: 'public' })
export default class Formestudios3 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formestudios3");
	}
	
	@PrimaryGeneratedColumn({name: 'idformestudios'})
	idformestudios: number

	@Column({name: 'nrotitbachiller' })
	nrotitbachiller: number
	
	@Column({name: 'secundaria' })
	secundaria: string
	
	@Column({name: 'cicloesc' })
	cicloesc: string
	
	@Column({name: 'titbachiller' })
	titbachiller: string
	
	@Column({name: 'cursoesc' })
	cursoesc: string
	
	@Column({name: 'nivelesc' })
	nivelesc: string
	
	@Column({name: 'codusuario' })
	codusuario: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'institucion' })
	institucion: string
	
	@Column({name: 'primaria' })
	primaria: string
	
	
	
	static listFields(): string[]{
		return [
			"idformestudios", 
			"institucion", 
			"nivelesc", 
			"nrotitbachiller", 
			"titbachiller", 
			"cursoesc", 
			"codusuario", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idformestudios", 
			"institucion", 
			"nivelesc", 
			"nrotitbachiller", 
			"titbachiller", 
			"cursoesc", 
			"codusuario", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idformestudios", 
			"nrotitbachiller", 
			"secundaria", 
			"cicloesc", 
			"titbachiller", 
			"cursoesc", 
			"nivelesc", 
			"codusuario", 
			"codgestion", 
			"institucion", 
			"primaria"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idformestudios", 
			"nrotitbachiller", 
			"secundaria", 
			"cicloesc", 
			"titbachiller", 
			"cursoesc", 
			"nivelesc", 
			"codusuario", 
			"codgestion", 
			"institucion", 
			"primaria"
		];
	}

	static editFields(): string[]{
		return [
			"nrotitbachiller", 
			"secundaria", 
			"cicloesc", 
			"titbachiller", 
			"cursoesc", 
			"nivelesc", 
			"codusuario", 
			"codgestion", 
			"institucion", 
			"primaria", 
			"idformestudios"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"institucion iLIKE :search", 
			"nivelesc iLIKE :search", 
			"titbachiller iLIKE :search", 
			"cursoesc iLIKE :search", 
			"CAST(codusuario AS TEXT) iLIKE :search", 
			"codgestion iLIKE :search", 
			"primaria iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


