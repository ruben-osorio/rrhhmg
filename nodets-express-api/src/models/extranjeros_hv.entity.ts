
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'extranjeros_hv', schema: 'public' })
export default class Extranjeros_Hv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("extranjeros_hv");
	}
	
	@PrimaryGeneratedColumn({name: 'id_extran_hv'})
	id_extran_hv: number

	@Column({name: 'nom_hv' })
	nom_hv: string
	
	@Column({name: 'abrev_hv' })
	abrev_hv: string
	
	
	
	static listFields(): string[]{
		return [
			"id_extran_hv", 
			"nom_hv", 
			"abrev_hv"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_extran_hv", 
			"nom_hv", 
			"abrev_hv"
		];
	}

	static viewFields(): string[]{
		return [
			"id_extran_hv", 
			"nom_hv", 
			"abrev_hv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_extran_hv", 
			"nom_hv", 
			"abrev_hv"
		];
	}

	static editFields(): string[]{
		return [
			"id_extran_hv", 
			"nom_hv", 
			"abrev_hv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nom_hv iLIKE :search", 
			"abrev_hv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


