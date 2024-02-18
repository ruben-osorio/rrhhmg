
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'hojavida', schema: 'public' })
export default class Hojavida extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("hojavida");
	}
	
	@Column({name: 'telefono' })
	telefono: number
	
	@Column({name: 'fnacimiento' })
	fnacimiento: string
	
	@PrimaryGeneratedColumn({name: 'idhoja'})
	idhoja: number

	@Column({name: 'correo' })
	correo: string
	
	@Column({name: 'estcivil' })
	estcivil: string
	
	@Column({name: 'direccion' })
	direccion: string
	
	@Column({name: 'genero' })
	genero: string
	
	@Column({name: 'militar' })
	militar: string
	
	@Column({name: 'fotografia' })
	fotografia: string
	
	@Column({name: 'archivo' })
	archivo: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'nacionalidad' })
	nacionalidad: string
	
	@Column({name: 'ciudad' })
	ciudad: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'movil' })
	movil: number
	
	
	
	static listFields(): string[]{
		return [
			"fnacimiento", 
			"nacionalidad", 
			"ciudad", 
			"telefono", 
			"movil", 
			"correo", 
			"direccion", 
			"estcivil", 
			"genero", 
			"militar", 
			"fotografia", 
			"codgestion", 
			"archivo", 
			"codusuario", 
			"idhoja"
		];
	}

	static exportListFields(): string[]{
		return [
			"fnacimiento", 
			"nacionalidad", 
			"ciudad", 
			"telefono", 
			"movil", 
			"correo", 
			"direccion", 
			"estcivil", 
			"genero", 
			"militar", 
			"fotografia", 
			"codgestion", 
			"archivo", 
			"codusuario", 
			"idhoja"
		];
	}

	static viewFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"movil", 
			"idhoja"
		];
	}

	static exportViewFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"movil", 
			"idhoja"
		];
	}

	static editFields(): string[]{
		return [
			"fnacimiento", 
			"nacionalidad", 
			"ciudad", 
			"telefono", 
			"movil", 
			"correo", 
			"direccion", 
			"estcivil", 
			"genero", 
			"militar", 
			"fotografia", 
			"idhoja"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nacionalidad iLIKE :search", 
			"ciudad iLIKE :search", 
			"correo iLIKE :search", 
			"direccion iLIKE :search", 
			"estcivil iLIKE :search", 
			"genero iLIKE :search", 
			"militar iLIKE :search", 
			"fotografia iLIKE :search", 
			"codgestion iLIKE :search", 
			"archivo iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


