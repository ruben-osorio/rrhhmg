
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'equivcursoshv', schema: 'public' })
export default class Equivcursoshv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("equivcursoshv");
	}
	
	@PrimaryGeneratedColumn({name: 'idcursoshv'})
	idcursoshv: number

	@Column({name: 'nomcurshv' })
	nomcurshv: string
	
	@Column({name: 'nivelhv' })
	nivelhv: string
	
	@Column({name: 'ordenhv' })
	ordenhv: number
	
	
	
	static listFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"nivelhv", 
			"ordenhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"nivelhv", 
			"ordenhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"nivelhv", 
			"ordenhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"nivelhv", 
			"ordenhv"
		];
	}

	static editFields(): string[]{
		return [
			"idcursoshv", 
			"nomcurshv", 
			"nivelhv", 
			"ordenhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomcurshv iLIKE :search", 
			"nivelhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


