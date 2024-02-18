
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'modalidadhv', schema: 'public' })
export default class Modalidadhv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("modalidadhv");
	}
	
	@PrimaryGeneratedColumn({name: 'idmodhv'})
	idmodhv: number

	@Column({name: 'modalidadhv' })
	modalidadhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idmodhv", 
			"modalidadhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idmodhv", 
			"modalidadhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idmodhv", 
			"modalidadhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idmodhv", 
			"modalidadhv"
		];
	}

	static editFields(): string[]{
		return [
			"idmodhv", 
			"modalidadhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"modalidadhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


