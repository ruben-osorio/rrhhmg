
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'inst_bas_hv', schema: 'public' })
export default class Inst_Bas_Hv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("inst_bas_hv");
	}
	
	@PrimaryGeneratedColumn({name: 'id_bas_hv'})
	id_bas_hv: number

	@Column({name: 'nombre_ib_hv' })
	nombre_ib_hv: string
	
	@Column({name: 'abrev_hv' })
	abrev_hv: string
	
	
	
	static listFields(): string[]{
		return [
			"id_bas_hv", 
			"nombre_ib_hv", 
			"abrev_hv"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_bas_hv", 
			"nombre_ib_hv", 
			"abrev_hv"
		];
	}

	static viewFields(): string[]{
		return [
			"id_bas_hv", 
			"nombre_ib_hv", 
			"abrev_hv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_bas_hv", 
			"nombre_ib_hv", 
			"abrev_hv"
		];
	}

	static editFields(): string[]{
		return [
			"id_bas_hv", 
			"nombre_ib_hv", 
			"abrev_hv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_ib_hv iLIKE :search", 
			"abrev_hv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


