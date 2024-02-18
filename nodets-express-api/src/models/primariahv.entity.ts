
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'primariahv', schema: 'public' })
export default class Primariahv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("primariahv");
	}
	
	@PrimaryGeneratedColumn({name: 'idprimariahv'})
	idprimariahv: number

	@Column({name: 'nombreprimhv' })
	nombreprimhv: string
	
	@Column({name: 'numeralhv' })
	numeralhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idprimariahv", 
			"nombreprimhv", 
			"numeralhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idprimariahv", 
			"nombreprimhv", 
			"numeralhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idprimariahv", 
			"nombreprimhv", 
			"numeralhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idprimariahv", 
			"nombreprimhv", 
			"numeralhv"
		];
	}

	static editFields(): string[]{
		return [
			"idprimariahv", 
			"nombreprimhv", 
			"numeralhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombreprimhv iLIKE :search", 
			"numeralhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


