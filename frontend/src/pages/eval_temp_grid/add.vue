<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section " >
                    <div class="container">
                        <div class="row items-center q-col-gutter-x-md">
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
                    <div class="row q-col-gutter-x-lg">
                        <div  class="col-12 col-lg-12 col-md-12 comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <evalusersv-users-page ref="usersListPage"  :show-header="true" :show-breadcrumbs="true" :show-footer="false" :paginate="false">
                                    </evalusersv-users-page>
                                </div>
                            </div>
                        </div>
                        <div  class="col-12 col-md-12 comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <listeval-planillapresupuestaria-page ref="planillaPresupuestariaListPage"  :show-header="true" :show-breadcrumbs="true" :show-footer="false" :paginate="true">
                                        </listeval-planillapresupuestaria-page>
                                    </div>
                                </div>
                            </div>
                            <div  class="col-6 col-md-6 comp-grid" >
                                <div >
                                    <q-form ref="observer" @submit.prevent="submitForm()">
                                    <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                        <div class="row q-col-gutter-x-md">
                                            <input name="ctrlcodusuario"  ref="ctrlcodusuario" v-model="formData.codusuario" type="hidden" />
                                            <input name="ctrlidref"  ref="ctrlidref" v-model="formData.idref" type="hidden" />
                                            <div class="col-md-8 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Formación 1 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-input   ref="ctrlultimo_secund_perfil" v-model.trim="formData.ultimo_secund_perfil"  label="Formación 1" type="text" placeholder="Escribir Formación 1"      
                                                        class="" :error="isFieldValid('ultimo_secund_perfil')" :error-message="getFieldError('ultimo_secund_perfil')">
                                                        </q-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Cumple 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-field  borderless   :error="isFieldValid('estadof1')" :error-message="getFieldError('estadof1')">
                                                        <q-option-group  ref="ctrlestadof1" v-model="formData.estadof1" :options="app.menus.estadof1Items"  inline size="xs" ></q-option-group>
                                                        </q-field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Formación 2 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-input   ref="ctrlultimo_universit_perfil" v-model.trim="formData.ultimo_universit_perfil"  label="Formación 2" type="text" placeholder="Escribir Formación 2"      
                                                        class="" :error="isFieldValid('ultimo_universit_perfil')" :error-message="getFieldError('ultimo_universit_perfil')">
                                                        </q-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Cumple 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-field  borderless   :error="isFieldValid('estadof2')" :error-message="getFieldError('estadof2')">
                                                        <q-option-group  ref="ctrlestadof2" v-model="formData.estadof2" :options="app.menus.estadof1Items"  inline size="sm" ></q-option-group>
                                                        </q-field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Formación 3 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-input   ref="ctrlpostgrado_perfil" v-model.trim="formData.postgrado_perfil"  label="Formación 3" type="text" placeholder="Escribir Formación 3"      
                                                        class="" :error="isFieldValid('postgrado_perfil')" :error-message="getFieldError('postgrado_perfil')">
                                                        </q-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        Cumple 
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <q-field  borderless   :error="isFieldValid('estadof3')" :error-message="getFieldError('estadof3')">
                                                        <q-option-group  ref="ctrlestadof3" v-model="formData.estadof3" :options="app.menus.estadof1Items"  inline size="xs" ></q-option-group>
                                                        </q-field>
                                                    </div>
                                                </div>
                                            </div>
                                            <input name="ctrldenominacion"  ref="ctrldenominacion" v-model="formData.denominacion" type="hidden" />
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
                <section class="page-section q-mb-md" >
                    <div class="container-fluid">
                        <div class="row q-col-gutter-x-md">
                            <div  class="col-md-12 comp-grid" >
                            </div>
                        </div>
                    </div>
                </section>
            </template>
        </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs } from 'vue';
	import { required, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	import evalusersvUsersPage from "../users/evalusersv.vue";
import listevalPlanillapresupuestariaPage from "../planilla_presupuestaria/listeval.vue";
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'eval_temp_grid',
		},
		routeName : {
			type : String,
			default : 'eval_temp_gridadd',
		},
		apiPath : {
			type : String,
			default : 'eval_temp_grid/add',
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
		codusuario: "", 
		idref: "", 
		ultimo_secund_perfil: "", 
		estadof1: "", 
		ultimo_universit_perfil: "", 
		estadof2: "", 
		postgrado_perfil: "", 
		estadof3: "", 
		denominacion: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
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
			app.navigateTo(`/eval_temp_grid`);
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
