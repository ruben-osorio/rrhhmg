
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cursocolegio', schema: 'public' })
export default class Cursocolegio extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cursocolegio");
	}
	
	@PrimaryGeneratedColumn({name: 'idcurso'})
	idcurso: number

	@Column({name: 'nombrecurso' })
	nombrecurso: string
	
	@Column({name: 'abrevcurso' })
	abrevcurso: string
	
	
	
	static listFields(): string[]{
		return [
			"idcurso", 
			"nombrecurso", 
			"abrevcurso"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcurso", 
			"nombrecurso", 
			"abrevcurso"
		];
	}

	static viewFields(): string[]{
		return [
			"idcurso", 
			"nombrecurso", 
			"abrevcurso"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcurso", 
			"nombrecurso", 
			"abrevcurso"
		];
	}

	static editFields(): string[]{
		return [
			"idcurso", 
			"nombrecurso", 
			"abrevcurso"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombrecurso iLIKE :search", 
			"abrevcurso iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


