
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'parentesco', schema: 'public' })
export default class Parentesco extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("parentesco");
	}
	
	@PrimaryGeneratedColumn({name: 'idparentesco'})
	idparentesco: number

	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'fechanacimiento' })
	fechanacimiento: string
	
	@Column({name: 'genero' })
	genero: string
	
	@Column({name: 'nacionalidad' })
	nacionalidad: string
	
	@Column({name: 'nrodocumento' })
	nrodocumento: string
	
	
	
	static listFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario", 
			"fechanacimiento", 
			"genero", 
			"nacionalidad", 
			"nrodocumento"
		];
	}

	static exportListFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario", 
			"fechanacimiento", 
			"genero", 
			"nacionalidad", 
			"nrodocumento"
		];
	}

	static viewFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario", 
			"fechanacimiento", 
			"genero", 
			"nacionalidad", 
			"nrodocumento"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario", 
			"fechanacimiento", 
			"genero", 
			"nacionalidad", 
			"nrodocumento"
		];
	}

	static editFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario", 
			"fechanacimiento", 
			"genero", 
			"nacionalidad", 
			"nrodocumento"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"detalle iLIKE :search", 
			"codusuario iLIKE :search", 
			"genero iLIKE :search", 
			"nacionalidad iLIKE :search", 
			"nrodocumento iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


