
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cursoshv', schema: 'public' })
export default class Cursoshv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cursoshv");
	}
	
	@PrimaryGeneratedColumn({name: 'idcursoshv'})
	idcursoshv: number

	@Column({name: 'nomcurshv' })
	nomcurshv: string
	
	@Column({name: 'numeral' })
	numeral: string
	
	
	
	static listFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral"
		];
	}

	static viewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral"
		];
	}

	static editFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomcurshv iLIKE :search", 
			"numeral iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


