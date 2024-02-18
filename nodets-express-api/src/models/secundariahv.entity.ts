
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'secundariahv', schema: 'public' })
export default class Secundariahv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("secundariahv");
	}
	
	@PrimaryColumn({name: 'idsecundariahv'})
	idsecundariahv: number

	@Column({name: 'nombresechv' })
	nombresechv: string
	
	@Column({name: 'numeralhv' })
	numeralhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idsecundariahv", 
			"nombresechv", 
			"numeralhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idsecundariahv", 
			"nombresechv", 
			"numeralhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idsecundariahv", 
			"nombresechv", 
			"numeralhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idsecundariahv", 
			"nombresechv", 
			"numeralhv"
		];
	}

	static editFields(): string[]{
		return [
			"idsecundariahv", 
			"nombresechv", 
			"numeralhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombresechv iLIKE :search", 
			"numeralhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


