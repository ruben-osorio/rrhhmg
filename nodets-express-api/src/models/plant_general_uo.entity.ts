
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plant_general_uo', schema: 'public' })
export default class Plant_General_Uo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plant_general_uo");
	}
	
	@PrimaryColumn({name: 'idpuo'})
	idpuo: number

	@Column({name: 'codn1' })
	codn1: number
	
	@Column({name: 'codn2' })
	codn2: number
	
	@Column({name: 'codn3' })
	codn3: number
	
	@Column({name: 'codn4' })
	codn4: number
	
	@Column({name: 'codn5' })
	codn5: number
	
	@Column({name: 'codn6' })
	codn6: number
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'prefijosoa' })
	prefijosoa: string
	
	@Column({name: 'nombreuo' })
	nombreuo: string
	
	@Column({name: 'clasificacionuo' })
	clasificacionuo: string
	
	@Column({name: 'dependenciauo' })
	dependenciauo: string
	
	@Column({name: 'niveluo' })
	niveluo: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'nrodependencia' })
	nrodependencia: number
	
	
	
	static listFields(): string[]{
		return [
			"idpuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"sigla", 
			"prefijosoa", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"codgestion", 
			"nrodependencia"
		];
	}

	static exportListFields(): string[]{
		return [
			"idpuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"sigla", 
			"prefijosoa", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"codgestion", 
			"nrodependencia"
		];
	}

	static viewFields(): string[]{
		return [
			"idpuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"sigla", 
			"prefijosoa", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"codgestion", 
			"nrodependencia"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idpuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"sigla", 
			"prefijosoa", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"codgestion", 
			"nrodependencia"
		];
	}

	static editFields(): string[]{
		return [
			"idpuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"sigla", 
			"prefijosoa", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"codgestion", 
			"nrodependencia"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"sigla iLIKE :search", 
			"prefijosoa iLIKE :search", 
			"nombreuo iLIKE :search", 
			"clasificacionuo iLIKE :search", 
			"dependenciauo iLIKE :search", 
			"niveluo iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


