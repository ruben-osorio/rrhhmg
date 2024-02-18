
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'escala', schema: 'public' })
export default class Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("escala");
	}
	
	@PrimaryGeneratedColumn({name: 'idescala'})
	idescala: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'ageneral' })
	ageneral: number
	
	@Column({name: 'mgeneral' })
	mgeneral: number
	
	@Column({name: 'aespecifica' })
	aespecifica: number
	
	@Column({name: 'mespecifica' })
	mespecifica: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'entidad' })
	entidad: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'organizacion' })
	organizacion: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'academico' })
	academico: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'normativa_codigo' })
	normativa_codigo: number
	
	@Column({name: 'normativa_anyo' })
	normativa_anyo: number
	
	@Column({name: 'numero_items' })
	numero_items: number
	
	@Column({name: 'costo_mensual' })
	costo_mensual: number
	
	@Column({name: 'den2' })
	den2: string
	
	@Column({name: 'den3' })
	den3: string
	
	@Column({name: 'den4' })
	den4: string
	
	@Column({name: 'den1' })
	den1: string
	
	@Column({name: 'denom_total' })
	denom_total: string
	
	
	
	static listFields(): string[]{
		return [
			"idescala", 
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denom_total", 
			"haberbasico", 
			"numero_items"
		];
	}

	static exportListFields(): string[]{
		return [
			"idescala", 
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denom_total", 
			"haberbasico", 
			"numero_items"
		];
	}

	static viewFields(): string[]{
		return [
			"idescala", 
			"codgestion", 
			"financiero", 
			"normativa_codigo", 
			"normativa_anyo", 
			"denominacion", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"academico", 
			"detalle", 
			"numero_items", 
			"den2", 
			"den3", 
			"den4", 
			"den1", 
			"denom_total"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idescala", 
			"codgestion", 
			"financiero", 
			"normativa_codigo", 
			"normativa_anyo", 
			"denominacion", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"academico", 
			"detalle", 
			"numero_items", 
			"den2", 
			"den3", 
			"den4", 
			"den1", 
			"denom_total"
		];
	}

	static editFields(): string[]{
		return [
			"financiero", 
			"nivel", 
			"denominacion", 
			"numero_items", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"denom_total", 
			"idescala"
		];
	}

	static edicionFields(): string[]{
		return [
			"normativa_codigo", 
			"financiero", 
			"categoria", 
			"nivel", 
			"denominacion", 
			"numero_items", 
			"haberbasico", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"denom_total", 
			"idescala"
		];
	}

	static listadoFields(): string[]{
		return [
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"codgestion", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"denominacion", 
			"normativa_codigo", 
			"numero_items", 
			"costo_mensual", 
			"academico", 
			"detalle", 
			"normativa_anyo", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"denom_total", 
			"idescala"
		];
	}

	static exportListadoFields(): string[]{
		return [
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"codgestion", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"denominacion", 
			"normativa_codigo", 
			"numero_items", 
			"costo_mensual", 
			"academico", 
			"detalle", 
			"normativa_anyo", 
			"den1", 
			"den2", 
			"den3", 
			"den4", 
			"denom_total", 
			"idescala"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"categoria iLIKE :search", 
			"CAST(nivel AS TEXT) iLIKE :search", 
			"denom_total iLIKE :search", 
			"CAST(haberbasico AS TEXT) iLIKE :search", 
			"CAST(numero_items AS TEXT) iLIKE :search", 
			"denominacion iLIKE :search", 
			"den1 iLIKE :search", 
			"den2 iLIKE :search", 
			"den3 iLIKE :search", 
			"den4 iLIKE :search", 
			"habilitado iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


