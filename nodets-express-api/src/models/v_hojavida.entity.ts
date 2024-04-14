
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_hojavida', schema: 'public' })
export default class V_Hojavida extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_hojavida");
	}
	
	@PrimaryColumn({name: 'id'})
	id: number

	@Column({name: 'fechatitulo' })
	fechatitulo: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'nombre1' })
	nombre1: string
	
	@Column({name: 'nombre2' })
	nombre2: string
	
	@Column({name: 'cursoesc' })
	cursoesc: string
	
	@Column({name: 'niveluniv' })
	niveluniv: string
	
	@Column({name: 'cursouniv' })
	cursouniv: string
	
	@Column({name: 'carrerauniv' })
	carrerauniv: string
	
	@Column({name: 'cursocarrera' })
	cursocarrera: string
	
	@Column({name: 'tienetitulo' })
	tienetitulo: string
	
	@Column({name: 'carnet' })
	carnet: string
	
	
	
	static listFields(): string[]{
		return [
			"id", 
			"fechatitulo", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombre1", 
			"nombre2", 
			"cursoesc", 
			"niveluniv", 
			"cursouniv", 
			"carrerauniv", 
			"cursocarrera", 
			"tienetitulo", 
			"carnet"
		];
	}

	static exportListFields(): string[]{
		return [
			"id", 
			"fechatitulo", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombre1", 
			"nombre2", 
			"cursoesc", 
			"niveluniv", 
			"cursouniv", 
			"carrerauniv", 
			"cursocarrera", 
			"tienetitulo", 
			"carnet"
		];
	}

	static viewFields(): string[]{
		return [
			"id", 
			"fechatitulo", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombre1", 
			"nombre2", 
			"cursoesc", 
			"niveluniv", 
			"cursouniv", 
			"carrerauniv", 
			"cursocarrera", 
			"tienetitulo", 
			"carnet"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id", 
			"fechatitulo", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombre1", 
			"nombre2", 
			"cursoesc", 
			"niveluniv", 
			"cursouniv", 
			"carrerauniv", 
			"cursocarrera", 
			"tienetitulo", 
			"carnet"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"expedido iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"nombre1 iLIKE :search", 
			"nombre2 iLIKE :search", 
			"cursoesc iLIKE :search", 
			"niveluniv iLIKE :search", 
			"cursouniv iLIKE :search", 
			"carrerauniv iLIKE :search", 
			"cursocarrera iLIKE :search", 
			"tienetitulo iLIKE :search", 
			"carnet iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


