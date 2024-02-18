
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'calidadhv', schema: 'public' })
export default class Calidadhv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("calidadhv");
	}
	
	@PrimaryGeneratedColumn({name: 'idcalidadhv'})
	idcalidadhv: number

	@Column({name: 'nombre' })
	nombre: string
	
	@Column({name: 'abrevhv' })
	abrevhv: string
	
	
	
	static listFields(): string[]{
		return [
			"idcalidadhv", 
			"nombre", 
			"abrevhv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcalidadhv", 
			"nombre", 
			"abrevhv"
		];
	}

	static viewFields(): string[]{
		return [
			"idcalidadhv", 
			"nombre", 
			"abrevhv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcalidadhv", 
			"nombre", 
			"abrevhv"
		];
	}

	static editFields(): string[]{
		return [
			"idcalidadhv", 
			"nombre", 
			"abrevhv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre iLIKE :search", 
			"abrevhv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


