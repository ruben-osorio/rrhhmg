
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'altashv', schema: 'public' })
export default class Altashv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("altashv");
	}
	
	@PrimaryGeneratedColumn({name: 'idaltashv'})
	idaltashv: number

	@Column({name: 'cialtas' })
	cialtas: string
	
	@Column({name: 'prinomaltas' })
	prinomaltas: string
	
	@Column({name: 'segnomaltas' })
	segnomaltas: string
	
	@Column({name: 'priapealtas' })
	priapealtas: string
	
	@Column({name: 'segapealtas' })
	segapealtas: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idaltashv", 
			"cialtas", 
			"prinomaltas", 
			"segnomaltas", 
			"priapealtas", 
			"segapealtas", 
			"codusuario", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idaltashv", 
			"cialtas", 
			"prinomaltas", 
			"segnomaltas", 
			"priapealtas", 
			"segapealtas", 
			"codusuario", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idaltashv", 
			"cialtas", 
			"prinomaltas", 
			"segnomaltas", 
			"priapealtas", 
			"segapealtas", 
			"codusuario", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idaltashv", 
			"cialtas", 
			"prinomaltas", 
			"segnomaltas", 
			"priapealtas", 
			"segapealtas", 
			"codusuario", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idaltashv", 
			"cialtas", 
			"prinomaltas", 
			"segnomaltas", 
			"priapealtas", 
			"segapealtas", 
			"codusuario", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"cialtas iLIKE :search", 
			"prinomaltas iLIKE :search", 
			"segnomaltas iLIKE :search", 
			"priapealtas iLIKE :search", 
			"segapealtas iLIKE :search", 
			"codusuario iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


