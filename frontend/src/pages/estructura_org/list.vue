<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Estructura Organizacional
                            </div>
                        </div>
                        <div  class="col-md-auto " >
                            <template v-if="auth.canView('/estructura_org/add')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   @click="app.openPageDialog({ page: 'estructura_org/add', url: `/estructura_org/add` , closeBtn: true  })"  class="" >
                                    <q-icon name="add"></q-icon>                                
                                    Generar Estructura 
                                </q-btn>
                            </template>
                        </div>
                        <div  class="col-md-auto comp-grid" >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   @click="app.openPageDialog({ page: 'estructura_org/agregarorg', url: `/estructura_org/agregarorg` , closeBtn: true  })"  class="" >
                                <q-icon name="add"></q-icon>                                
                                Agregar Registro 
                            </q-btn>
                        </div>
                        <div  class="col-md-auto comp-grid" >
                            <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                <div class=" row wrap items-center justify-between">
                                    <div class="q-mb-sm text-bold text-primary" >
                                        Filtrar por nivel   
                                    </div>
                                    <div>
                                        <q-btn-toggle  no-caps glossy unelevated v-model="filters.estructura_org_nivel.value" toggle-color="primary" :options="filters.estructura_org_nivel.options" />
                                    </div>
                                </div>
                            </q-card>
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
                            <div class="q-px-sm nice-shadow-16" v-if="filterHasValue(filters.estructura_org_nivel)">
                                <strong>Nivel</strong>
                                <q-chip removable @remove="removeFilter(filters.estructura_org_nivel)"  :label="getFilterLabel(filters.estructura_org_nivel)">
                                </q-chip>
                            </div>
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && $route.query.tag">
                                <q-breadcrumbs class="q-pa-md">
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/estructura_org"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table 
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.EstructuraOrgListHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                v-model:selected="selectedItems"
                                selection="multiple"
                                row-key="idunidad" 
                                v-model:pagination="pagination"
                                hide-bottom
                                @request="setPagination"
                                :loading="loading">
                                <!-- Start of Table Layout -->
                                <template v-slot:body="props">
                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                        <q-td auto-width>
                                            <q-checkbox dense v-model="props.selected"></q-checkbox>
                                        </q-td>
                                        <q-td key="btnactions" :props="props" auto-width>
                                            <div class="row q-col-gutter-xs justify-end">
                                                <q-btn icon="menu" padding="xs" round flat color="grey">
                                                    <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                        <q-list dense rounded nav>
                                                            <template v-if="auth.canView('estructura_org/view')">
                                                                <q-item link clickable v-ripple :to="`/estructura_org/view/${props.row.idunidad}`">
                                                                    <q-item-section>
                                                                        <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Vista</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canManage('estructura_org/edit', props.row.idunidad)">
                                                                <q-item link clickable v-ripple @click="app.openPageDialog({ page:'estructura_org/edicionorg', url: `/estructura_org/edicionorg/${props.row.idunidad}` , closeBtn: true })">
                                                                    <q-item-section>
                                                                        <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Edicion</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canManage('estructura_org/delete', props.row.idunidad)">
                                                                <q-item link clickable v-ripple @click="deleteItem(props.row.idunidad)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Eliminar</q-item-section>
                                                                </q-item>
                                                            </template>
                                                        </q-list>
                                                    </q-menu>
                                                </q-btn>
                                            </div>
                                        </q-td>
                                        <q-td  key="nivel" :props="props">
                                            {{ props.row.nivel }}
                                        </q-td>
                                        <q-td  key="descripcion" :props="props">
                                            {{ props.row.descripcion }}
                                        </q-td>
                                        <q-td  key="dependencia" :props="props">
                                            {{ props.row.dependencia }}
                                        </q-td>
                                        <q-td  key="ley" :props="props">
                                            {{ props.row.ley }}
                                        </q-td>
                                    </q-tr>
                                </template>
                                <!-- End of Table Layout-->
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
                                                <template v-if="auth.canView('estructura_org/delete')">
                                                    <div>
                                                        <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Eliminar seleccionado">
                                                            <q-tooltip>Delete Selected Items</q-tooltip>
                                                        </q-btn>
                                                    </div>
                                                </template>
                                                <div>
                                                    <q-btn v-if="exportButton"    :rounded="false"  no-caps  unelevated   color="accent" class="q-my-xs" @click="exportPage()" label="Exportar"  title="Exportar" icon="print">
                                                    </q-btn>
                                                </div>
                                                <template v-if="auth.canView('estructura_org/importdata')">
                                                    <div>
                                                        <import-data label="Seleccione un archivo para importar" ref="dataimport" upload-path="estructura_org/importdata" @importComplete="importComplete">
                                                        <q-btn class="q-my-xs" @click="$refs.dataimport.openDialog()" icon="import_export"    :rounded="false"  no-caps  unelevated   color="accent" label="Importar" >
                                                        </q-btn>
                                                        </import-data>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAuth } from 'src/composables/auth';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'idunidad',
		},
		pageName : {
			type : String,
			default : 'estructura_org',
		},
		routeName : {
			type : String,
			default : 'estructura_orglist',
		},
		apiPath : {
			type : String,
			default : 'estructura_org/index',
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
			default: true,
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
		exportFormats: {
			type: Array,
			default: () => ['pdf','excel','csv'],
		},
	});
	
	const app = useApp();
	const auth = useAuth();
	
	const defaultStoreState = {
		filters: {
			estructura_org_nivel: {
				value: '',
				valueType: 'single',
				options: app.menus.estructura_orgnivelItems,
			}
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
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,    exportPage, clearSearch,  setPagination, deleteItem,  isCurrentRecord, removeFilter, getFilterLabel, filterHasValue,   importComplete,  } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Estructura Organizacional"
		}
	});
	
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
