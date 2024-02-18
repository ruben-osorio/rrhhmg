
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plantillauo', schema: 'public' })
export default class Plantillauo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plantillauo");
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
	
	@Column({name: 'prefijosoa' })
	prefijosoa: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'nombreuo' })
	nombreuo: string
	
	@Column({name: 'clasificacionuo' })
	clasificacionuo: string
	
	@Column({name: 'dependenciauo' })
	dependenciauo: string
	
	@Column({name: 'niveluo' })
	niveluo: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'soa_nombre' })
	soa_nombre: string
	
	
	
	static listFields(): string[]{
		return [
			"nombreuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"codgestion", 
			"clasificacionuo", 
			"sigla", 
			"idpuo", 
			"soa_nombre"
		];
	}

	static exportListFields(): string[]{
		return [
			"nombreuo", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"codgestion", 
			"clasificacionuo", 
			"sigla", 
			"idpuo", 
			"soa_nombre"
		];
	}

	static viewFields(): string[]{
		return [
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"prefijosoa", 
			"codgestion", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"sigla", 
			"idpuo", 
			"soa_nombre"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"prefijosoa", 
			"codgestion", 
			"nombreuo", 
			"clasificacionuo", 
			"dependenciauo", 
			"niveluo", 
			"sigla", 
			"idpuo", 
			"soa_nombre"
		];
	}

	static editFields(): string[]{
		return [
			"nombreuo", 
			"prefijosoa", 
			"codn1", 
			"codn2", 
			"codn3", 
			"codn4", 
			"codn5", 
			"codn6", 
			"clasificacionuo", 
			"sigla", 
			"codgestion", 
			"idpuo", 
			"soa_nombre"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombreuo iLIKE :search", 
			"codgestion iLIKE :search", 
			"clasificacionuo iLIKE :search", 
			"sigla iLIKE :search", 
			"dependenciauo iLIKE :search", 
			"niveluo iLIKE :search", 
			"prefijosoa iLIKE :search", 
			"soa_nombre iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


