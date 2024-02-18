
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'idiomashv', schema: 'public' })
export default class Idiomashv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("idiomashv");
	}
	
	@PrimaryGeneratedColumn({name: 'idmas'})
	idmas: number

	@Column({name: 'idiomasnombres' })
	idiomasnombres: string
	
	@Column({name: 'nativo' })
	nativo: string
	
	@Column({name: 'extranjero' })
	extranjero: string
	
	
	
	static listFields(): string[]{
		return [
			"idmas", 
			"idiomasnombres", 
			"nativo", 
			"extranjero"
		];
	}

	static exportListFields(): string[]{
		return [
			"idmas", 
			"idiomasnombres", 
			"nativo", 
			"extranjero"
		];
	}

	static viewFields(): string[]{
		return [
			"idmas", 
			"idiomasnombres", 
			"nativo", 
			"extranjero"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idmas", 
			"idiomasnombres", 
			"nativo", 
			"extranjero"
		];
	}

	static editFields(): string[]{
		return [
			"idmas", 
			"idiomasnombres", 
			"nativo", 
			"extranjero"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idiomasnombres iLIKE :search", 
			"nativo iLIKE :search", 
			"extranjero iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


