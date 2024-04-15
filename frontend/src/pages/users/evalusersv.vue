<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Postulante
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/users"></q-breadcrumbs-el>
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
                                        :columns="app.menus.UsersEvalusersvHeaderItems"
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        v-model:selected="selectedItems"
                                        selection="single"
                                        row-key="id"
                                        v-model:pagination="pagination"
                                        hide-bottom
                                        @request="setPagination"
                                        :loading="loading"
                                        @update:selected="handleSelectionChange">

                                        <!-- Start of Table Layout -->
                                        <template v-slot:body="props">
                                            <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                <q-td auto-width>
                                                    <q-checkbox dense v-model="props.selected" ></q-checkbox>
                                                </q-td>
                                                <q-td key="btnactions" :props="props" auto-width>
                                                    <div class="row q-col-gutter-xs justify-end">
                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                <q-list dense rounded nav>
                                                                    <template v-if="auth.canView('users/view')">
                                                                        <q-item link clickable v-ripple :to="`/users/view/${props.row.id}`">
                                                                            <q-item-section>
                                                                                <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                            </q-item-section>
                                                                            <q-item-section>View</q-item-section>
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
                                                <q-td  key="id" :props="props">
                                                    <q-btn padding="xs"   :rounded="false"  color="primary"  no-caps  unelevated   flat :to="`/users/view/${props.row.id}`">{{ props.row.id }}</q-btn>
                                                </q-td>
                                                <q-td  key="carnet" :props="props">
                                                    {{ props.row.carnet }}
                                                </q-td>
                                                <q-td  key="apmaterno" :props="props">
                                                    {{ props.row.apmaterno }}
                                                </q-td>
                                                <q-td  key="appaterno" :props="props">
                                                    {{ props.row.appaterno }}
                                                </q-td>
                                                <q-td  key="nombre1" :props="props">
                                                    {{ props.row.nombre1 }}
                                                </q-td>
                                                <q-td  key="nombre2" :props="props">
                                                    {{ props.row.nombre2 }}
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
                                                        <template v-if="auth.canView('users/delete')">
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
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
    import { useDatosBasicosStore } from 'src/stores/storex';

	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'id',
		},
		pageName : {
			type : String,
			default : 'users',
		},
		routeName : {
			type : String,
			default : 'usersevalusersv',
		},
		apiPath : {
			type : String,
			default : 'users/evalusersv',
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
			default: 1,
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


    const handleClick = (row) => {
    // Lógica adicional si es necesario
        sendDatosbasicos(row.appaterno, row.apmaterno, row.nombre1, row.id);
    };



    const sendDatosbasicos = (appaterno, apmaterno, nombre1, codusuario) => {
        console.log('Emitiendo desde list.vue :' + codusuario);
        const datosBasicosStore = useDatosBasicosStore();
        // datosBasicosStore.setDatosBasicos({ appaterno, apmaterno, nombre1 });
        // datosBasicosStore.setDatosBasicos({ appaterno: 'valor', apmaterno: 'valor', nombre1: 'valor' });
        datosBasicosStore.updateDatosBasicos({ appaterno, apmaterno, nombre1, codusuario });
    };

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
			return "Postulante"
		}
	});
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));

	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});

    const handleSelectionChange = (newSelectedItems) => {
        // Itera sobre las filas seleccionadas
        for (const item of newSelectedItems) {
            // Accede a la propiedad "carnet" de cada fila seleccionada
       //     const carnet = item.carnet;
        //    console.log('Carnet:', carnet);

            sendDatosbasicos(item.appaterno, item.apmaterno, item.nombre1, item.id);
        }
/*
        if (item && item['<target>']) {
            // Accede al objeto de fila dentro del Proxy
            const rowObject = item['<target>']; // Reemplaza <target> con la propiedad real que contiene el objeto de fila
            console.log('Fila seleccionada:', rowObject);

            // Verifica si rowObject es válido antes de acceder a sus propiedades
            if (rowObject) {
                // Accede a las propiedades individuales del objeto de fila
                const id = rowObject.id;
                const carnet = rowObject.carnet;
                const appaterno = rowObject.appaterno;
                // Y así sucesivamente para otras propiedades que necesites
            }
        }
        */
    };



	onMounted(()=>{
		load();
	});
</script>
<style scoped>
</style>
