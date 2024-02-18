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
                                    Ver
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="row q-col-gutter-x-md ">
                                    <div class="col">
                                        <div class="q-mb-3 row q-col-gutter-md justify-start">
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
                                                            <div class="text-grey text-weight-medium mb-1">Ci</div>
                                                            <div class="text-bold">{{ item.ci }}</div>
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
                                                            <div class="text-grey text-weight-medium mb-1">Ci Ext</div>
                                                            <div class="text-bold">{{ item.ci_ext }}</div>
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
                                        </div>
                                        <div class="row q-col-gutter-xs justify-start q-ma-md">
                                            <template v-if="auth.canManage('users/edit', item.id)">
                                                <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'users/edit', url: `/users/edit/${item.id}` , closeBtn: true })">
                                                </q-btn></div>
                                            </template>
                                            <template v-if="auth.canManage('users/delete', item.id)">
                                                <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.id)">
                                                </q-btn></div>
                                            </template>
                                        </div>
                                    </div>
                                    <!-- Detal Page Column -->
                                    <div class="col-12" v-if="currentRecord && !isSubPage">
                                        <q-card  :flat="isSubPage" class="q-my-md nice-shadow-16">
                                            <component :is="masterDetailPage" :scroll-into-view="false"></component>
                                        </q-card>
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
	import { defineAsyncComponent, computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
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
			default: 'usersview',
		},
		apiPath: {
			type: String,
			default: 'users/view',
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
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
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
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp(props);
	const auth = useAuth();
	
	const page = useViewPage({store, props}); // where page logics resides
	
	const {  currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	
	const  { load, deleteItem,    } = page.methods;
	
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));
	
	useMeta(() => {
		return {
			//set browser title
			title: "Ver"
		}
	});
	
	onMounted(()=>{ 
		load();
	});
</script>
<style scoped>
</style>
