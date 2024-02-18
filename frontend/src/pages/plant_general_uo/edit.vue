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
                                                    Idpuo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlidpuo" v-model.trim="formData.idpuo"  label="Idpuo" type="number" placeholder="Escribir Idpuo"   step="any"    
                                                    class="" :error="isFieldValid('idpuo')" :error-message="getFieldError('idpuo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn1 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn1" v-model.trim="formData.codn1"  label="Codn1" type="number" placeholder="Escribir Codn1"   step="any"    
                                                    class="" :error="isFieldValid('codn1')" :error-message="getFieldError('codn1')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn2 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn2" v-model.trim="formData.codn2"  label="Codn2" type="number" placeholder="Escribir Codn2"   step="any"    
                                                    class="" :error="isFieldValid('codn2')" :error-message="getFieldError('codn2')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn3 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn3" v-model.trim="formData.codn3"  label="Codn3" type="number" placeholder="Escribir Codn3"   step="any"    
                                                    class="" :error="isFieldValid('codn3')" :error-message="getFieldError('codn3')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn4 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn4" v-model.trim="formData.codn4"  label="Codn4" type="number" placeholder="Escribir Codn4"   step="any"    
                                                    class="" :error="isFieldValid('codn4')" :error-message="getFieldError('codn4')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn5 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn5" v-model.trim="formData.codn5"  label="Codn5" type="number" placeholder="Escribir Codn5"   step="any"    
                                                    class="" :error="isFieldValid('codn5')" :error-message="getFieldError('codn5')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codn6 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn6" v-model.trim="formData.codn6"  label="Codn6" type="number" placeholder="Escribir Codn6"   step="any"    
                                                    class="" :error="isFieldValid('codn6')" :error-message="getFieldError('codn6')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Sigla 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsigla" v-model.trim="formData.sigla"  label="Sigla" type="text" placeholder="Escribir Sigla"      
                                                    class="" :error="isFieldValid('sigla')" :error-message="getFieldError('sigla')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Prefijosoa 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlprefijosoa" v-model.trim="formData.prefijosoa"  label="Prefijosoa" type="text" placeholder="Escribir Prefijosoa"      
                                                    class="" :error="isFieldValid('prefijosoa')" :error-message="getFieldError('prefijosoa')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombreuo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombreuo" v-model.trim="formData.nombreuo"  label="Nombreuo" type="text" placeholder="Escribir Nombreuo"      
                                                    class="" :error="isFieldValid('nombreuo')" :error-message="getFieldError('nombreuo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clasificacionuo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlclasificacionuo" v-model.trim="formData.clasificacionuo"  label="Clasificacionuo" type="text" placeholder="Escribir Clasificacionuo"      
                                                    class="" :error="isFieldValid('clasificacionuo')" :error-message="getFieldError('clasificacionuo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Dependenciauo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldependenciauo" v-model.trim="formData.dependenciauo"  label="Dependenciauo" type="text" placeholder="Escribir Dependenciauo"      
                                                    class="" :error="isFieldValid('dependenciauo')" :error-message="getFieldError('dependenciauo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Niveluo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlniveluo" v-model.trim="formData.niveluo"  label="Niveluo" type="text" placeholder="Escribir Niveluo"      
                                                    class="" :error="isFieldValid('niveluo')" :error-message="getFieldError('niveluo')">
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
                                                    Nrodependencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnrodependencia" v-model.trim="formData.nrodependencia"  label="Nrodependencia" type="number" placeholder="Escribir Nrodependencia"   step="any"    
                                                    class="" :error="isFieldValid('nrodependencia')" :error-message="getFieldError('nrodependencia')">
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
			default: 'plant_general_uo',
		},
		routeName: {
			type: String,
			default: 'plant_general_uoedit',
		},
		pagePath: {
			type : String,
			default : 'plant_general_uo/edit',
		},
		apiPath: {
			type: String,
			default: 'plant_general_uo/edit',
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
		idpuo: "", 
		codn1: "", 
		codn2: "", 
		codn3: "", 
		codn4: "", 
		codn5: "", 
		codn6: "", 
		sigla: "", 
		prefijosoa: "", 
		nombreuo: "", 
		clasificacionuo: "", 
		dependenciauo: "", 
		niveluo: "", 
		codgestion: "", 
		nrodependencia: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/plant_general_uo`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			idpuo: { required, numeric },
		codn1: { numeric },
		codn2: { numeric },
		codn3: { numeric },
		codn4: { numeric },
		codn5: { numeric },
		codn6: { numeric },
		nrodependencia: { numeric }
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
