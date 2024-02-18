
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'planilla_presupuestaria', schema: 'public' })
export default class Planilla_Presupuestaria extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("planilla_presupuestaria");
	}
	
	@Column({name: 'fuente' })
	fuente: number
	
	@Column({name: 'haber_basico' })
	haber_basico: number
	
	@PrimaryColumn({name: 'idplanillapres'})
	idplanillapres: number

	@Column({name: 'descrip_puesto' })
	descrip_puesto: string
	
	@Column({name: 'unidad_organiz' })
	unidad_organiz: string
	
	@Column({name: 'clasificacion' })
	clasificacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'denominacion_cargo' })
	denominacion_cargo: string
	
	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'numero_item' })
	numero_item: number
	
	@Column({name: 'vayx' })
	vayx: number
	
	@Column({name: 'den1' })
	den1: string
	
	@Column({name: 'den2' })
	den2: string
	
	@Column({name: 'den3' })
	den3: string
	
	@Column({name: 'den4' })
	den4: string
	
	
	
	static listFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static exportListFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static viewFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"idplanillapres"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"idplanillapres"
		];
	}

	static editFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"numero_item", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"idplanillapres"
		];
	}

	static editarFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"numero_item", 
			"haber_basico", 
			"denominacion_cargo", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"denominacion_cargo iLIKE :search", 
			"descrip_puesto iLIKE :search", 
			"unidad_organiz iLIKE :search", 
			"clasificacion iLIKE :search", 
			"den1 iLIKE :search", 
			"den2 iLIKE :search", 
			"den3 iLIKE :search", 
			"den4 iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


