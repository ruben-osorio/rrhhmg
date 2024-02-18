<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Permisos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpermisos" v-model.trim="formData.permisos"  label="Permisos" type="text" placeholder="Escribir Permisos"      
                                                    class="" :error="isFieldValid('permisos')" :error-message="getFieldError('permisos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    User Role Id 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'user_role_id')"  api-path="components_data/role_id_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrluser_role_id" emit-value map-options  v-model="formData.user_role_id" :options="req.response" label="User Role Id"  :error="isFieldValid('user_role_id')" :error-message="getFieldError('user_role_id')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Jsonunidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrljsonunidad" v-model.trim="formData.jsonunidad"  label="Jsonunidad" type="text" placeholder="Escribir Jsonunidad"      
                                                    class="" :error="isFieldValid('jsonunidad')" :error-message="getFieldError('jsonunidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Apmaterno 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlapmaterno" v-model.trim="formData.apmaterno"  label="Apmaterno" type="text" placeholder="Escribir Apmaterno"      
                                                    class="" :error="isFieldValid('apmaterno')" :error-message="getFieldError('apmaterno')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Usuario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlusuario" v-model.trim="formData.usuario"  label="Usuario" type="text" placeholder="Escribir Usuario"      
                                                    class="" :error="isFieldValid('usuario')" :error-message="getFieldError('usuario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Foto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfoto" v-model.trim="formData.foto"  label="Foto" type="text" placeholder="Escribir Foto"      
                                                    class="" :error="isFieldValid('foto')" :error-message="getFieldError('foto')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telefono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefono" v-model.trim="formData.telefono"  label="Telefono" type="text" placeholder="Escribir Telefono"      
                                                    class="" :error="isFieldValid('telefono')" :error-message="getFieldError('telefono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Carnet 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcarnet" v-model.trim="formData.carnet"  label="Carnet" type="text" placeholder="Escribir Carnet"      
                                                    class="" :error="isFieldValid('carnet')" :error-message="getFieldError('carnet')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Expedido 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlexpedido" v-model.trim="formData.expedido"  label="Expedido" type="text" placeholder="Escribir Expedido"      
                                                    class="" :error="isFieldValid('expedido')" :error-message="getFieldError('expedido')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Appaterno 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlappaterno" v-model.trim="formData.appaterno"  label="Appaterno" type="text" placeholder="Escribir Appaterno"      
                                                    class="" :error="isFieldValid('appaterno')" :error-message="getFieldError('appaterno')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Gestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_gestion" v-model.trim="formData.libreta_militar_gestion"  label="Libreta Militar Gestion" type="number" placeholder="Escribir Libreta Militar Gestion"   step="any"    
                                                    class="" :error="isFieldValid('libreta_militar_gestion')" :error-message="getFieldError('libreta_militar_gestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Nacimiento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_nacimiento" v-model="formData.fecha_nacimiento" label="Fecha Nacimiento"    :error="isFieldValid('fecha_nacimiento')" :error-message="getFieldError('fecha_nacimiento')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_nacimiento" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_nacimiento" @input="$refs.ctrlfecha_nacimiento.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci" v-model.trim="formData.ci"  label="Ci" type="number" placeholder="Escribir Ci"   step="any"    
                                                    class="" :error="isFieldValid('ci')" :error-message="getFieldError('ci')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre1 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombre1" v-model.trim="formData.nombre1"  label="Nombre1" type="text" placeholder="Escribir Nombre1"      
                                                    class="" :error="isFieldValid('nombre1')" :error-message="getFieldError('nombre1')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre2 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombre2" v-model.trim="formData.nombre2"  label="Nombre2" type="text" placeholder="Escribir Nombre2"      
                                                    class="" :error="isFieldValid('nombre2')" :error-message="getFieldError('nombre2')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci Ext 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci_ext" v-model.trim="formData.ci_ext"  label="Ci Ext" type="text" placeholder="Escribir Ci Ext"      
                                                    class="" :error="isFieldValid('ci_ext')" :error-message="getFieldError('ci_ext')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci Alf 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci_alf" v-model.trim="formData.ci_alf"  label="Ci Alf" type="text" placeholder="Escribir Ci Alf"      
                                                    class="" :error="isFieldValid('ci_alf')" :error-message="getFieldError('ci_alf')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Genero 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgenero" v-model.trim="formData.genero"  label="Genero" type="text" placeholder="Escribir Genero"      
                                                    class="" :error="isFieldValid('genero')" :error-message="getFieldError('genero')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Afp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlafp" v-model.trim="formData.afp"  label="Afp" type="text" placeholder="Escribir Afp"      
                                                    class="" :error="isFieldValid('afp')" :error-message="getFieldError('afp')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Grupo Sanguineo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgrupo_sanguineo" v-model.trim="formData.grupo_sanguineo"  label="Grupo Sanguineo" type="text" placeholder="Escribir Grupo Sanguineo"      
                                                    class="" :error="isFieldValid('grupo_sanguineo')" :error-message="getFieldError('grupo_sanguineo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Direccion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldireccion" v-model.trim="formData.direccion"  label="Direccion" type="text" placeholder="Escribir Direccion"      
                                                    class="" :error="isFieldValid('direccion')" :error-message="getFieldError('direccion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Licencia Conducir Nro 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllicencia_conducir_nro" v-model.trim="formData.licencia_conducir_nro"  label="Licencia Conducir Nro" type="text" placeholder="Escribir Licencia Conducir Nro"      
                                                    class="" :error="isFieldValid('licencia_conducir_nro')" :error-message="getFieldError('licencia_conducir_nro')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Licencia Conducir Cat 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllicencia_conducir_cat" v-model.trim="formData.licencia_conducir_cat"  label="Licencia Conducir Cat" type="text" placeholder="Escribir Licencia Conducir Cat"      
                                                    class="" :error="isFieldValid('licencia_conducir_cat')" :error-message="getFieldError('licencia_conducir_cat')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nit 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnit" v-model.trim="formData.nit"  label="Nit" type="text" placeholder="Escribir Nit"      
                                                    class="" :error="isFieldValid('nit')" :error-message="getFieldError('nit')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Nro 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_nro" v-model.trim="formData.libreta_militar_nro"  label="Libreta Militar Nro" type="text" placeholder="Escribir Libreta Militar Nro"      
                                                    class="" :error="isFieldValid('libreta_militar_nro')" :error-message="getFieldError('libreta_militar_nro')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Matricula 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmatricula" v-model.trim="formData.matricula"  label="Matricula" type="text" placeholder="Escribir Matricula"      
                                                    class="" :error="isFieldValid('matricula')" :error-message="getFieldError('matricula')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Tipo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_tipo" v-model.trim="formData.libreta_militar_tipo"  label="Libreta Militar Tipo" type="text" placeholder="Escribir Libreta Militar Tipo"      
                                                    class="" :error="isFieldValid('libreta_militar_tipo')" :error-message="getFieldError('libreta_militar_tipo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Numero Referencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnumero_referencia" v-model.trim="formData.numero_referencia"  label="Numero Referencia" type="text" placeholder="Escribir Numero Referencia"      
                                                    class="" :error="isFieldValid('numero_referencia')" :error-message="getFieldError('numero_referencia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Detalle Referencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldetalle_referencia" v-model.trim="formData.detalle_referencia"  label="Detalle Referencia" type="text" placeholder="Escribir Detalle Referencia"      
                                                    class="" :error="isFieldValid('detalle_referencia')" :error-message="getFieldError('detalle_referencia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodgestion" v-model.trim="formData.codgestion"  label="Codgestion" type="text" placeholder="Escribir Codgestion"      
                                                    class="" :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Account Status 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaccount_status" v-model.trim="formData.account_status"  label="Account Status" type="text" placeholder="Escribir Account Status"      
                                                    class="" :error="isFieldValid('account_status')" :error-message="getFieldError('account_status')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Cargando..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'users',
		},
		routeName: {
			type: String,
			default: 'usersaccountedit',
		},
		pagePath: {
			type : String,
			default : 'account/edit',
		},
		apiPath: {
			type: String,
			default: 'account/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Grabar",
		},
		msgTitle: {
			type: String,
			default: "Actualizar registro",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Registro actualizado con éxito",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		permisos: "", 
		user_role_id: "", 
		jsonunidad: "", 
		apmaterno: "", 
		usuario: "", 
		foto: "", 
		telefono: "", 
		carnet: "", 
		expedido: "", 
		appaterno: "", 
		libreta_militar_gestion: "", 
		fecha_nacimiento: new Date(), 
		ci: "", 
		nombre1: "", 
		nombre2: "", 
		ci_ext: "", 
		ci_alf: "", 
		genero: "", 
		afp: "", 
		grupo_sanguineo: "", 
		direccion: "", 
		licencia_conducir_nro: "", 
		licencia_conducir_cat: "", 
		nit: "", 
		libreta_militar_nro: "", 
		matricula: "", 
		libreta_militar_tipo: "", 
		numero_referencia: "", 
		detalle_referencia: "", 
		codgestion: "", 
		account_status: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		location.reload();
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			user_role_id: { numeric },
		libreta_militar_gestion: { numeric },
		ci: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Mi cuenta"
		}
	});
	onMounted(()=>{
		load();
	});
</script>
<style scoped>
</style>
