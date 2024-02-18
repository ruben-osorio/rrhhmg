<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section q-mb-md" >
                <div class="container-fluid">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-auto comp-grid" >
                        </div>
                        <div  class="col-auto comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <evalist-perfilreferencial-page ref="perfilreferencialListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true">
                                    </evalist-perfilreferencial-page>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                                    Nivelec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlnivelec" emit-value map-options  v-model="formData.nivelec" :options="[]" label="Nivelec"  :error="isFieldValid('nivelec')" :error-message="getFieldError('nivelec')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Denominacionec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldenominacionec" v-model.trim="formData.denominacionec"  label="Denominacionec" type="text" placeholder="Escribir Denominacionec"    readonly  
                                                    class="" :error="isFieldValid('denominacionec')" :error-message="getFieldError('denominacionec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Haberbasicoec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhaberbasicoec" v-model.trim="formData.haberbasicoec"  label="Haberbasicoec" type="number" placeholder="Escribir Haberbasicoec"   step="0.1"    
                                                    class="" :error="isFieldValid('haberbasicoec')" :error-message="getFieldError('haberbasicoec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Formacadec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlformacadec" v-model.trim="formData.formacadec"  label="Formacadec" type="text" placeholder="Escribir Formacadec"      
                                                    class="" :error="isFieldValid('formacadec')" :error-message="getFieldError('formacadec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ageneralec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlageneralec" v-model.trim="formData.ageneralec"  label="Ageneralec" type="number" placeholder="Escribir Ageneralec"   step="any"    
                                                    class="" :error="isFieldValid('ageneralec')" :error-message="getFieldError('ageneralec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mgeneralec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmgeneralec" v-model.trim="formData.mgeneralec"  label="Mgeneralec" type="number" placeholder="Escribir Mgeneralec"   step="any"    
                                                    class="" :error="isFieldValid('mgeneralec')" :error-message="getFieldError('mgeneralec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Aespecificaec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaespecificaec" v-model.trim="formData.aespecificaec"  label="Aespecificaec" type="number" placeholder="Escribir Aespecificaec"   step="any"    
                                                    class="" :error="isFieldValid('aespecificaec')" :error-message="getFieldError('aespecificaec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mespecificaec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmespecificaec" v-model.trim="formData.mespecificaec"  label="Mespecificaec" type="number" placeholder="Escribir Mespecificaec"   step="any"    
                                                    class="" :error="isFieldValid('mespecificaec')" :error-message="getFieldError('mespecificaec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ciec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlciec" v-model.trim="formData.ciec"  label="Ciec" type="number" placeholder="Escribir Ciec"   step="any"    
                                                    class="" :error="isFieldValid('ciec')" :error-message="getFieldError('ciec')">
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
	import evalistPerfilreferencialPage from "../perfilreferencial/evalist.vue";
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'evalcurricular',
		},
		routeName : {
			type : String,
			default : 'evalcurricularadd',
		},
		apiPath : {
			type : String,
			default : 'evalcurricular/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Entregar",
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
		nivelec: "", 
		denominacionec: "", 
		haberbasicoec: "", 
		formacadec: "", 
		ageneralec: "", 
		mgeneralec: "", 
		aespecificaec: "", 
		mespecificaec: "", 
		ciec: "", 
		codgestion: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			haberbasicoec: { numeric },
		ageneralec: { numeric },
		mgeneralec: { numeric },
		aespecificaec: { numeric },
		mespecificaec: { numeric },
		ciec: { numeric }
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
			app.navigateTo(`/evalcurricular`);
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
