
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formidiomas2', schema: 'public' })
export default class Formidiomas2 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formidiomas2");
	}
	
	@Column({name: 'gestioncurso' })
	gestioncurso: string
	
	@Column({name: 'horasingles' })
	horasingles: number
	
	@PrimaryGeneratedColumn({name: 'idformidioma'})
	idformidioma: number

	@Column({name: 'tipoidioma' })
	tipoidioma: string
	
	@Column({name: 'certificadoidioma' })
	certificadoidioma: string
	
	@Column({name: 'nombreidioma' })
	nombreidioma: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'otroidioma' })
	otroidioma: string
	
	@Column({name: 'institucionidioma' })
	institucionidioma: string
	
	
	
	static listFields(): string[]{
		return [
			"nombreidioma", 
			"horasingles", 
			"certificadoidioma", 
			"gestioncurso", 
			"idformidioma", 
			"tipoidioma", 
			"codusuario", 
			"otroidioma", 
			"institucionidioma"
		];
	}

	static exportListFields(): string[]{
		return [
			"nombreidioma", 
			"horasingles", 
			"certificadoidioma", 
			"gestioncurso", 
			"idformidioma", 
			"tipoidioma", 
			"codusuario", 
			"otroidioma", 
			"institucionidioma"
		];
	}

	static viewFields(): string[]{
		return [
			"gestioncurso", 
			"horasingles", 
			"idformidioma", 
			"tipoidioma", 
			"certificadoidioma", 
			"nombreidioma", 
			"codusuario", 
			"otroidioma", 
			"institucionidioma"
		];
	}

	static exportViewFields(): string[]{
		return [
			"gestioncurso", 
			"horasingles", 
			"idformidioma", 
			"tipoidioma", 
			"certificadoidioma", 
			"nombreidioma", 
			"codusuario", 
			"otroidioma", 
			"institucionidioma"
		];
	}

	static editFields(): string[]{
		return [
			"gestioncurso", 
			"horasingles", 
			"tipoidioma", 
			"certificadoidioma", 
			"nombreidioma", 
			"codusuario", 
			"idformidioma", 
			"otroidioma", 
			"institucionidioma"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombreidioma iLIKE :search", 
			"certificadoidioma iLIKE :search", 
			"tipoidioma iLIKE :search", 
			"codusuario iLIKE :search", 
			"otroidioma iLIKE :search", 
			"institucionidioma iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


