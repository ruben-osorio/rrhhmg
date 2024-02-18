
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'gradocolegiohv', schema: 'public' })
export default class Gradocolegiohv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("gradocolegiohv");
	}
	
	@PrimaryGeneratedColumn({name: 'idgradohv'})
	idgradohv: number

	@Column({name: 'nombrehv' })
	nombrehv: string
	
	@Column({name: 'abrevhv' })
	abrevhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idgradohv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idgradohv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idgradohv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idgradohv", 
			"nombrehv", 
			"abrevhv"
		];
	}

	static editFields(): string[]{
		return [
			"idgradohv", 
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


