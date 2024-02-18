
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'titulocursohv', schema: 'public' })
export default class Titulocursohv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("titulocursohv");
	}
	
	@PrimaryGeneratedColumn({name: 'idcursos'})
	idcursos: number

	@Column({name: 'tienetitulo' })
	tienetitulo: string
	
	
	
	static listFields(): string[]{
		return [
			"idcursos", 
			"tienetitulo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcursos", 
			"tienetitulo"
		];
	}

	static viewFields(): string[]{
		return [
			"idcursos", 
			"tienetitulo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcursos", 
			"tienetitulo"
		];
	}

	static editFields(): string[]{
		return [
			"idcursos", 
			"tienetitulo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"tienetitulo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


