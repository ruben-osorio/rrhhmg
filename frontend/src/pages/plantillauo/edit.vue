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
                                        <div class="col-md-12 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombreuo" v-model.trim="formData.nombreuo"  label="Nombre" type="text" placeholder="Escribir Nombre"      
                                                    class="" :error="isFieldValid('nombreuo')" :error-message="getFieldError('nombreuo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Prefijo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlprefijosoa" v-model.trim="formData.prefijosoa"  label="Prefijo" type="text" placeholder="Escribir Prefijo"      
                                                    class="" :error="isFieldValid('prefijosoa')" :error-message="getFieldError('prefijosoa')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    M 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn1" v-model.trim="formData.codn1" mask="#" :unmasked-value="true" :fill-mask="true" label="M" type="text" placeholder="M"      
                                                    class="" :error="isFieldValid('codn1')" :error-message="getFieldError('codn1')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    VM 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn2" v-model.trim="formData.codn2" mask="#" :unmasked-value="true" :fill-mask="true" label="VM" type="text" placeholder="VM"      
                                                    class="" :error="isFieldValid('codn2')" :error-message="getFieldError('codn2')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    DG 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn3" v-model.trim="formData.codn3" mask="#" :unmasked-value="true" :fill-mask="true" label="DG" type="text" placeholder="JG"      
                                                    class="" :error="isFieldValid('codn3')" :error-message="getFieldError('codn3')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    J 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn4" v-model.trim="formData.codn4" mask="#" :unmasked-value="true" :fill-mask="true" label="J" type="text" placeholder="J"      
                                                    class="" :error="isFieldValid('codn4')" :error-message="getFieldError('codn4')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    A1 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn5" v-model.trim="formData.codn5" mask="#" :unmasked-value="true" :fill-mask="true" label="A1" type="text" placeholder="A1"      
                                                    class="" :error="isFieldValid('codn5')" :error-message="getFieldError('codn5')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    A2 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodn6" v-model.trim="formData.codn6" mask="#" :unmasked-value="true" :fill-mask="true" label="A2" type="text" placeholder="A2"      
                                                    class="" :error="isFieldValid('codn6')" :error-message="getFieldError('codn6')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Clasificacion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-select       ref="ctrlclasificacionuo" emit-value map-options  v-model="formData.clasificacionuo" :options="app.menus.clasificacionuoItems" label="Clasificacion"  :error="isFieldValid('clasificacionuo')" :error-message="getFieldError('clasificacionuo')">
                                                    </q-select> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
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
                                                    Soa Nombre 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlsoa_nombre" v-model.trim="formData.soa_nombre"  label="Soa Nombre" type="text" placeholder="Escribir Soa Nombre"      
                                                    class="" :error="isFieldValid('soa_nombre')" :error-message="getFieldError('soa_nombre')">
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
	import { required, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'plantillauo',
		},
		routeName: {
			type: String,
			default: 'plantillauoedit',
		},
		pagePath: {
			type : String,
			default : 'plantillauo/edit',
		},
		apiPath: {
			type: String,
			default: 'plantillauo/edit',
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
		nombreuo: "", 
		prefijosoa: "MG-SOA-", 
		codn1: "", 
		codn2: "", 
		codn3: "", 
		codn4: "", 
		codn5: "", 
		codn6: "", 
		clasificacionuo: "", 
		sigla: "", 
		soa_nombre: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/plantillauo`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nombreuo: { required }
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
