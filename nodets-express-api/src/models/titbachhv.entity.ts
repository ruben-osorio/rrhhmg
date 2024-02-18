
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'titbachhv', schema: 'public' })
export default class Titbachhv extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("titbachhv");
	}
	
	@PrimaryGeneratedColumn({name: 'idtitbach'})
	idtitbach: number

	@Column({name: 'tiene' })
	tiene: string
	
	
	
	static listFields(): string[]{
		return [
			"idtitbach", 
			"tiene"
		];
	}

	static exportListFields(): string[]{
		return [
			"idtitbach", 
			"tiene"
		];
	}

	static viewFields(): string[]{
		return [
			"idtitbach", 
			"tiene"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idtitbach", 
			"tiene"
		];
	}

	static editFields(): string[]{
		return [
			"idtitbach", 
			"tiene"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"tiene iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


