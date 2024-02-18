<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Hoja de Vida
                                <div class="text-caption text-grey"> Datos Personales </div>
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <template v-if="auth.canView('/hojavida/add')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/hojavida/add`" class="" >
                                    <q-icon name="add"></q-icon>                                
                                    Ingresar Datos Personales 
                                </q-btn>
                            </template>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-input debounce="1000"  placeholder="Buscar" v-model="searchText" >
                            <template v-slot:append>
                                <q-icon name="search"></q-icon>
                            </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <section class="page-section " >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class="row q-mb-md q-gutter-sm">
                            <div class="q-px-sm nice-shadow-16" v-if="searchText">
                                Buscar: 
                                <q-chip icon="search" removable @remove="clearSearch()" :label="searchText">
                                </q-chip>
                            </div>
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/hojavida"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <div class="row q-col-gutter-x-md ">
                                <div class="col">
                                    <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                        <div >
                                            <q-table :loading="loading" hide-bottom  grid card-container-class="" 
                                            :columns="app.menus.HojavidaListHeaderItems" 
                                            :rows="records" 
                                            row-key="idhoja" 
                                            v-model:pagination="pagination"
                                            @request="setPagination" 
                                            no-data-label="ningún record fue encontrado">
                                            <template v-slot:item="props">
                                                <div class="col-12">
                                                    <q-card  class=" nice-shadow-16">
                                                        <q-item clickable :active="isCurrentRecord(props.row)" active-class="bg-blue-1">
                                                            <q-item-section v-ripple @click="app.navigateTo(`/hojavida/view/${props.row.idhoja}`)">
                                                            </q-item-section>
                                                            <q-item-section side top class="text-right">
                                                                <q-card-actions class="row q-col-gutter-xs justify-end">
                                                                    <q-btn icon="menu" padding="xs" round flat color="grey">
                                                                        <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                            <q-list dense rounded nav>
                                                                                <template v-if="auth.canView('hojavida/view')">
                                                                                    <q-item link clickable v-ripple :to="`/hojavida/view/${props.row.idhoja}`">
                                                                                        <q-item-section>
                                                                                            <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>View</q-item-section>
                                                                                    </q-item>
                                                                                </template>
                                                                                <template v-if="auth.canView('hojavida/edit')">
                                                                                    <q-item link clickable v-ripple :to="`/hojavida/edit/${props.row.idhoja}`">
                                                                                        <q-item-section>
                                                                                            <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>Edit</q-item-section>
                                                                                    </q-item>
                                                                                </template>
                                                                                <template v-if="auth.canView('hojavida/delete')">
                                                                                    <q-item link clickable v-ripple @click="deleteItem(props.row.idhoja)">
                                                                                        <q-item-section>
                                                                                            <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>Delete</q-item-section>
                                                                                    </q-item>
                                                                                </template>
                                                                            </q-list>
                                                                        </q-menu>
                                                                    </q-btn>
                                                                </q-card-actions>
                                                            </q-item-section>
                                                        </q-item>
                                                    </q-card>
                                                </div>
                                            </template>
                                            </q-table>
                                            <div class="row justify-center">
                                                <q-td></q-td>
                                            </div>
                                        </div>
                                        <!-- page loading indicator template -->
                                        <template v-if="loading">
                                            <q-inner-loading :showing="loading">
                                                <q-spinner color="primary" size="30px"> 
                                                </q-spinner>
                                            </q-inner-loading>
                                        </template>
                                        <!-- page empty record template -->
                                        <template v-if="pageReady && !records.length">
                                            <q-card :flat="$q.screen.gt.md">
                                                <q-card-section>
                                                    <div class="text-grey text-h6 text-center">
                                                        ningún record fue encontrado
                                                    </div>
                                                </q-card-section>
                                            </q-card>
                                        </template>
                                        <!-- page footer template-->
                                        <template v-if="showFooter">
                                            <div class="">
                                                <q-separator />
                                                <div class="q-pa-md" v-show="pageReady">
                                                    <div class="row items-center justify-between">
                                                        <div class="row items-center q-col-gutter-md">
                                                            <template v-if="auth.canView('hojavida/delete')">
                                                                <div>
                                                                    <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Eliminar seleccionado">
                                                                        <q-tooltip>Delete Selected Items</q-tooltip>
                                                                    </q-btn>
                                                                </div>
                                                            </template>
                                                        </div>
                                                        <div v-if="paginate && totalRecords > 0" class="row  items-center justify-between">
                                                            <div class="col-auto">
                                                                <q-chip square>Archivos {{recordsPosition}} de {{totalRecords}}</q-chip>
                                                            </div>
                                                            <div v-if="totalPages > 1">
                                                                <q-pagination  color="primary"  v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </template>
                                    </q-card>
                                </div>
                                <!-- Detal Page Column -->
                                <div class="col-12" v-if="currentRecord && !isSubPage">
                                    <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                        <component :is="masterDetailPage" :scroll-into-view="true"></component>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                        <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/hojavida/index`" class="" >
                            Button 
                        </q-btn>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
	import { defineAsyncComponent, computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAuth } from 'src/composables/auth';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'idhoja',
		},
		pageName : {
			type : String,
			default : 'hojavida',
		},
		routeName : {
			type : String,
			default : 'hojavidalist',
		},
		apiPath : {
			type : String,
			default : 'hojavida/index',
		},
		paginate: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type: Boolean,
			default: false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		showBreadcrumbs: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		importButton: {
			type: Boolean,
			default: false,
		},
		multiCheckbox: {
			type: Boolean,
			default: true,
		},
		emptyRecordMsg: {
			type: String,
			default: "ningún record fue encontrado",
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
		page: {
			type: Number,
			default: 1,
		},
		limit: {
			type: Number,
			default: 10,
		},
		mergeRecords: {
			type: Boolean,
			default: false,
		},
		search: {
			type: String,
			default: '',
		},
		fieldName: null,
		fieldValue: null,
		sortBy: {
			type: String,
			default: '',
		},
		sortType: {
			type: String,
			default: 'desc', //desc or asc
		},
	});
	
	const app = useApp();
	const auth = useAuth();
	
	const defaultStoreState = {
		filters: {
		},
		pagination: {
			page: props.page,
			rowsPerPage: props.limit,
			rowsNumber: 0,
			sortBy: props.sortBy,
			descending: props.sortType == 'desc'
		},
		searchText: props.search,
		primaryKey: props.primaryKey
	}
	const store = usePageStore(props.pageName,  defaultStoreState);
	
	// page hooks where logics resides
	const page = useListPage({ store, props });
	
	const {records, filters, currentRecord, totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem,  isCurrentRecord,        } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Hoja de Vida"
		}
	});
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));
	
	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});
	
	onMounted(()=>{ 
		load();
	});
</script>
<style scoped>
</style>
