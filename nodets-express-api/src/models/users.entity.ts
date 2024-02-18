
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'users', schema: 'public' })
export default class Users extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("users");
	}
	
	@Column({name: 'permisos' })
	permisos: string
	
	@Column({name: 'user_role_id' })
	user_role_id: number
	
	@Column({name: 'jsonunidad' })
	jsonunidad: string
	
	@PrimaryColumn({name: 'id'})
	id: number

	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'usuario' })
	usuario: string
	
	@Column({name: 'password' })
	password: string
	
	@Column({name: 'foto' })
	foto: string
	
	@Column({name: 'email' })
	email: string
	
	@Column({name: 'telefono' })
	telefono: string
	
	@Column({name: 'carnet' })
	carnet: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'libreta_militar_gestion' })
	libreta_militar_gestion: number
	
	@Column({name: 'fecha_nacimiento' })
	fecha_nacimiento: string
	
	@Column({name: 'ci' })
	ci: number
	
	@Column({name: 'nombre1' })
	nombre1: string
	
	@Column({name: 'nombre2' })
	nombre2: string
	
	@Column({name: 'ci_ext' })
	ci_ext: string
	
	@Column({name: 'ci_alf' })
	ci_alf: string
	
	@Column({name: 'genero' })
	genero: string
	
	@Column({name: 'afp' })
	afp: string
	
	@Column({name: 'grupo_sanguineo' })
	grupo_sanguineo: string
	
	@Column({name: 'direccion' })
	direccion: string
	
	@Column({name: 'licencia_conducir_nro' })
	licencia_conducir_nro: string
	
	@Column({name: 'licencia_conducir_cat' })
	licencia_conducir_cat: string
	
	@Column({name: 'nit' })
	nit: string
	
	@Column({name: 'libreta_militar_nro' })
	libreta_militar_nro: string
	
	@Column({name: 'matricula' })
	matricula: string
	
	@Column({name: 'libreta_militar_tipo' })
	libreta_militar_tipo: string
	
	@Column({name: 'numero_referencia' })
	numero_referencia: string
	
	@Column({name: 'detalle_referencia' })
	detalle_referencia: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'account_status' })
	account_status: string
	
	
	
	static listFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static exportListFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static viewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static exportViewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static accounteditFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static accountviewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static exportAccountviewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static editFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"nit", 
			"libreta_militar_nro", 
			"matricula", 
			"libreta_militar_tipo", 
			"numero_referencia", 
			"detalle_referencia", 
			"codgestion", 
			"account_status"
		];
	}

	static lisevalFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"id"
		];
	}

	static exportLisevalFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"libreta_militar_gestion", 
			"fecha_nacimiento", 
			"ci", 
			"nombre1", 
			"nombre2", 
			"ci_ext", 
			"ci_alf", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"licencia_conducir_nro", 
			"licencia_conducir_cat", 
			"id"
		];
	}

	static vhojavidaFields(): string[]{
		return [
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"fecha_nacimiento", 
			"nombre1", 
			"nombre2", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_cat", 
			"codgestion"
		];
	}

	static exportVhojavidaFields(): string[]{
		return [
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno", 
			"fecha_nacimiento", 
			"nombre1", 
			"nombre2", 
			"genero", 
			"afp", 
			"grupo_sanguineo", 
			"direccion", 
			"licencia_conducir_cat", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"apmaterno iLIKE :search", 
			"usuario iLIKE :search", 
			"email iLIKE :search", 
			"telefono iLIKE :search", 
			"carnet iLIKE :search", 
			"expedido iLIKE :search", 
			"appaterno iLIKE :search", 
			"CAST(ci AS TEXT) iLIKE :search", 
			"nombre1 iLIKE :search", 
			"nombre2 iLIKE :search", 
			"ci_ext iLIKE :search", 
			"ci_alf iLIKE :search", 
			"genero iLIKE :search", 
			"afp iLIKE :search", 
			"grupo_sanguineo iLIKE :search", 
			"direccion iLIKE :search", 
			"licencia_conducir_nro iLIKE :search", 
			"licencia_conducir_cat iLIKE :search", 
			"nit iLIKE :search", 
			"libreta_militar_nro iLIKE :search", 
			"matricula iLIKE :search", 
			"libreta_militar_tipo iLIKE :search", 
			"numero_referencia iLIKE :search", 
			"detalle_referencia iLIKE :search", 
			"codgestion iLIKE :search", 
			"account_status iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


declare global {
	namespace Express {
		interface User extends Users {
			roleName: any
		}
	}
}


