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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fuente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'fuente')"  api-path="components_data/fuente_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlfuente" emit-value map-options  v-model="formData.fuente" :options="req.response" label="Fuente"  :error="isFieldValid('fuente')" :error-message="getFieldError('fuente')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.nivel = ''" :load-on-mount="false" :api-path="`components_data/nivel_option_list_2?lookup_fuente=${formData.fuente}`"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlnivel" emit-value map-options  v-model="formData.nivel" :options="req.response" label="Nivel"  :error="isFieldValid('nivel')" :error-message="getFieldError('nivel')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haber Basico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'haber_basico')"  api-path="components_data/haber_basico_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlhaber_basico" emit-value map-options  v-model="formData.haber_basico" :options="req.response" label="Haber Basico"  :error="isFieldValid('haber_basico')" :error-message="getFieldError('haber_basico')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Descrip Puesto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldescrip_puesto" v-model.trim="formData.descrip_puesto"  label="Descrip Puesto" type="text" placeholder="Escribir Descrip Puesto"      
                                                    class="" :error="isFieldValid('descrip_puesto')" :error-message="getFieldError('descrip_puesto')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Unidad Organiz 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlunidad_organiz" v-model.trim="formData.unidad_organiz"  label="Unidad Organiz" type="text" placeholder="Escribir Unidad Organiz"    readonly  
                                                    class="" :error="isFieldValid('unidad_organiz')" :error-message="getFieldError('unidad_organiz')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clasificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlclasificacion" v-model.trim="formData.clasificacion"  label="Clasificacion" type="text" placeholder="Escribir Clasificacion"      
                                                    class="" :error="isFieldValid('clasificacion')" :error-message="getFieldError('clasificacion')">
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
                                                    Denominacion Cargo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldenominacion_cargo" v-model.trim="formData.denominacion_cargo"  label="Denominacion Cargo" type="text" placeholder="Escribir Denominacion Cargo"      
                                                    class="" :error="isFieldValid('denominacion_cargo')" :error-message="getFieldError('denominacion_cargo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Numero Item 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnumero_item" v-model.trim="formData.numero_item"  label="Numero Item" type="number" placeholder="Escribir Numero Item"   step="any"    
                                                    class="" :error="isFieldValid('numero_item')" :error-message="getFieldError('numero_item')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Den1 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlden1" v-model.trim="formData.den1"  label="Den1" type="text" placeholder="Escribir Den1"      
                                                    class="" :error="isFieldValid('den1')" :error-message="getFieldError('den1')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Den2 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlden2" v-model.trim="formData.den2"  label="Den2" type="text" placeholder="Escribir Den2"      
                                                    class="" :error="isFieldValid('den2')" :error-message="getFieldError('den2')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Den3 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlden3" v-model.trim="formData.den3"  label="Den3" type="text" placeholder="Escribir Den3"      
                                                    class="" :error="isFieldValid('den3')" :error-message="getFieldError('den3')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Den4 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlden4" v-model.trim="formData.den4"  label="Den4" type="text" placeholder="Escribir Den4"      
                                                    class="" :error="isFieldValid('den4')" :error-message="getFieldError('den4')">
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
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'planilla_presupuestaria',
		},
		routeName : {
			type : String,
			default : 'planilla_presupuestariaadd',
		},
		apiPath : {
			type : String,
			default : 'planilla_presupuestaria/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Guardar",
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
		fuente: "", 
		nivel: "", 
		haber_basico: "", 
		descrip_puesto: "", 
		unidad_organiz: "", 
		clasificacion: "", 
		codgestion: "", 
		denominacion_cargo: "", 
		numero_item: "", 
		den1: "", 
		den2: "", 
		den3: "", 
		den4: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			fuente: { numeric },
		nivel: { numeric },
		numero_item: { numeric }
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
			app.navigateTo(`/planilla_presupuestaria`);
		}
	}
	
	const {  saving, pageReady,   } = toRefs(page.state);
	
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Agregar nuevo"
		}
	});
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
