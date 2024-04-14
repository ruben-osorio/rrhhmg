
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'grado_univhv', schema: 'public' })
export default class Grado_Univhv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("grado_univhv");
	}
	
	@PrimaryGeneratedColumn({name: 'idgraduniv'})
	idgraduniv: number

	@Column({name: 'nombregrado_hv' })
	nombregrado_hv: string
	
	@Column({name: 'abrev_hv' })
	abrev_hv: string
	
	
	
	static listFields(): string[]{
		return [
			"idgraduniv", 
			"nombregrado_hv", 
			"abrev_hv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idgraduniv", 
			"nombregrado_hv", 
			"abrev_hv"
		];
	}

	static viewFields(): string[]{
		return [
			"idgraduniv", 
			"nombregrado_hv", 
			"abrev_hv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idgraduniv", 
			"nombregrado_hv", 
			"abrev_hv"
		];
	}

	static editFields(): string[]{
		return [
			"idgraduniv", 
			"nombregrado_hv", 
			"abrev_hv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombregrado_hv iLIKE :search", 
			"abrev_hv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


