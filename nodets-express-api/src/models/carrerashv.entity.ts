
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'carrerashv', schema: 'public' })
export default class Carrerashv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("carrerashv");
	}
	
	@PrimaryGeneratedColumn({name: 'idcarrerashv'})
	idcarrerashv: number

	@Column({name: 'carrerashv' })
	carrerashv: string
	
	@Column({name: 'abrevhv' })
	abrevhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idcarrerashv", 
			"carrerashv", 
			"abrevhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcarrerashv", 
			"carrerashv", 
			"abrevhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idcarrerashv", 
			"carrerashv", 
			"abrevhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcarrerashv", 
			"carrerashv", 
			"abrevhv"
		];
	}

	static editFields(): string[]{
		return [
			"idcarrerashv", 
			"carrerashv", 
			"abrevhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"carrerashv iLIKE :search", 
			"abrevhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


