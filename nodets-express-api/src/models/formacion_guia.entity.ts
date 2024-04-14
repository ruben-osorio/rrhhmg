
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formacion_guia', schema: 'public' })
export default class Formacion_Guia extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formacion_guia");
	}
	
	@PrimaryColumn({name: 'idfg'})
	idfg: number

	@Column({name: 'valorfg' })
	valorfg: number
	
	@Column({name: 'descripciofg' })
	descripciofg: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idfg", 
			"valorfg", 
			"descripciofg", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idfg", 
			"valorfg", 
			"descripciofg", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idfg", 
			"valorfg", 
			"descripciofg", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idfg", 
			"valorfg", 
			"descripciofg", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idfg", 
			"valorfg", 
			"descripciofg", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripciofg iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


