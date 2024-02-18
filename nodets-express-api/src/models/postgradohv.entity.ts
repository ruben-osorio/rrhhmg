
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'postgradohv', schema: 'public' })
export default class Postgradohv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("postgradohv");
	}
	
	@PrimaryGeneratedColumn({name: 'idposthv'})
	idposthv: number

	@Column({name: 'nomposhv' })
	nomposhv: string
	
	@Column({name: 'abrev' })
	abrev: string
	
	
	
	static listFields(): string[]{
		return [
			"idposthv", 
			"nomposhv", 
			"abrev"
		];
	}

	static exportListFields(): string[]{
		return [
			"idposthv", 
			"nomposhv", 
			"abrev"
		];
	}

	static viewFields(): string[]{
		return [
			"idposthv", 
			"nomposhv", 
			"abrev"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idposthv", 
			"nomposhv", 
			"abrev"
		];
	}

	static editFields(): string[]{
		return [
			"idposthv", 
			"nomposhv", 
			"abrev"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomposhv iLIKE :search", 
			"abrev iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


