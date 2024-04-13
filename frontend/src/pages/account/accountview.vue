<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="relative-position" style="min-height:100px">
                                    <div>
                                        <q-card class="q-pa-lg q-my-md nice-shadow-16">
                                            <div class="row q-col-gutter-lg">
                                                <div class="col-auto">
                                                    <image-viewer :ratio="1/1" image-size="medium" :src="$auth.userPhoto"></image-viewer>
                                                </div>
                                                <div class="col">
                                                    <div class="text-h5 text-bold text-primary text-capitalize"> {{ $auth.userName }} </div>
                                                    <div class="text-caption"> {{ $auth.userEmail }} </div>
                                                    <div v-if="$auth.userRole" class="text-capitalize text-grey text-bold">{{ $auth.userRole }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                        <div class="row q-col-gutter-md">
                                            <div class="col-sm-3 col-12">
                                                <q-card   :flat="isSubPage" class="nice-shadow-16">
                                                    <q-tabs vertical class="text-primary" v-model="tab" no-caps inline-label>
                                                        <q-tab name="accountview" icon="account_box" label="Detalle de cuenta" style="justify-content:initial" />
                                                        <q-tab name="accountedit" icon="edit" label="Editar cuenta" style="justify-content:initial" />
                                                        <q-tab name="changepassword" icon="lock" label="Cambia la contraseña" style="justify-content:initial" />
                                                    </q-tabs>
                                                </q-card>
                                            </div>
                                            <dsiv class="col-sm-9 col-12">
                                            <q-tab-panels v-model="tab" animated transition-prev="jump-up" transition-next="jump-up">
                                                <q-tab-panel name="accountview">
                                                    <div class="row q-col-gutter-md justify-start">
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Permisos</div>
                                                                        <div class="text-bold">{{ item.permisos }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">User Role Id</div>
                                                                        <div class="text-bold">
                                                                            <q-btn v-if="item.user_role_id" @click="app.openPageDialog({ page: 'roles/view', url: `/roles/view/${item.user_role_id}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                                                <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Roles Detail
                                                                            </q-btn>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Jsonunidad</div>
                                                                        <div class="text-bold">{{ item.jsonunidad }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Id</div>
                                                                        <div class="text-bold">{{ item.id }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Apmaterno</div>
                                                                        <div class="text-bold">{{ item.apmaterno }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Usuario</div>
                                                                        <div class="text-bold">{{ item.usuario }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Email</div>
                                                                        <div class="text-bold">{{ item.email }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Telefono</div>
                                                                        <div class="text-bold">{{ item.telefono }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Carnet</div>
                                                                        <div class="text-bold">{{ item.carnet }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Expedido</div>
                                                                        <div class="text-bold">{{ item.expedido }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Appaterno</div>
                                                                        <div class="text-bold">{{ item.appaterno }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Libreta Militar Gestion</div>
                                                                        <div class="text-bold">{{ item.libreta_militar_gestion }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Fecha Nacimiento</div>
                                                                        <div class="text-bold">{{ item.fecha_nacimiento }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Nombre1</div>
                                                                        <div class="text-bold">{{ item.nombre1 }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Nombre2</div>
                                                                        <div class="text-bold">{{ item.nombre2 }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Ci Alf</div>
                                                                        <div class="text-bold">{{ item.ci_alf }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Genero</div>
                                                                        <div class="text-bold">{{ item.genero }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Afp</div>
                                                                        <div class="text-bold">{{ item.afp }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Grupo Sanguineo</div>
                                                                        <div class="text-bold">{{ item.grupo_sanguineo }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Direccion</div>
                                                                        <div class="text-bold">{{ item.direccion }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Licencia Conducir Nro</div>
                                                                        <div class="text-bold">{{ item.licencia_conducir_nro }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Licencia Conducir Cat</div>
                                                                        <div class="text-bold">{{ item.licencia_conducir_cat }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Nit</div>
                                                                        <div class="text-bold">{{ item.nit }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Libreta Militar Nro</div>
                                                                        <div class="text-bold">{{ item.libreta_militar_nro }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Matricula</div>
                                                                        <div class="text-bold">{{ item.matricula }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Libreta Militar Tipo</div>
                                                                        <div class="text-bold">{{ item.libreta_militar_tipo }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Numero Referencia</div>
                                                                        <div class="text-bold">{{ item.numero_referencia }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Detalle Referencia</div>
                                                                        <div class="text-bold">{{ item.detalle_referencia }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Codgestion</div>
                                                                        <div class="text-bold">{{ item.codgestion }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Account Status</div>
                                                                        <div class="text-bold">{{ item.account_status }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Cv Checkb1</div>
                                                                        <div class="text-bold">{{ item.cv_checkb1 }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                        <div class="col-12 col-md-4">
                                                            <q-card  class="q-pa-md nice-shadow-16">
                                                                <div class="row q-col-gutter-x-md items-center">
                                                                    <div class="col">
                                                                        <div class="text-grey text-weight-medium mb-1">Estado</div>
                                                                        <div class="text-bold">{{ item.estado }}</div>
                                                                    </div>
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                    </div>
                                                </q-tab-panel>
                                                <q-tab-panel name="accountedit">
                                                    <div class="reset-grid">
                                                        <account-edit-page is-sub-page></account-edit-page>
                                                        </div>
                                                    </q-tab-panel>
                                                    <q-tab-panel name="changepassword">
                                                        <change-password-page is-sub-page></change-password-page>
                                                    </q-tab-panel>
                                                </q-tab-panels>
                                                </dsiv>
                                            </div>
                                        </div>
                                    </div>
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
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
	import  AccountEditPage  from "./accountedit.vue";
	import  ChangePasswordPage  from "./changepassword.vue";
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id',
		},
		pageName: {
			type: String,
			default: 'users',
		},
		routeName: {
			type: String,
			default: 'usersaccountview',
		},
		apiPath: {
			type: String,
			default: 'account',
		},
		editButton: {
			type: Boolean,
			default: true,
		},
		deleteButton: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		titleBeforeDelete: {
			type: String,
			default: "Eliminar el registro",
		},
		msgBeforeDelete: {
			type: String,
			default: "¿Seguro que quieres borrar este registro?",
		},
		msgAfterDelete: {
			type: String,
			default: "Grabar eliminado con éxito",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp(props);
	const auth = useAuth();
	const page = useViewPage({ store, props });
	
	const { currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	const { load, deleteItem, } = page.methods;
	
	const tab = ref('accountview');
	
	
	useMeta(() => {
		return {
			//set browser title
			title: "Mi cuenta"
		}
	});
	
	onMounted(()=>{ 
		load();
	});
</script>
<style scoped>
</style>
