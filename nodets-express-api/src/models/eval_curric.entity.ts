
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'eval_curric', schema: 'public' })
export default class Eval_Curric extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("eval_curric");
	}
	
	@PrimaryGeneratedColumn({name: 'id_ec'})
	id_ec: number

	@Column({name: 'listado_hoja' })
	listado_hoja: string
	
	
	
	static listFields(): string[]{
		return [
			"id_ec", 
			"listado_hoja"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_ec", 
			"listado_hoja"
		];
	}

	static viewFields(): string[]{
		return [
			"id_ec", 
			"listado_hoja"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_ec", 
			"listado_hoja"
		];
	}

	static editFields(): string[]{
		return [
			"listado_hoja", 
			"id_ec"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"listado_hoja iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


