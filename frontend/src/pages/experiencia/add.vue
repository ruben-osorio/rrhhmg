<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                    Ingresar Experiencia 
                                </q-btn>
                            </div>
                            <div  class="col col-md-auto " >
                                <div class=" text-h6 text-primary" >
                                    Agregar nuevo
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-form ref="observer" @submit.prevent="submitForm()">
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Entidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'entidad')"  api-path="components_data/entidad_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlentidad" emit-value map-options  v-model="formData.entidad" :options="req.response" label="Entidad"  :error="isFieldValid('entidad')" :error-message="getFieldError('entidad')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cargo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.cargo = ''" :load-on-mount="false" :api-path="`components_data/cargo_option_list?lookup_entidad=${formData.entidad}`"  v-slot="req">
                                                        <q-select @update:model-value="(val)=>cargoAutofill(val)"   :loading="req.loading"   ref="ctrlcargo" emit-value map-options  v-model="formData.cargo" :options="req.response" label="Cargo"  :error="isFieldValid('cargo')" :error-message="getFieldError('cargo')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Funciones 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfunciones" v-model.trim="formData.funciones"  label="Funciones" type="text" placeholder="Escribir Funciones"      
                                                    class="" :error="isFieldValid('funciones')" :error-message="getFieldError('funciones')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    F Inicio 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlf_inicio" v-model="formData.f_inicio" label="F Inicio"    :error="isFieldValid('f_inicio')" :error-message="getFieldError('f_inicio')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlf_inicio" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.f_inicio" @input="$refs.ctrlf_inicio.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    F Fin 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlf_fin" v-model="formData.f_fin" label="F Fin"    :error="isFieldValid('f_fin')" :error-message="getFieldError('f_fin')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlf_fin" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.f_fin" @input="$refs.ctrlf_fin.hide()" />
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
                                                    Codhoja 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'codhoja')"  api-path="components_data/codhoja_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlcodhoja" emit-value map-options  v-model="formData.codhoja" :options="req.response" label="Codhoja"  :error="isFieldValid('codhoja')" :error-message="getFieldError('codhoja')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Especifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlespecifica" v-model.trim="formData.especifica"  label="Especifica" type="text" placeholder="Escribir Especifica"      
                                                    class="" :error="isFieldValid('especifica')" :error-message="getFieldError('especifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codgestion *
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
                                                    Codusuario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodusuario" v-model.trim="formData.codusuario"  label="Codusuario" type="text" placeholder="Escribir Codusuario"      
                                                    class="" :error="isFieldValid('codusuario')" :error-message="getFieldError('codusuario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated    icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                </q-card>
                                </q-form>
                                <slot :submit="submitForm" :saving="saving"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { ApiService } from 'src/services/api';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'experiencia',
		},
		routeName : {
			type : String,
			default : 'experienciaadd',
		},
		apiPath : {
			type : String,
			default : 'experiencia/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Guardare",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
		},
		msgTitle: {
			type: String,
			default: "Crear registro",
		},
		msgAfterSave: {
			type: String,
			default: "Grabar agregado exitosamente",
		},
		msgBeforeSave: {
			type: String,
			default: "",
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
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => {} 
		},
	});
	const store = usePageStore(props.pageName);
	const app = useApp();// application state and methods
	
	const formDefaultValues = {
		entidad: "", 
		cargo: "", 
		funciones: "", 
		f_inicio: new Date(), 
		f_fin: new Date(), 
		codhoja: "", 
		especifica: "", 
		codgestion: "", 
		codusuario: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			codhoja: { numeric },
		codgestion: { required }
		}
	});
	
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });// page form hook
	
	//event raised before form submit
	function beforeSubmit(){
		return true;
	}
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); //reset form data
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/experiencia`);
		}
	}
	
	const {  saving, pageReady,   } = toRefs(page.state);
	
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Agregar Experiencia"
		}
	});
	
	//auto fill other inputs on cargo change
	async function cargoAutofill(val){
		const resp = await ApiService.get(`components_data/experiencia_cargo_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
formData.funciones = data.haberbasico;
		}
	}
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
