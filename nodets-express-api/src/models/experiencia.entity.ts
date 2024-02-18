
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'experiencia', schema: 'public' })
export default class Experiencia extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("experiencia");
	}
	
	@Column({name: 'codhoja' })
	codhoja: number
	
	@Column({name: 'f_fin' })
	f_fin: string
	
	@Column({name: 'especifica' })
	especifica: string
	
	@PrimaryGeneratedColumn({name: 'idexp'})
	idexp: number

	@Column({name: 'f_inicio' })
	f_inicio: string
	
	@Column({name: 'entidad' })
	entidad: string
	
	@Column({name: 'cargo' })
	cargo: string
	
	@Column({name: 'funciones' })
	funciones: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"entidad", 
			"cargo", 
			"funciones", 
			"f_inicio", 
			"f_fin", 
			"codhoja", 
			"especifica", 
			"idexp", 
			"codgestion", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"entidad", 
			"cargo", 
			"funciones", 
			"f_inicio", 
			"f_fin", 
			"codhoja", 
			"especifica", 
			"idexp", 
			"codgestion", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"codhoja", 
			"f_fin", 
			"especifica", 
			"idexp", 
			"f_inicio", 
			"entidad", 
			"cargo", 
			"funciones", 
			"codgestion", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codhoja", 
			"f_fin", 
			"especifica", 
			"idexp", 
			"f_inicio", 
			"entidad", 
			"cargo", 
			"funciones", 
			"codgestion", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"entidad", 
			"cargo", 
			"funciones", 
			"f_inicio", 
			"f_fin", 
			"codhoja", 
			"especifica", 
			"codgestion", 
			"idexp", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"entidad iLIKE :search", 
			"cargo iLIKE :search", 
			"funciones iLIKE :search", 
			"codgestion iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


