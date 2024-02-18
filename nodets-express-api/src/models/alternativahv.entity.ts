
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'alternativahv', schema: 'public' })
export default class Alternativahv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("alternativahv");
	}
	
	@PrimaryGeneratedColumn({name: 'id_altern_hv'})
	id_altern_hv: number

	@Column({name: 'nombrealterhv' })
	nombrealterhv: string
	
	@Column({name: 'numeralhv' })
	numeralhv: string
	
	
	
	static listFields(): string[]{
		return [
			"id_altern_hv", 
			"nombrealterhv", 
			"numeralhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_altern_hv", 
			"nombrealterhv", 
			"numeralhv"
		];
	}

	static viewFields(): string[]{
		return [
			"id_altern_hv", 
			"nombrealterhv", 
			"numeralhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_altern_hv", 
			"nombrealterhv", 
			"numeralhv"
		];
	}

	static editFields(): string[]{
		return [
			"id_altern_hv", 
			"nombrealterhv", 
			"numeralhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombrealterhv iLIKE :search", 
			"numeralhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


