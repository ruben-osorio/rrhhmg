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
                                                    Usuario *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.usuario" check-path="components_data/users_usuario_exist/" v-slot="checker">
                                                    <q-input   ref="ctrlusuario" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.usuario"  label="Usuario" type="text" placeholder="Escribir Usuario"      
                                                    class="" :error="isFieldValid('usuario') || checker.alreadyExist" :error-message="getFieldError('usuario') || checker.errorMsg">
                                                    </q-input>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpassword" v-model="formData.password"  label="Password" :type="isPwd ? 'password' : 'text'" placeholder="Escribir Password"      
                                                    class="" :error="isFieldValid('password')" :error-message="getFieldError('password')">
                                                    <template v-slot:append>
                                                        <q-icon
                                                        :name="isPwd ? 'visibility_off' : 'visibility'"
                                                        class="cursor-pointer"
                                                        @click="isPwd = !isPwd"
                                                        />
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Confirm Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlconfirmpassword" v-model="formData.confirm_password" :type="isCPwd ? 'password' : 'text'" label="Confirmar contraseña" placeholder="Confirmar contraseña"  :error="isFieldValid('confirm_password')" :error-message="getFieldError('confirm_password')">
                                                    <template v-slot:append>
                                                        <q-icon
                                                        :name="isCPwd ? 'visibility_off' : 'visibility'"
                                                        class="cursor-pointer"
                                                        @click="isCPwd = !isCPwd"
                                                        />
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Foto 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" delete-icon="clear" style="width:100%" label="Elija archivos o suelte archivos aquí" upload-path="fileuploader/upload/foto" v-model="formData.foto"></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.email" check-path="components_data/users_email_exist/" v-slot="checker">
                                                    <q-input   ref="ctrlemail" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.email"  label="Email" type="email" placeholder="Escribir Email"      
                                                    class="" :error="isFieldValid('email') || checker.alreadyExist" :error-message="getFieldError('email') || checker.errorMsg">
                                                    </q-input>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telefono 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefono" v-model.trim="formData.telefono"  label="Telefono" type="text" placeholder="Escribir Telefono"      
                                                    class="" :error="isFieldValid('telefono')" :error-message="getFieldError('telefono')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Gestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_gestion" v-model.trim="formData.libreta_militar_gestion"  label="Libreta Militar Gestion" type="number" placeholder="Escribir Libreta Militar Gestion"   step="any"    
                                                    class="" :error="isFieldValid('libreta_militar_gestion')" :error-message="getFieldError('libreta_militar_gestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Fecha Nacimiento 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfecha_nacimiento" v-model="formData.fecha_nacimiento" label="Fecha Nacimiento"    :error="isFieldValid('fecha_nacimiento')" :error-message="getFieldError('fecha_nacimiento')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfecha_nacimiento" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.fecha_nacimiento" @input="$refs.ctrlfecha_nacimiento.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci" v-model.trim="formData.ci"  label="Ci" type="number" placeholder="Escribir Ci"   step="any"    
                                                    class="" :error="isFieldValid('ci')" :error-message="getFieldError('ci')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre1 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombre1" v-model.trim="formData.nombre1"  label="Nombre1" type="text" placeholder="Escribir Nombre1"      
                                                    class="" :error="isFieldValid('nombre1')" :error-message="getFieldError('nombre1')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nombre2 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnombre2" v-model.trim="formData.nombre2"  label="Nombre2" type="text" placeholder="Escribir Nombre2"      
                                                    class="" :error="isFieldValid('nombre2')" :error-message="getFieldError('nombre2')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci Ext 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci_ext" v-model.trim="formData.ci_ext"  label="Ci Ext" type="text" placeholder="Escribir Ci Ext"      
                                                    class="" :error="isFieldValid('ci_ext')" :error-message="getFieldError('ci_ext')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ci Alf 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlci_alf" v-model.trim="formData.ci_alf"  label="Ci Alf" type="text" placeholder="Escribir Ci Alf"      
                                                    class="" :error="isFieldValid('ci_alf')" :error-message="getFieldError('ci_alf')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Genero 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgenero" v-model.trim="formData.genero"  label="Genero" type="text" placeholder="Escribir Genero"      
                                                    class="" :error="isFieldValid('genero')" :error-message="getFieldError('genero')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Afp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlafp" v-model.trim="formData.afp"  label="Afp" type="text" placeholder="Escribir Afp"      
                                                    class="" :error="isFieldValid('afp')" :error-message="getFieldError('afp')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Grupo Sanguineo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgrupo_sanguineo" v-model.trim="formData.grupo_sanguineo"  label="Grupo Sanguineo" type="text" placeholder="Escribir Grupo Sanguineo"      
                                                    class="" :error="isFieldValid('grupo_sanguineo')" :error-message="getFieldError('grupo_sanguineo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Licencia Conducir Nro 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllicencia_conducir_nro" v-model.trim="formData.licencia_conducir_nro"  label="Licencia Conducir Nro" type="text" placeholder="Escribir Licencia Conducir Nro"      
                                                    class="" :error="isFieldValid('licencia_conducir_nro')" :error-message="getFieldError('licencia_conducir_nro')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Licencia Conducir Cat 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllicencia_conducir_cat" v-model.trim="formData.licencia_conducir_cat"  label="Licencia Conducir Cat" type="text" placeholder="Escribir Licencia Conducir Cat"      
                                                    class="" :error="isFieldValid('licencia_conducir_cat')" :error-message="getFieldError('licencia_conducir_cat')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nit 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnit" v-model.trim="formData.nit"  label="Nit" type="text" placeholder="Escribir Nit"      
                                                    class="" :error="isFieldValid('nit')" :error-message="getFieldError('nit')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Nro 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_nro" v-model.trim="formData.libreta_militar_nro"  label="Libreta Militar Nro" type="text" placeholder="Escribir Libreta Militar Nro"      
                                                    class="" :error="isFieldValid('libreta_militar_nro')" :error-message="getFieldError('libreta_militar_nro')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Matricula 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmatricula" v-model.trim="formData.matricula"  label="Matricula" type="text" placeholder="Escribir Matricula"      
                                                    class="" :error="isFieldValid('matricula')" :error-message="getFieldError('matricula')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Libreta Militar Tipo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllibreta_militar_tipo" v-model.trim="formData.libreta_militar_tipo"  label="Libreta Militar Tipo" type="text" placeholder="Escribir Libreta Militar Tipo"      
                                                    class="" :error="isFieldValid('libreta_militar_tipo')" :error-message="getFieldError('libreta_militar_tipo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Numero Referencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnumero_referencia" v-model.trim="formData.numero_referencia"  label="Numero Referencia" type="text" placeholder="Escribir Numero Referencia"      
                                                    class="" :error="isFieldValid('numero_referencia')" :error-message="getFieldError('numero_referencia')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Detalle Referencia 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldetalle_referencia" v-model.trim="formData.detalle_referencia"  label="Detalle Referencia" type="text" placeholder="Escribir Detalle Referencia"      
                                                    class="" :error="isFieldValid('detalle_referencia')" :error-message="getFieldError('detalle_referencia')">
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
                                                    Account Status 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlaccount_status" v-model.trim="formData.account_status"  label="Account Status" type="text" placeholder="Escribir Account Status"      
                                                    class="" :error="isFieldValid('account_status')" :error-message="getFieldError('account_status')">
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
	import { required, email, sameAs, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'users',
		},
		routeName : {
			type : String,
			default : 'usersadd',
		},
		apiPath : {
			type : String,
			default : 'users/add',
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
		usuario: "", 
		password: "", 
		confirm_password: "", 
		foto: "", 
		email: "", 
		telefono: "", 
		libreta_militar_gestion: "", 
		fecha_nacimiento: new Date(), 
		ci: "", 
		nombre1: "", 
		nombre2: "", 
		ci_ext: "", 
		ci_alf: "", 
		genero: "", 
		afp: "", 
		grupo_sanguineo: "", 
		direccion: "", 
		licencia_conducir_nro: "", 
		licencia_conducir_cat: "", 
		nit: "", 
		libreta_militar_nro: "", 
		matricula: "", 
		libreta_militar_tipo: "", 
		numero_referencia: "", 
		detalle_referencia: "", 
		codgestion: "", 
		account_status: "", 
	};
	
	const formData = reactive({ ...formDefaultValues });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			usuario: { required },
		password: { required },
		confirm_password: {required, sameAs: sameAs(formData.password, 'Password') },
		email: { required, email },
		libreta_militar_gestion: { numeric },
		ci: { numeric }
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
			app.navigateTo(`/users`);
		}
	}
	
	const {  saving, pageReady, isPwd, isCPwd, } = toRefs(page.state);
	
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
