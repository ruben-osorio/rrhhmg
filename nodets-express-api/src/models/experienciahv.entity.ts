
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'experienciahv', schema: 'public' })
export default class Experienciahv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("experienciahv");
	}
	
	@PrimaryColumn({name: 'idexp_hv'})
	idexp_hv: number

	@Column({name: 'f_inicio_hv' })
	f_inicio_hv: string
	
	@Column({name: 'f_fin_hv' })
	f_fin_hv: string
	
	@Column({name: 'funciones_hv' })
	funciones_hv: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'sumatoria' })
	sumatoria: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'entidad_hv' })
	entidad_hv: string
	
	@Column({name: 'cargo_hv' })
	cargo_hv: string
	
	
	
	static listFields(): string[]{
		return [
			"idexp_hv", 
			"f_inicio_hv", 
			"f_fin_hv", 
			"funciones_hv", 
			"codusuario", 
			"sumatoria", 
			"codgestion", 
			"entidad_hv", 
			"cargo_hv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idexp_hv", 
			"f_inicio_hv", 
			"f_fin_hv", 
			"funciones_hv", 
			"codusuario", 
			"sumatoria", 
			"codgestion", 
			"entidad_hv", 
			"cargo_hv"
		];
	}

	static viewFields(): string[]{
		return [
			"idexp_hv", 
			"f_inicio_hv", 
			"f_fin_hv", 
			"funciones_hv", 
			"codusuario", 
			"sumatoria", 
			"codgestion", 
			"entidad_hv", 
			"cargo_hv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idexp_hv", 
			"f_inicio_hv", 
			"f_fin_hv", 
			"funciones_hv", 
			"codusuario", 
			"sumatoria", 
			"codgestion", 
			"entidad_hv", 
			"cargo_hv"
		];
	}

	static editFields(): string[]{
		return [
			"idexp_hv", 
			"f_inicio_hv", 
			"f_fin_hv", 
			"funciones_hv", 
			"codusuario", 
			"sumatoria", 
			"codgestion", 
			"entidad_hv", 
			"cargo_hv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"funciones_hv iLIKE :search", 
			"codusuario iLIKE :search", 
			"sumatoria iLIKE :search", 
			"codgestion iLIKE :search", 
			"entidad_hv iLIKE :search", 
			"cargo_hv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


