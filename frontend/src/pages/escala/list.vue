<template>
    <main class="main-page" id="">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row justify-between q-col-gutter-md">
                    <div  class="col col-md-auto comp-grid" >
                        <div class=" text-h6 text-bold" >
                            Escala Salarial
                        </div>
                        <q-separator class="q-my-sm"></q-separator>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <div class="">
                            <api-data-source @loaded="(response)=> filters.escala_financiero.options=response"  api-path="components_data/escala_financiero_option_list"  v-slot="req">
                                <div class=" row wrap items-center justify-between">
                                    <div class="q-mb-sm text-bold text-primary" >
                                        Por Fuente:
                                    </div>
                                    <div>
                                        <q-btn-toggle  no-caps glossy unelevated v-model="filters.escala_financiero.value" toggle-color="primary" :options="filters.escala_financiero.options" />
                                    </div>
                                </div>
                            </api-data-source>
                        </div>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   @click="app.openPageDialog({ page: 'escala/add', url: `/escala/add` , closeBtn: true  })"  class="" >
                            Agregar Escala 
                        </q-btn>
                    </div>
                    <div  class="col col-md-auto comp-grid" >
                        <q-input debounce="1000"  placeholder="" v-model="searchText" >
                        <template v-slot:append>
                            <q-icon name="search"></q-icon>
                        </template>
                        </q-input>
                    </div>
                </div>
            </div>
        </section>
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
                            <div class="q-px-sm nice-shadow-16" v-if="filterHasValue(filters.escala_financiero)">
                                <strong>Fuente</strong>
                                <q-chip removable @remove="removeFilter(filters.escala_financiero)"  :label="getFilterLabel(filters.escala_financiero)">
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
                                :columns="app.menus.EscalaListHeaderItems" 
                                :rows="records"
                                :binary-state-sort="true"
                                separator="horizontal"
                                :dense="true"
                                v-model:selected="selectedItems"
                                selection="multiple"
                                row-key="idescala" 
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
                                                            <template v-if="auth.canView('escala/view')">
                                                                <q-item link clickable v-ripple @click="app.openPageDrawer({ page: 'escala/view', url: `/escala/view/${props.row.idescala}` })">
                                                                    <q-item-section>
                                                                        <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Ver</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canView('escala/edicion')">
                                                                <q-item link clickable v-ripple @click="app.openPageDialog({ page:'escala/edicion', url: `/escala/edicion/${props.row.idescala}` , closeBtn: true })">
                                                                    <q-item-section>
                                                                        <q-icon color="primary" size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Editar</q-item-section>
                                                                </q-item>
                                                            </template>
                                                            <template v-if="auth.canView('escala/delete')">
                                                                <q-item link clickable v-ripple @click="deleteItem(props.row.idescala)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Borrar</q-item-section>
                                                                </q-item>
                                                            </template>
                                                        </q-list>
                                                    </q-menu>
                                                </q-btn>
                                            </div>
                                        </q-td>
                                        <q-td  key="idescala" :props="props">
                                            {{ props.row.idescala }}
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
                                        <q-td  key="categoria" :props="props">
                                            {{ props.row.categoria }}
                                        </q-td>
                                        <q-td  key="normativa_codigo" :props="props">
                                            {{ props.row.normativa_codigo }}
                                        </q-td>
                                        <q-td  key="nivel" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.nivel }}</span>
                                            <inline-edit v-model="props.row.nivel" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="nivel" field-label="Nivel" title="Escribir Nivel">
                                            <q-input   ref="listctrlnivel" v-model.trim="props.row.nivel"  label=""  placeholder=""      
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
                                        <q-td  key="haberbasico" :props="props">
                                            {{ props.row.haberbasico }}
                                        </q-td>
                                        <q-td  key="numero_items" :props="props">
                                            <span class="table-inlined-edit">{{ props.row.numero_items }}</span>
                                            <inline-edit v-model="props.row.numero_items" save-icon="check_circle" cancel-icon="close" :url="`escala/edit/${ props.row.idescala }`" field-name="numero_items" field-label="Nro de Casos" title="Escribir Nro de Casos">
                                            <q-input   ref="listctrlnumero_items" v-model.trim="props.row.numero_items"  label=""  placeholder=""      
                                            class="" >
                                            </q-input>
                                            </inline-edit>
                                        </q-td>
                                    </q-tr>
                                </template>
                                <!-- End of Table Layout-->
                                </q-table>
                                <div class="row justify-center">
                                    <div>Total Haber Básico : <q-chip square class="text-bold">{{totalHaberbasico}}</q-chip></div><div>Total Cantidad de Items : <q-chip square class="text-bold">{{totalNumeroItems}}</q-chip></div><q-td></q-td>
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
			default : 'escalalist',
		},
		apiPath : {
			type : String,
			default : 'escala/index',
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
			default: 50,
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
			escala_financiero: {
				value: '',
				valueType: 'single',
				options: [],
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
	const { load,     clearSearch,  setPagination, deleteItem,  isCurrentRecord, removeFilter, getFilterLabel, filterHasValue,     } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Escala Salarial"
		}
	});
	const totalHaberbasico = computed(() => records.value.sum("haberbasico"));
	const totalNumeroItems = computed(() => records.value.sum("numero_items"));
	const totalCostoMensual = computed(() => records.value.sum("costo_mensual"));
	
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
