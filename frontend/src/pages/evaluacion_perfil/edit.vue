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
                                                    Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlid" v-model.trim="formData.id"  label="Id" type="number" placeholder="Escribir Id"   step="any"    
                                                    class="" :error="isFieldValid('id')" :error-message="getFieldError('id')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Coduser 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcoduser" v-model.trim="formData.coduser"  label="Coduser" type="number" placeholder="Escribir Coduser"   step="any"    
                                                    class="" :error="isFieldValid('coduser')" :error-message="getFieldError('coduser')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Item 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'item')"  api-path="components_data/item_option_list"  v-slot="req">
                                                        <q-select    :loading="req.loading"   ref="ctrlitem" emit-value map-options  v-model="formData.item" :options="req.response" label="Item"  :error="isFieldValid('item')" :error-message="getFieldError('item')">
                                                        </q-select> 
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlcodgestion"  ref="ctrlcodgestion" v-model="formData.codgestion" type="hidden" />
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Idplanillapres 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlidplanillapres" v-model.trim="formData.idplanillapres"  label="Idplanillapres" type="number" placeholder="Escribir Idplanillapres"   step="any"    
                                                    class="" :error="isFieldValid('idplanillapres')" :error-message="getFieldError('idplanillapres')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Formacion Academica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-md">
                                                        <q-btn-toggle  ref="ctrlformacion_academica" v-model="formData.formacion_academica" :options="app.menus.formacion_academicaItems" toggle-color="positive" color="grey-7"     :rounded="false"  no-caps  unelevated    :error="isFieldValid('formacion_academica')" :error-message="getFieldError('formacion_academica')" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Exp Especifica 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlexp_especifica" v-model.trim="formData.exp_especifica"  label="Exp Especifica" type="text" placeholder="Escribir Exp Especifica"      
                                                    class="" :error="isFieldValid('exp_especifica')" :error-message="getFieldError('exp_especifica')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Exp General 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlexp_general" v-model.trim="formData.exp_general"  label="Exp General" type="text" placeholder="Escribir Exp General"      
                                                    class="" :error="isFieldValid('exp_general')" :error-message="getFieldError('exp_general')">
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
			default: 'evaluacion_perfil',
		},
		routeName: {
			type: String,
			default: 'evaluacion_perfiledit',
		},
		pagePath: {
			type : String,
			default : 'evaluacion_perfil/edit',
		},
		apiPath: {
			type: String,
			default: 'evaluacion_perfil/edit',
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
		id: "", 
		coduser: "", 
		item: "", 
		codgestion: "", 
		idplanillapres: "", 
		formacion_academica: "", 
		exp_especifica: "", 
		exp_general: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/evaluacion_perfil`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			id: { required, numeric },
		coduser: { numeric },
		idplanillapres: { numeric }
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
