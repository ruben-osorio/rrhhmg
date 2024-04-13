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
                                    Editar
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
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-md-2 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'nivelref')"  api-path="components_data/nivelref_option_list"  v-slot="req">
                                                        <q-select @update:model-value="(val)=>nivelrefAutofill(val)"   :loading="req.loading"   ref="ctrlnivelref" emit-value map-options  v-model="formData.nivelref" :options="req.response" label="Nivel"  :error="isFieldValid('nivelref')" :error-message="getFieldError('nivelref')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominación 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.denomref = ''" :load-on-mount="false" :api-path="`components_data/denomref_option_list?lookup_nivelref=${formData.nivelref}`"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrldenomref" emit-value map-options  v-model="formData.denomref" :options="req.response" label="Denominación"  :error="isFieldValid('denomref')" :error-message="getFieldError('denomref')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haberbásico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaberbasicoref" v-model.trim="formData.haberbasicoref"  label="Haberbásico" type="number" placeholder="Escribir Haberbásico"   step="0.1"    
                                                    class="" :error="isFieldValid('haberbasicoref')" :error-message="getFieldError('haberbasicoref')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Formación Académica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlformacadref" v-model.trim="formData.formacadref"  label="Formación Académica" type="text" placeholder="Escribir Formación Académica"      
                                                    class="" :error="isFieldValid('formacadref')" :error-message="getFieldError('formacadref')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Año 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlanioelg" v-model.trim="formData.anioelg"  label="Año" type="number" placeholder="Escribir Año"   step="any"    
                                                    class="" :error="isFieldValid('anioelg')" :error-message="getFieldError('anioelg')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mes 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmeselg" v-model.trim="formData.meselg"  label="Mes" type="number" placeholder="Escribir Mes"   step="any"    
                                                    class="" :error="isFieldValid('meselg')" :error-message="getFieldError('meselg')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Observación 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlobselg" v-model.trim="formData.obselg"  label="Observación" type="text" placeholder="Escribir Observación"      
                                                    class="" :error="isFieldValid('obselg')" :error-message="getFieldError('obselg')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Año 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlanioele" v-model.trim="formData.anioele"  label="Año" type="number" placeholder="Escribir Año"   step="any"    
                                                    class="" :error="isFieldValid('anioele')" :error-message="getFieldError('anioele')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mes 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmesele" v-model.trim="formData.mesele"  label="Mes" type="number" placeholder="Escribir Mes"   step="any"    
                                                    class="" :error="isFieldValid('mesele')" :error-message="getFieldError('mesele')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Observación 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlobsele" v-model.trim="formData.obsele"  label="Observación" type="text" placeholder="Escribir Observación"      
                                                    class="" :error="isFieldValid('obsele')" :error-message="getFieldError('obsele')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlcodgestion"  ref="ctrlcodgestion" v-model="formData.codgestion" type="hidden" />
                                        <input name="ctrlidref"  ref="ctrlidref" v-model="formData.idref" type="hidden" />
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
			default: 'perfilreferencial',
		},
		routeName: {
			type: String,
			default: 'perfilreferencialedit',
		},
		pagePath: {
			type : String,
			default : 'perfilreferencial/edit',
		},
		apiPath: {
			type: String,
			default: 'perfilreferencial/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Actualizar",
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
		nivelref: "", 
		denomref: "", 
		haberbasicoref: "", 
		formacadref: "", 
		anioelg: "", 
		meselg: "", 
		obselg: "", 
		anioele: "", 
		mesele: "", 
		obsele: "", 
		codgestion: "", 
		idref: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/perfilreferencial`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nivelref: { numeric },
		haberbasicoref: { numeric },
		anioelg: { numeric },
		meselg: { numeric },
		anioele: { numeric },
		mesele: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Editar"
		}
	});
	onMounted(()=>{
		load();
	});
</script>
<style scoped>
</style>
