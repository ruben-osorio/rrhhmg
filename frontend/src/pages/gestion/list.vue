<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Gestión
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <template v-if="auth.canView('/gestion/add')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/gestion/add`" class="" >
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/gestion"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </template>
                            <div class="row q-col-gutter-x-md q-col-gutter-md justify-start">
                                <div class="col">
                                    <!-- page records template -->
                                    <div >
                                        <q-table 
                                        :flat="true"
                                        table-header-class="text-h4 bg-grey-2"
                                        :bordered="false"
                                        :columns="app.menus.GestionListHeaderItems" 
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        row-key="idgestion" 
                                        v-model:pagination="pagination"
                                        hide-bottom
                                        @request="setPagination"
                                        :loading="loading">
                                        <!-- Start of Table Layout -->
                                        <template v-slot:body="props">
                                            <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                <q-td key="btnactions" :props="props" auto-width>
                                                    <div class="row justify-start">
                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                <q-list dense rounded nav>
                                                                    <template v-if="auth.canView('gestion/editar')">
                                                                        <q-item link clickable v-ripple @click="app.openPageDialog({ page:'gestion/editar', url: `/gestion/editar/${props.row.idgestion}` , closeBtn: true })">
                                                                            <q-item-section>
                                                                                <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                            </q-item-section>
                                                                            <q-item-section>Editar</q-item-section>
                                                                        </q-item>
                                                                    </template>
                                                                    <template v-if="auth.canView('gestion/delete')">
                                                                        <q-item link clickable v-ripple @click="deleteItem(props.row.idgestion)">
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
                                                <q-td auto-width key="masterdetailbtn" :props="props">
                                                    <q-btn @click="setCurrentRecord(props.row)" flat padding="xs" color="primary" no-caps  icon="more_vert">
                                                    </q-btn>
                                                </q-td>
                                                <q-td  key="idgestion" :props="props">
                                                    {{ props.row.idgestion }}
                                                </q-td>
                                                <q-td  key="habilitado" :props="props">
                                                    <span class="table-inlined-edit">{{ props.row.habilitado }}</span>
                                                    <inline-edit v-model="props.row.habilitado" save-icon="check_circle" cancel-icon="close" :url="`gestion/edit/${ props.row.idgestion }`" field-name="habilitado" field-label="Habilitado" title="Escribir Habilitado">
                                                    <q-field  borderless   >
                                                    <q-option-group  ref="listctrlhabilitado" v-model="props.row.habilitado" :options="app.menus.habilitadoItems"    ></q-option-group>
                                                    </q-field>
                                                    </inline-edit>
                                                </q-td>
                                                <q-td  key="detalle" :props="props">
                                                    <span class="table-inlined-edit">{{$utils.upper( props.row.detalle )}}</span>
                                                    <inline-edit v-model="props.row.detalle" save-icon="check_circle" cancel-icon="close" :url="`gestion/edit/${ props.row.idgestion }`" field-name="detalle" field-label="Detalle Periodo" title="Escribir Detalle Periodo">
                                                    <q-input   ref="listctrldetalle" v-model.trim="props.row.detalle"  label=""  placeholder=""      
                                                    class="" >
                                                    </q-input>
                                                    </inline-edit>
                                                </q-td>
                                                <q-td  key="anyo" :props="props">
                                                    {{ props.row.anyo }}
                                                </q-td>
                                                <q-td  key="id_user" :props="props">
                                                    <span class="table-inlined-edit">{{ props.row.id_user }}</span>
                                                    <inline-edit v-model="props.row.id_user" save-icon="check_circle" cancel-icon="close" :url="`gestion/edit/${ props.row.idgestion }`" field-name="id_user" field-label="Id User" title="Escribir Id User">
                                                    <q-input   ref="listctrlid_user" v-model.trim="props.row.id_user"  label=""  placeholder=""      
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
                                                        <template v-if="auth.canView('gestion/delete')">
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
                                <!-- Detal Page Column -->
                                <div class="col-12" v-if="currentRecord && !isSubPage">
                                    <q-card  :flat="isSubPage" class=" nice-shadow-16">
                                        <component :is="masterDetailPage" :scroll-into-view="true"></component>
                                    </q-card>
                                </div>
                            </div>
                        </div>
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
	import { utils } from 'src/utils';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'idgestion',
		},
		pageName : {
			type : String,
			default : 'gestion',
		},
		routeName : {
			type : String,
			default : 'gestionlist',
		},
		apiPath : {
			type : String,
			default : 'gestion/index',
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
	
	const {records, filters, currentRecord, totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, searchText, } = toRefs(page.state);
	
	const {     totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,     clearSearch,  setPagination, deleteItem, setCurrentRecord, isCurrentRecord,        } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Gestión"
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
