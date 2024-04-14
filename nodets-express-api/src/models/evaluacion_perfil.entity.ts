
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'evaluacion_perfil', schema: 'public' })
export default class Evaluacion_Perfil extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("evaluacion_perfil");
	}
	
	@Column({name: 'coduser' })
	coduser: number
	
	@PrimaryColumn({name: 'id'})
	id: number

	@Column({name: 'aprovado' })
	aprovado: string
	
	@Column({name: 'formacion_academica' })
	formacion_academica: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'item' })
	item: string
	
	@Column({name: 'idplanillapres' })
	idplanillapres: number
	
	@Column({name: 'exp_especifica' })
	exp_especifica: string
	
	@Column({name: 'exp_general' })
	exp_general: string
	
	
	
	static listFields(): string[]{
		return [
			"coduser", 
			"id", 
			"aprovado", 
			"formacion_academica", 
			"codgestion", 
			"item", 
			"idplanillapres", 
			"exp_especifica", 
			"exp_general"
		];
	}

	static exportListFields(): string[]{
		return [
			"coduser", 
			"id", 
			"aprovado", 
			"formacion_academica", 
			"codgestion", 
			"item", 
			"idplanillapres", 
			"exp_especifica", 
			"exp_general"
		];
	}

	static viewFields(): string[]{
		return [
			"coduser", 
			"id", 
			"aprovado", 
			"formacion_academica", 
			"codgestion", 
			"item", 
			"idplanillapres", 
			"exp_especifica", 
			"exp_general"
		];
	}

	static exportViewFields(): string[]{
		return [
			"coduser", 
			"id", 
			"aprovado", 
			"formacion_academica", 
			"codgestion", 
			"item", 
			"idplanillapres", 
			"exp_especifica", 
			"exp_general"
		];
	}

	static editFields(): string[]{
		return [
			"id", 
			"coduser", 
			"item", 
			"codgestion", 
			"idplanillapres", 
			"formacion_academica", 
			"exp_especifica", 
			"exp_general"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codgestion iLIKE :search", 
			"item iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


