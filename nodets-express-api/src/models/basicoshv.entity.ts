
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'basicoshv', schema: 'public' })
export default class Basicoshv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("basicoshv");
	}
	
	@PrimaryGeneratedColumn({name: 'id_bas'})
	id_bas: number

	@Column({name: 'nombre_bas' })
	nombre_bas: string
	
	@Column({name: 'abrev_bas' })
	abrev_bas: string
	
	
	
	static listFields(): string[]{
		return [
			"id_bas", 
			"nombre_bas", 
			"abrev_bas"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_bas", 
			"nombre_bas", 
			"abrev_bas"
		];
	}

	static viewFields(): string[]{
		return [
			"id_bas", 
			"nombre_bas", 
			"abrev_bas"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_bas", 
			"nombre_bas", 
			"abrev_bas"
		];
	}

	static editFields(): string[]{
		return [
			"id_bas", 
			"nombre_bas", 
			"abrev_bas"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_bas iLIKE :search", 
			"abrev_bas iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


