
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'experiencia_especifica', schema: 'public' })
export default class Experiencia_Especifica extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("experiencia_especifica");
	}
	
	@PrimaryColumn({name: 'id_ee'})
	id_ee: number

	@Column({name: 'id_evaluacionperfil' })
	id_evaluacionperfil: number
	
	@Column({name: 'detalle_ee' })
	detalle_ee: string
	
	
	
	static listFields(): string[]{
		return [
			"id_ee", 
			"id_evaluacionperfil", 
			"detalle_ee"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_ee", 
			"id_evaluacionperfil", 
			"detalle_ee"
		];
	}

	static viewFields(): string[]{
		return [
			"id_ee", 
			"id_evaluacionperfil", 
			"detalle_ee"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_ee", 
			"id_evaluacionperfil", 
			"detalle_ee"
		];
	}

	static editFields(): string[]{
		return [
			"id_ee", 
			"id_evaluacionperfil", 
			"detalle_ee"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle_ee iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


