<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Escala
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <template v-if="auth.canView('/escala/add')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/escala/add`" class="" >
                                    <q-icon name="add"></q-icon>                                
                                    Agregar nuevo 
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/escala"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <!-- page records template -->
                            <div >
                                <q-table 
                                :flat="true"
                                table-header-class="text-h4 bg-grey-2"
                                :bordered="false"
                                :columns="app.menus.EscalaListadoHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                row-key="idescala" 
                                v-model:pagination="pagination"
                                hide-bottom
                                @request="setPagination"
                                :loading="loading">
                                <!-- Start of Table Layout -->
                                <template v-slot:body="props">
                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                        <q-td key="btnactions" :props="props" auto-width>
                                            <div class="row q-col-gutter-xs justify-end">
                                                <q-btn icon="menu" padding="xs" round flat color="grey">
                                                    <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                        <q-list dense rounded nav>
                                                            <template v-if="auth.canView('escala/view')">
                                                                <q-item link clickable v-ripple :to="`/escala/view/${props.row.idescala}`">
                                                                    <q-item-section>
                                                                        <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>View</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canView('escala/edit')">
                                                                <q-item link clickable v-ripple :to="`/escala/edit/${props.row.idescala}`">
                                                                    <q-item-section>
                                                                        <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Edit</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canView('escala/delete')">
                                                                <q-item link clickable v-ripple @click="deleteItem(props.row.idescala)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Delete</q-item-section>
                                                                </q-item>
                                                            </template>
                                                        </q-list>
                                                    </q-menu>
                                                </q-btn>
                                            </div>
                                        </q-td>
                                        <q-td  key="nivel" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.nivel }}</span>
                                            <inline-edit v-model="props.row.nivel" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="nivel" field-label="Nivel" title="Escribir Nivel">
                                            <q-input   ref="listctrlnivel" v-model.trim="props.row.nivel"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="haberbasico" :props="props">
                                            {{ props.row.haberbasico }}
                                        </q-td>
                                        <q-td  key="habilitado" :props="props">
                                            {{ props.row.habilitado }}
                                        </q-td>
                                        <q-td  key="ageneral" :props="props">
                                            {{ props.row.ageneral }}
                                        </q-td>
                                        <q-td  key="mgeneral" :props="props">
                                            {{ props.row.mgeneral }}
                                        </q-td>
                                        <q-td  key="aespecifica" :props="props">
                                            {{ props.row.aespecifica }}
                                        </q-td>
                                        <q-td  key="mespecifica" :props="props">
                                            {{ props.row.mespecifica }}
                                        </q-td>
                                        <q-td  key="codgestion" :props="props">
                                            {{ props.row.codgestion }}
                                        </q-td>
                                        <q-td  key="entidad" :props="props">
                                            {{ props.row.entidad }}
                                        </q-td>
                                        <q-td  key="financiero" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.financiero }}</span>
                                            <inline-edit v-model="props.row.financiero" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="financiero" field-label="Fuente" title="Escribir Fuente">
                                            <api-data-source   api-path="components_data/financiero_option_list"  v-slot="req">
                                                <q-field  borderless   >
                                                <q-option-group  ref="listctrlfinanciero" v-model="props.row.financiero" :options="req.response"    ></q-option-group>
                                                </q-field>
                                            </api-data-source>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="organizacion" :props="props">
                                            {{ props.row.organizacion }}
                                        </q-td>
                                        <q-td  key="categoria" :props="props">
                                            {{ props.row.categoria }}
                                        </q-td>
                                        <q-td  key="denominacion" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.denominacion }}</span>
                                            <inline-edit v-model="props.row.denominacion" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="denominacion" field-label="Denominacion" title="Escribir Denominacion">
                                            <q-input   ref="listctrldenominacion" v-model.trim="props.row.denominacion"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="normativa_codigo" :props="props">
                                            {{ props.row.normativa_codigo }}
                                        </q-td>
                                        <q-td  key="numero_items" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.numero_items }}</span>
                                            <inline-edit v-model="props.row.numero_items" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="numero_items" field-label="Nro de Casos" title="Escribir Nro de Casos">
                                            <q-input   ref="listctrlnumero_items" v-model.trim="props.row.numero_items"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="costo_mensual" :props="props">
                                            {{ props.row.costo_mensual }}
                                        </q-td>
                                        <q-td  key="academico" :props="props">
                                            {{ props.row.academico }}
                                        </q-td>
                                        <q-td  key="detalle" :props="props">
                                            {{ props.row.detalle }}
                                        </q-td>
                                        <q-td  key="normativa_anyo" :props="props">
                                            {{ props.row.normativa_anyo }}
                                        </q-td>
                                        <q-td  key="den1" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.den1 }}</span>
                                            <inline-edit v-model="props.row.den1" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="den1" field-label="Denominación 1" title="Describir denominación 1">
                                            <q-input   ref="listctrlden1" v-model.trim="props.row.den1"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="den2" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.den2 }}</span>
                                            <inline-edit v-model="props.row.den2" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="den2" field-label="Denominación 2" title="Describir denominación 2">
                                            <q-input   ref="listctrlden2" v-model.trim="props.row.den2"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="den3" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.den3 }}</span>
                                            <inline-edit v-model="props.row.den3" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="den3" field-label="Denominación 3" title="Describir denominación 3">
                                            <q-input   ref="listctrlden3" v-model.trim="props.row.den3"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="den4" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.den4 }}</span>
                                            <inline-edit v-model="props.row.den4" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="den4" field-label="Denominación 4" title="Describir denominación 4">
                                            <q-input   ref="listctrlden4" v-model.trim="props.row.den4"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                        <q-td  key="denom_total" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.denom_total }}</span>
                                            <inline-edit v-model="props.row.denom_total" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="denom_total" field-label="Denom Total" title="Escribir Denom Total">
                                            <q-input   ref="listctrldenom_total" v-model.trim="props.row.denom_total"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
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
                                                <template v-if="auth.canView('escala/delete')">
                                                    <div>
                                                        <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Eliminar seleccionado">
                                                            <q-tooltip>Delete Selected Items</q-tooltip>
                                                        </q-btn>
                                                    </div>
                                                </template>
                                                <template v-if="auth.canView('escala/importdata')">
                                                    <div>
                                                        <import-data label="Seleccione un archivo para importar" ref="dataimport" upload-path="escala/importdata" @importComplete="importComplete">
                                                        <q-btn class="q-my-xs" @click="$refs.dataimport.openDialog()" icon="import_export"    :rounded="false"  no-caps  unelevated   color="accent" label="Datos de importacion" >
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
			default : 'idescala',
		},
		pageName : {
			type : String,
			default : 'escala',
		},
		routeName : {
			type : String,
			default : 'escalalistado',
		},
		apiPath : {
			type : String,
			default : 'escala/listado',
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
			default: false,
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
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem,  isCurrentRecord,      importComplete,  } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Escala"
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
