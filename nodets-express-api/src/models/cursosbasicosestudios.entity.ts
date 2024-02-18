
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cursosBasicosEstudios', schema: 'public' })
export default class Cursosbasicosestudios extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cursosBasicosEstudios");
	}
	
	@PrimaryGeneratedColumn({name: 'idBasicosEstudios'})
	idbasicosestudios: number

	@Column({name: 'gestionCursoBasico' })
	gestioncursobasico: number
	
	@Column({name: 'nombreCursoBasico' })
	nombrecursobasico: string
	
	@Column({name: 'lugarCursoBasico' })
	lugarcursobasico: string
	
	@Column({name: 'certCursoBasico' })
	certcursobasico: string
	
	
	
	static listFields(): string[]{
		return [
			"idBasicosEstudios AS idbasicosestudios", 
			"gestionCursoBasico AS gestioncursobasico", 
			"nombreCursoBasico AS nombrecursobasico", 
			"lugarCursoBasico AS lugarcursobasico", 
			"certCursoBasico AS certcursobasico"
		];
	}

	static exportListFields(): string[]{
		return [
			"idBasicosEstudios AS idbasicosestudios", 
			"gestionCursoBasico AS gestioncursobasico", 
			"nombreCursoBasico AS nombrecursobasico", 
			"lugarCursoBasico AS lugarcursobasico", 
			"certCursoBasico AS certcursobasico"
		];
	}

	static viewFields(): string[]{
		return [
			"idBasicosEstudios AS idbasicosestudios", 
			"gestionCursoBasico AS gestioncursobasico", 
			"nombreCursoBasico AS nombrecursobasico", 
			"lugarCursoBasico AS lugarcursobasico", 
			"certCursoBasico AS certcursobasico"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idBasicosEstudios AS idbasicosestudios", 
			"gestionCursoBasico AS gestioncursobasico", 
			"nombreCursoBasico AS nombrecursobasico", 
			"lugarCursoBasico AS lugarcursobasico", 
			"certCursoBasico AS certcursobasico"
		];
	}

	static editFields(): string[]{
		return [
			"idBasicosEstudios AS idbasicosestudios", 
			"gestionCursoBasico AS gestioncursobasico", 
			"nombreCursoBasico AS nombrecursobasico", 
			"lugarCursoBasico AS lugarcursobasico", 
			"certCursoBasico AS certcursobasico"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombreCursoBasico iLIKE :search", 
			"lugarCursoBasico iLIKE :search", 
			"certCursoBasico iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


