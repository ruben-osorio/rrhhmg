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
                                <div class="q-mb-3 row q-col-gutter-md justify-start">
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Idparentesco</div>
                                                    <div class="text-bold">{{ item.idparentesco }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Nombres</div>
                                                    <div class="text-bold">{{ item.nombres }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Detalle</div>
                                                    <div class="text-bold">{{ item.detalle }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Codusuario</div>
                                                    <div class="text-bold">
                                                        <q-btn v-if="item.codusuario" @click="app.openPageDialog({ page: 'usuarios/view', url: `/usuarios/view/${item.codusuario}` , closeBtn: true })" padding="xs" flat color="primary" no-caps >
                                                            <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Usuarios Detail
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
                                                    <div class="text-grey text-weight-medium mb-1">Fechanacimiento</div>
                                                    <div class="text-bold">{{ item.fechanacimiento }}</div>
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
                                                    <div class="text-grey text-weight-medium mb-1">Nacionalidad</div>
                                                    <div class="text-bold">{{ item.nacionalidad }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <div class="row q-col-gutter-x-md items-center">
                                                <div class="col">
                                                    <div class="text-grey text-weight-medium mb-1">Nrodocumento</div>
                                                    <div class="text-bold">{{ item.nrodocumento }}</div>
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                                <div class="row q-col-gutter-xs justify-start q-ma-md">
                                    <template v-if="auth.canView('parentesco/edit')">
                                        <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'parentesco/edit', url: `/parentesco/edit/${item.idparentesco}` , closeBtn: true })">
                                        </q-btn></div>
                                    </template>
                                    <template v-if="auth.canView('parentesco/delete')">
                                        <div><q-btn icon="delete_sweep" label="Delete" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Borrar"  @click="deleteItem(item.idparentesco)">
                                        </q-btn></div>
                                    </template>
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
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'idparentesco',
		},
		pageName: {
			type: String,
			default: 'parentesco',
		},
		routeName: {
			type: String,
			default: 'parentescoview',
		},
		apiPath: {
			type: String,
			default: 'parentesco/view',
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
