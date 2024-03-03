
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'formposgestudios2', schema: 'public' })
export default class Formposgestudios2 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("formposgestudios2");
	}
	
	@PrimaryGeneratedColumn({name: 'idpstestudios'})
	idpstestudios: number

	@Column({name: 'gestionestudios' })
	gestionestudios: number
	
	@Column({name: 'fechatitulo' })
	fechatitulo: string
	
	@Column({name: 'tienetitulo' })
	tienetitulo: string
	
	@Column({name: 'lugarestudios' })
	lugarestudios: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'nombrecurso' })
	nombrecurso: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'modalidadcursoest' })
	modalidadcursoest: string
	
	@Column({name: 'cursocarrera' })
	cursocarrera: string
	
	
	
	static listFields(): string[]{
		return [
			"idpstestudios", 
			"cursocarrera", 
			"nombrecurso", 
			"lugarestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"codgestion", 
			"codusuario", 
			"modalidadcursoest"
		];
	}

	static exportListFields(): string[]{
		return [
			"idpstestudios", 
			"cursocarrera", 
			"nombrecurso", 
			"lugarestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"codgestion", 
			"codusuario", 
			"modalidadcursoest"
		];
	}

	static viewFields(): string[]{
		return [
			"idpstestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"lugarestudios", 
			"codgestion", 
			"nombrecurso", 
			"codusuario", 
			"modalidadcursoest", 
			"cursocarrera"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idpstestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"lugarestudios", 
			"codgestion", 
			"nombrecurso", 
			"codusuario", 
			"modalidadcursoest", 
			"cursocarrera"
		];
	}

	static editFields(): string[]{
		return [
			"idpstestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"lugarestudios", 
			"codgestion", 
			"nombrecurso", 
			"codusuario", 
			"modalidadcursoest", 
			"cursocarrera"
		];
	}

	static vhojavidaFields(): string[]{
		return [
			"idpstestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"lugarestudios", 
			"codgestion", 
			"nombrecurso", 
			"codusuario", 
			"modalidadcursoest", 
			"cursocarrera"
		];
	}

	static exportVhojavidaFields(): string[]{
		return [
			"idpstestudios", 
			"gestionestudios", 
			"fechatitulo", 
			"tienetitulo", 
			"lugarestudios", 
			"codgestion", 
			"nombrecurso", 
			"codusuario", 
			"modalidadcursoest", 
			"cursocarrera"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"cursocarrera iLIKE :search", 
			"nombrecurso iLIKE :search", 
			"lugarestudios iLIKE :search", 
			"tienetitulo iLIKE :search", 
			"codgestion iLIKE :search", 
			"codusuario iLIKE :search", 
			"modalidadcursoest iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


