
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
	
	@Column({name: 'nivel' })
	nivel: string
	
	
	
	static listFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral", 
			"nivel"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral", 
			"nivel"
		];
	}

	static viewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral", 
			"nivel"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral", 
			"nivel"
		];
	}

	static editFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"numeral", 
			"nivel"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomcurshv iLIKE :search", 
			"numeral iLIKE :search", 
			"nivel iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


