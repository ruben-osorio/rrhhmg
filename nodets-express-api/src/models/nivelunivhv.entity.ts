
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'nivelunivhv', schema: 'public' })
export default class Nivelunivhv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("nivelunivhv");
	}
	
	@PrimaryGeneratedColumn({name: 'idnivelhv'})
	idnivelhv: number

	@Column({name: 'nombrehv' })
	nombrehv: string
	
	@Column({name: 'abrevhv' })
	abrevhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idnivelhv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idnivelhv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idnivelhv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idnivelhv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static editFields(): string[]{
		return [
			"idnivelhv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombrehv iLIKE :search", 
			"abrevhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


