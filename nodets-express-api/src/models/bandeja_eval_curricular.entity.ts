
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'bandeja_eval_curricular', schema: 'public' })
export default class Bandeja_Eval_Curricular extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("bandeja_eval_curricular");
	}
	
	@PrimaryColumn({name: 'id'})
	id: number

	@Column({name: 'seleccion' })
	seleccion: string
	
	@Column({name: 'nro_item' })
	nro_item: number
	
	@Column({name: 'cv_aprovado' })
	cv_aprovado: string
	
	@Column({name: 'item' })
	item: string
	
	@Column({name: 'coduser' })
	coduser: number
	
	@Column({name: 'codgestion' })
	codgestion: number
	
	
	
	static listFields(): string[]{
		return [
			"id", 
			"seleccion", 
			"nro_item", 
			"coduser", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id", 
			"seleccion", 
			"nro_item", 
			"coduser", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"id", 
			"seleccion", 
			"nro_item", 
			"cv_aprovado", 
			"item", 
			"coduser", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id", 
			"seleccion", 
			"nro_item", 
			"cv_aprovado", 
			"item", 
			"coduser", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"id", 
			"seleccion", 
			"nro_item", 
			"cv_aprovado", 
			"item", 
			"coduser", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"seleccion iLIKE :search", 
			"cv_aprovado iLIKE :search", 
			"item iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


