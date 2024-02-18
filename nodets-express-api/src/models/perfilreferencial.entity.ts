
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'perfilreferencial', schema: 'public' })
export default class Perfilreferencial extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("perfilreferencial");
	}
	
	@PrimaryGeneratedColumn({name: 'idref'})
	idref: number

	@Column({name: 'nivelref' })
	nivelref: number
	
	@Column({name: 'haberbasicoref' })
	haberbasicoref: number
	
	@Column({name: 'anioelg' })
	anioelg: number
	
	@Column({name: 'meselg' })
	meselg: number
	
	@Column({name: 'anioele' })
	anioele: number
	
	@Column({name: 'mesele' })
	mesele: number
	
	@Column({name: 'denomref' })
	denomref: string
	
	@Column({name: 'obselg' })
	obselg: string
	
	@Column({name: 'formacadref' })
	formacadref: string
	
	@Column({name: 'obsele' })
	obsele: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'especifica' })
	especifica: string
	
	@Column({name: 'general' })
	general: string
	
	
	
	static listFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"meselg", 
			"obselg", 
			"anioele", 
			"mesele", 
			"obsele", 
			"codgestion", 
			"idref", 
			"especifica", 
			"general"
		];
	}

	static exportListFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"meselg", 
			"obselg", 
			"anioele", 
			"mesele", 
			"obsele", 
			"codgestion", 
			"idref", 
			"especifica", 
			"general"
		];
	}

	static viewFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"meselg", 
			"obselg", 
			"anioele", 
			"mesele", 
			"obsele", 
			"idref", 
			"codgestion", 
			"especifica", 
			"general"
		];
	}

	static exportViewFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"meselg", 
			"obselg", 
			"anioele", 
			"mesele", 
			"obsele", 
			"idref", 
			"codgestion", 
			"especifica", 
			"general"
		];
	}

	static editFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"general", 
			"anioelg", 
			"meselg", 
			"obselg", 
			"especifica", 
			"anioele", 
			"mesele", 
			"obsele", 
			"codgestion", 
			"idref"
		];
	}

	static evalistFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"anioele", 
			"idref", 
			"especifica", 
			"general"
		];
	}

	static exportEvalistFields(): string[]{
		return [
			"nivelref", 
			"denomref", 
			"haberbasicoref", 
			"formacadref", 
			"anioelg", 
			"anioele", 
			"idref", 
			"especifica", 
			"general"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"denomref iLIKE :search", 
			"formacadref iLIKE :search", 
			"obselg iLIKE :search", 
			"obsele iLIKE :search", 
			"codgestion iLIKE :search", 
			"especifica iLIKE :search", 
			"general iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


