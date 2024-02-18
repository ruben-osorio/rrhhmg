
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'evalcurricular', schema: 'public' })
export default class Evalcurricular extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("evalcurricular");
	}
	
	@PrimaryGeneratedColumn({name: 'idec'})
	idec: number

	@Column({name: 'mespecificaec' })
	mespecificaec: number
	
	@Column({name: 'ageneralec' })
	ageneralec: number
	
	@Column({name: 'mgeneralec' })
	mgeneralec: number
	
	@Column({name: 'ciec' })
	ciec: number
	
	@Column({name: 'haberbasicoec' })
	haberbasicoec: number
	
	@Column({name: 'aespecificaec' })
	aespecificaec: number
	
	@Column({name: 'nivelec' })
	nivelec: string
	
	@Column({name: 'denominacionec' })
	denominacionec: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'formacadec' })
	formacadec: string
	
	
	
	static listFields(): string[]{
		return [
			"idec", 
			"nivelec", 
			"denominacionec", 
			"haberbasicoec", 
			"formacadec", 
			"ageneralec", 
			"mgeneralec", 
			"aespecificaec", 
			"mespecificaec", 
			"ciec", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idec", 
			"nivelec", 
			"denominacionec", 
			"haberbasicoec", 
			"formacadec", 
			"ageneralec", 
			"mgeneralec", 
			"aespecificaec", 
			"mespecificaec", 
			"ciec", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idec", 
			"nivelec", 
			"denominacionec", 
			"haberbasicoec", 
			"formacadec", 
			"ageneralec", 
			"mgeneralec", 
			"aespecificaec", 
			"mespecificaec", 
			"ciec", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idec", 
			"nivelec", 
			"denominacionec", 
			"haberbasicoec", 
			"formacadec", 
			"ageneralec", 
			"mgeneralec", 
			"aespecificaec", 
			"mespecificaec", 
			"ciec", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"nivelec", 
			"denominacionec", 
			"haberbasicoec", 
			"formacadec", 
			"ageneralec", 
			"mgeneralec", 
			"aespecificaec", 
			"mespecificaec", 
			"ciec", 
			"codgestion", 
			"idec"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nivelec iLIKE :search", 
			"denominacionec iLIKE :search", 
			"formacadec iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


