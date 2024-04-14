
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'eval_temp_grid', schema: 'public' })
export default class Eval_Temp_Grid extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("eval_temp_grid");
	}
	
	@PrimaryGeneratedColumn({name: 'id_eval_tem'})
	id_eval_tem: number

	@Column({name: 'exp_gral_postulante_a' })
	exp_gral_postulante_a: number
	
	@Column({name: 'exp_gral_postulante_m' })
	exp_gral_postulante_m: number
	
	@Column({name: 'exp_gral_postulante_d' })
	exp_gral_postulante_d: number
	
	@Column({name: 'exp_gral_postulante_total' })
	exp_gral_postulante_total: number
	
	@Column({name: 'exp_gral_perfil_a' })
	exp_gral_perfil_a: number
	
	@Column({name: 'exp_gral_perfil_m' })
	exp_gral_perfil_m: number
	
	@Column({name: 'exp_gral_perfil_d' })
	exp_gral_perfil_d: number
	
	@Column({name: 'exp_especifica_postulante_a' })
	exp_especifica_postulante_a: number
	
	@Column({name: 'exp_especifica_postulante_m' })
	exp_especifica_postulante_m: number
	
	@Column({name: 'exp_especifica_postulante_d' })
	exp_especifica_postulante_d: number
	
	@Column({name: 'exp_especifica_postulante_total' })
	exp_especifica_postulante_total: number
	
	@Column({name: 'exp_esp_perfil_a' })
	exp_esp_perfil_a: number
	
	@Column({name: 'exp_esp_perfil_m' })
	exp_esp_perfil_m: number
	
	@Column({name: 'exp_esp_perfil_d' })
	exp_esp_perfil_d: number
	
	@Column({name: 'cumple' })
	cumple: string
	
	@Column({name: 'nocumple' })
	nocumple: string
	
	@Column({name: 'exp_especifica_postulante' })
	exp_especifica_postulante: string
	
	@Column({name: 'exp_gral_perfil' })
	exp_gral_perfil: string
	
	@Column({name: 'ultimo_secund_postulante' })
	ultimo_secund_postulante: string
	
	@Column({name: 'titulo_bach_postulante' })
	titulo_bach_postulante: string
	
	@Column({name: 'ultimo_universit_postulante' })
	ultimo_universit_postulante: string
	
	@Column({name: 'titulo_prof_postulante' })
	titulo_prof_postulante: string
	
	@Column({name: 'postgrado_postulante' })
	postgrado_postulante: string
	
	@Column({name: 'titulo_posgrado_postulante' })
	titulo_posgrado_postulante: string
	
	@Column({name: 'ultimo_secund_perfil' })
	ultimo_secund_perfil: string
	
	@Column({name: 'titulo_bach_perfil' })
	titulo_bach_perfil: string
	
	@Column({name: 'ultimo_universit_perfil' })
	ultimo_universit_perfil: string
	
	@Column({name: 'titulo_prof_perfil' })
	titulo_prof_perfil: string
	
	@Column({name: 'postgrado_perfil' })
	postgrado_perfil: string
	
	@Column({name: 'titulo_posgrado_perfil' })
	titulo_posgrado_perfil: string
	
	@Column({name: 'exp_gral_postulante' })
	exp_gral_postulante: string
	
	@Column({name: 'observaciones' })
	observaciones: string
	
	@Column({name: 'codusuario' })
	codusuario: number
	
	@Column({name: 'estadof3' })
	estadof3: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'estadof1' })
	estadof1: string
	
	@Column({name: 'estadof2' })
	estadof2: string
	
	@Column({name: 'idref' })
	idref: number
	
	
	
	static listFields(): string[]{
		return [
			"codusuario", 
			"idref", 
			"ultimo_secund_perfil", 
			"ultimo_universit_perfil", 
			"postgrado_perfil", 
			"denominacion", 
			"estadof1", 
			"estadof2", 
			"estadof3", 
			"id_eval_tem"
		];
	}

	static exportListFields(): string[]{
		return [
			"codusuario", 
			"idref", 
			"ultimo_secund_perfil", 
			"ultimo_universit_perfil", 
			"postgrado_perfil", 
			"denominacion", 
			"estadof1", 
			"estadof2", 
			"estadof3", 
			"id_eval_tem"
		];
	}

	static viewFields(): string[]{
		return [
			"id_eval_tem", 
			"exp_gral_postulante_a", 
			"exp_gral_postulante_m", 
			"exp_gral_postulante_d", 
			"exp_gral_postulante_total", 
			"exp_gral_perfil_a", 
			"exp_gral_perfil_m", 
			"exp_gral_perfil_d", 
			"exp_especifica_postulante_a", 
			"exp_especifica_postulante_m", 
			"exp_especifica_postulante_d", 
			"exp_especifica_postulante_total", 
			"exp_esp_perfil_a", 
			"exp_esp_perfil_m", 
			"exp_esp_perfil_d", 
			"cumple", 
			"nocumple", 
			"exp_especifica_postulante", 
			"exp_gral_perfil", 
			"ultimo_secund_postulante", 
			"titulo_bach_postulante", 
			"ultimo_universit_postulante", 
			"titulo_prof_postulante", 
			"postgrado_postulante", 
			"titulo_posgrado_postulante", 
			"ultimo_secund_perfil", 
			"titulo_bach_perfil", 
			"ultimo_universit_perfil", 
			"titulo_prof_perfil", 
			"postgrado_perfil", 
			"titulo_posgrado_perfil", 
			"exp_gral_postulante", 
			"observaciones", 
			"codusuario", 
			"estadof3", 
			"denominacion", 
			"estadof1", 
			"estadof2", 
			"idref"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_eval_tem", 
			"exp_gral_postulante_a", 
			"exp_gral_postulante_m", 
			"exp_gral_postulante_d", 
			"exp_gral_postulante_total", 
			"exp_gral_perfil_a", 
			"exp_gral_perfil_m", 
			"exp_gral_perfil_d", 
			"exp_especifica_postulante_a", 
			"exp_especifica_postulante_m", 
			"exp_especifica_postulante_d", 
			"exp_especifica_postulante_total", 
			"exp_esp_perfil_a", 
			"exp_esp_perfil_m", 
			"exp_esp_perfil_d", 
			"cumple", 
			"nocumple", 
			"exp_especifica_postulante", 
			"exp_gral_perfil", 
			"ultimo_secund_postulante", 
			"titulo_bach_postulante", 
			"ultimo_universit_postulante", 
			"titulo_prof_postulante", 
			"postgrado_postulante", 
			"titulo_posgrado_postulante", 
			"ultimo_secund_perfil", 
			"titulo_bach_perfil", 
			"ultimo_universit_perfil", 
			"titulo_prof_perfil", 
			"postgrado_perfil", 
			"titulo_posgrado_perfil", 
			"exp_gral_postulante", 
			"observaciones", 
			"codusuario", 
			"estadof3", 
			"denominacion", 
			"estadof1", 
			"estadof2", 
			"idref"
		];
	}

	static editFields(): string[]{
		return [
			"codusuario", 
			"idref", 
			"ultimo_secund_perfil", 
			"estadof1", 
			"ultimo_universit_perfil", 
			"estadof2", 
			"postgrado_perfil", 
			"estadof3", 
			"denominacion", 
			"id_eval_tem"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"ultimo_secund_perfil iLIKE :search", 
			"ultimo_universit_perfil iLIKE :search", 
			"postgrado_perfil iLIKE :search", 
			"denominacion iLIKE :search", 
			"estadof1 iLIKE :search", 
			"estadof2 iLIKE :search", 
			"estadof3 iLIKE :search", 
			"cumple iLIKE :search", 
			"titulo_posgrado_perfil iLIKE :search", 
			"nocumple iLIKE :search", 
			"exp_especifica_postulante iLIKE :search", 
			"exp_gral_perfil iLIKE :search", 
			"ultimo_secund_postulante iLIKE :search", 
			"titulo_bach_postulante iLIKE :search", 
			"ultimo_universit_postulante iLIKE :search", 
			"titulo_prof_postulante iLIKE :search", 
			"postgrado_postulante iLIKE :search", 
			"titulo_posgrado_postulante iLIKE :search", 
			"titulo_bach_perfil iLIKE :search", 
			"titulo_prof_perfil iLIKE :search", 
			"exp_gral_postulante iLIKE :search", 
			"observaciones iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


