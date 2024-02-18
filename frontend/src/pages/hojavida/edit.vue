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
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha de Nacimiento *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfnacimiento" v-model="formData.fnacimiento" label="Fecha de Nacimiento"    :error="isFieldValid('fnacimiento')" :error-message="getFieldError('fnacimiento')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfnacimiento" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fnacimiento" @input="$refs.ctrlfnacimiento.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nacionalidad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnacionalidad" v-model.trim="formData.nacionalidad"  label="Nacionalidad" type="text" placeholder="Escribir Nacionalidad"      
                                                    class="" :error="isFieldValid('nacionalidad')" :error-message="getFieldError('nacionalidad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ciudad 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlciudad" v-model.trim="formData.ciudad"  label="Ciudad" type="text" placeholder="Escribir Ciudad"      
                                                    class="" :error="isFieldValid('ciudad')" :error-message="getFieldError('ciudad')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telefono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefono" v-model.trim="formData.telefono"  label="Telefono" type="tel" placeholder="Escribir Telefono"      
                                                    class="" :error="isFieldValid('telefono')" :error-message="getFieldError('telefono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Movil 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmovil" v-model.trim="formData.movil"  label="Movil" type="tel" placeholder="Escribir Movil"      
                                                    class="" :error="isFieldValid('movil')" :error-message="getFieldError('movil')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Correo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcorreo" v-model.trim="formData.correo"  label="Correo" type="email" placeholder="Escribir Correo"      
                                                    class="" :error="isFieldValid('correo')" :error-message="getFieldError('correo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Direccion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldireccion" v-model.trim="formData.direccion"  label="Direccion" type="text" placeholder="Escribir Direccion"      
                                                    class="" :error="isFieldValid('direccion')" :error-message="getFieldError('direccion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Estado Civil 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlestcivil" v-model.trim="formData.estcivil"  label="Estado Civil" type="text" placeholder="Escribir Estado Civil"   list="estcivil_list"    
                                                    class="" :error="isFieldValid('estcivil')" :error-message="getFieldError('estcivil')">
                                                    </q-input>
                                                    <api-data-source   api-path="components_data/estcivil_option_list"  v-slot="req">
                                                        <datalist id="estcivil_list">
                                                        <option v-for="(menu, index) in req.response" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Genero 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgenero" v-model.trim="formData.genero"  label="Genero" type="text" placeholder="Escribir Genero"   list="genero_list"    
                                                    class="" :error="isFieldValid('genero')" :error-message="getFieldError('genero')">
                                                    </q-input>
                                                    <api-data-source   api-path="components_data/genero_option_list"  v-slot="req">
                                                        <datalist id="genero_list">
                                                        <option v-for="(menu, index) in req.response" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmilitar" v-model.trim="formData.militar"  label="Libreta Militar" type="number" placeholder="Escribir Libreta Militar"   step="any"    
                                                    class="" :error="isFieldValid('militar')" :error-message="getFieldError('militar')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fotografia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input show-uploaded-files :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" delete-icon="clear" style="width:100%" label="Elija archivos o suelte archivos aquí" upload-path="fileuploader/upload/fotografia" v-model="formData.fotografia"  ></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
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
	import { required, email, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'hojavida',
		},
		routeName: {
			type: String,
			default: 'hojavidaedit',
		},
		pagePath: {
			type : String,
			default : 'hojavida/edit',
		},
		apiPath: {
			type: String,
			default: 'hojavida/edit',
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
		fnacimiento: "dd/mm/yy", 
		nacionalidad: "", 
		ciudad: "", 
		telefono: "", 
		movil: "", 
		correo: "", 
		direccion: "", 
		estcivil: "", 
		genero: "", 
		militar: "", 
		fotografia: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/hojavida`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			fnacimiento: { required },
		correo: { required, email },
		militar: { numeric }
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
