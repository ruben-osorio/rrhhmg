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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nrotitbachiller 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnrotitbachiller" v-model.trim="formData.nrotitbachiller"  label="Nrotitbachiller" type="number" placeholder="Escribir Nrotitbachiller"   step="any"    
                                                    class="" :error="isFieldValid('nrotitbachiller')" :error-message="getFieldError('nrotitbachiller')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Secundaria 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsecundaria" v-model.trim="formData.secundaria"  label="Secundaria" type="text" placeholder="Escribir Secundaria"      
                                                    class="" :error="isFieldValid('secundaria')" :error-message="getFieldError('secundaria')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cicloesc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcicloesc" v-model.trim="formData.cicloesc"  label="Cicloesc" type="text" placeholder="Escribir Cicloesc"      
                                                    class="" :error="isFieldValid('cicloesc')" :error-message="getFieldError('cicloesc')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Titbachiller 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'titbachiller')"  api-path="components_data/titbachiller_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrltitbachiller" emit-value map-options  v-model="formData.titbachiller" :options="req.response" label="Titbachiller"  :error="isFieldValid('titbachiller')" :error-message="getFieldError('titbachiller')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cursoesc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcursoesc" v-model.trim="formData.cursoesc"  label="Cursoesc" type="text" placeholder="Escribir Cursoesc"      
                                                    class="" :error="isFieldValid('cursoesc')" :error-message="getFieldError('cursoesc')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nivelesc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnivelesc" v-model.trim="formData.nivelesc"  label="Nivelesc" type="text" placeholder="Escribir Nivelesc"      
                                                    class="" :error="isFieldValid('nivelesc')" :error-message="getFieldError('nivelesc')">
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
                                                    Institucion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlinstitucion" v-model.trim="formData.institucion"  label="Institucion" type="text" placeholder="Escribir Institucion"      
                                                    class="" :error="isFieldValid('institucion')" :error-message="getFieldError('institucion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Primaria 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlprimaria" v-model.trim="formData.primaria"  label="Primaria" type="text" placeholder="Escribir Primaria"      
                                                    class="" :error="isFieldValid('primaria')" :error-message="getFieldError('primaria')">
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
			default: 'formestudios3',
		},
		routeName: {
			type: String,
			default: 'formestudios3edit',
		},
		pagePath: {
			type : String,
			default : 'formestudios3/edit',
		},
		apiPath: {
			type: String,
			default: 'formestudios3/edit',
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
		nrotitbachiller: "", 
		secundaria: "", 
		cicloesc: "", 
		titbachiller: "", 
		cursoesc: "", 
		nivelesc: "", 
		codusuario: "", 
		codgestion: "", 
		institucion: "", 
		primaria: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/formestudios3`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nrotitbachiller: { numeric }
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
