
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'insthv', schema: 'public' })
export default class Insthv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("insthv");
	}
	
	@PrimaryGeneratedColumn({name: 'idinsthv'})
	idinsthv: number

	@Column({name: 'insthv' })
	insthv: string
	
	@Column({name: 'abrevhv' })
	abrevhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idinsthv", 
			"insthv", 
			"abrevhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idinsthv", 
			"insthv", 
			"abrevhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idinsthv", 
			"insthv", 
			"abrevhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idinsthv", 
			"insthv", 
			"abrevhv"
		];
	}

	static editFields(): string[]{
		return [
			"idinsthv", 
			"insthv", 
			"abrevhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"insthv iLIKE :search", 
			"abrevhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


