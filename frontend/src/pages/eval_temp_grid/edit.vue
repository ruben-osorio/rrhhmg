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
	import { required, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'eval_temp_grid',
		},
		routeName: {
			type: String,
			default: 'eval_temp_gridedit',
		},
		pagePath: {
			type : String,
			default : 'eval_temp_grid/edit',
		},
		apiPath: {
			type: String,
			default: 'eval_temp_grid/edit',
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
		codusuario: "", 
		idref: "", 
		ultimo_secund_perfil: "", 
		estadof1: "", 
		ultimo_universit_perfil: "", 
		estadof2: "", 
		postgrado_perfil: "", 
		estadof3: "", 
		denominacion: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/eval_temp_grid`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
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
