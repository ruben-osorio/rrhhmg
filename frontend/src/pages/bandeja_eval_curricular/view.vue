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
                                                            <div class="text-grey text-weight-medium mb-1">Seleccion</div>
                                                            <div class="text-bold">{{ item.seleccion }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Nro Item</div>
                                                            <div class="text-bold">{{ item.nro_item }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Cv Aprovado</div>
                                                            <div class="text-bold">{{ item.cv_aprovado }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <q-card  class="q-pa-md nice-shadow-16">
                                                    <div class="row q-col-gutter-x-md items-center">
                                                        <div class="col">
                                                            <div class="text-grey text-weight-medium mb-1">Item</div>
                                                            <div class="text-bold">{{ item.item }}</div>
                                                        </div>
                                                    </div>
                                                </q-card>
                                            </div>
                                        </div>
                                        <div class="row q-col-gutter-xs justify-start q-ma-md">
                                            <template v-if="auth.canView('bandeja_eval_curricular/edit')">
                                                <div><q-btn icon="edit" label="Edit" glossy  flat :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Editar"  @click="app.openPageDialog({ page:'bandeja_eval_curricular/edit', url: `/bandeja_eval_curricular/edit/${item.id}` , closeBtn: true })">
                                                </q-btn></div>
                                            </template>
                                            <template v-if="auth.canView('bandeja_eval_curricular/delete')">
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
			default: 'bandeja_eval_curricular',
		},
		routeName: {
			type: String,
			default: 'bandeja_eval_curricularview',
		},
		apiPath: {
			type: String,
			default: 'bandeja_eval_curricular/view',
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
