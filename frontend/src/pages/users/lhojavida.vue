<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Evaluación Curricular
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <template v-if="auth.canView('/users/add')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/users/add`" class="" >
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
                    <div  class="col-auto comp-grid" >
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
                                        :columns="app.menus.UsersLhojavidaHeaderItems"
                                        :rows="records"
                                        :binary-state-sort="true"
                                        separator="horizontal"
                                        :dense="true"
                                        v-model:selected="selectedItems"
                                        selection="multiple"
                                        row-key="id"
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
                                                                    <template v-if="auth.canView('users/view')">
                                                                        <q-item link clickable v-ripple :to="`/users/view/${props.row.id}`">
                                                                            <q-item-section>
                                                                                <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                            </q-item-section>
                                                                            <q-item-section>View</q-item-section>
                                                                        </q-item>
                                                                    </template>
                                                                    <template v-if="auth.canManage('users/edit', props.row.id)">
                                                                        <q-item link clickable v-ripple :to="`/users/edit/${props.row.id}`">
                                                                            <q-item-section>
                                                                                <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                            </q-item-section>
                                                                            <q-item-section>Edit</q-item-section>
                                                                        </q-item>
                                                                    </template>
                                                                    <template v-if="auth.canManage('users/delete', props.row.id)">
                                                                        <q-item link clickable v-ripple @click="deleteItem(props.row.id)">
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
                                                <q-td auto-width key="masterdetailbtn" :props="props">
                                                    <q-btn @click="setCurrentRecord(props.row)" flat padding="xs" color="primary" no-caps  icon="more_vert">
                                                    </q-btn>
                                                </q-td>

                                                <q-td auto-width key="accion" :props="props">
                                                <q-btn flat padding="xs" color="primary" no-caps @click="performAction(props.row)">
                                                    CVC
                                                </q-btn>
                                                </q-td>
                                                <q-td  key="nombre1" :props="props">
                                                    {{ props.row.nombre1 }}
                                                </q-td>
                                                <q-td  key="nombre2" :props="props">
                                                    {{ props.row.nombre2 }}
                                                </q-td>
                                                <q-td  key="appaterno" :props="props">
                                                    {{ props.row.appaterno }}
                                                </q-td>
                                                <q-td  key="apmaterno" :props="props">
                                                    {{ props.row.apmaterno }}
                                                </q-td>
                                                <q-td  key="carnet" :props="props">
                                                    {{ props.row.carnet }}
                                                </q-td>
                                                <q-td  key="expedido" :props="props">
                                                    {{ props.row.expedido }}
                                                </q-td>
                                                <q-td  key="telefono" :props="props">
                                                    {{ props.row.telefono }}
                                                </q-td>
                                                <q-td  key="fecha_nacimiento" :props="props">
                                                    {{ props.row.fecha_nacimiento }}
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

    import { StorageService } from 'src/services/storage';
    import { ApiService } from 'src/services/api';
	import { defineAsyncComponent, computed, ref, toRefs, onMounted, reactive } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAuth } from 'src/composables/auth';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
    import { useAddPage } from 'src/composables/addpage';


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
			default : 'userslhojavida',
		},
		apiPath : {
			type : String,
			default : 'users/lhojavida',
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
			default: 5,
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
			return "Evaluación Curricular"
		}
	});
	const masterDetailPage = computed(() => defineAsyncComponent(() => import("./detail-pages.vue")));

	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});


    //Inicio Cambio ADD

    //Fin Cambio ADD
/*
    const getToken2 = async () => {
    try {

        const response = await axios.post('http://localhost:8063/api/auth/login', {
            username: "made",
            password: "Roacorp48"
        });

        if (response.data.token) {
            console.log('Devolviendo token:' + response.data.token );
            return response.data.token;
        } else {
            throw new Error('No se recibió un token de autenticación.');
        }
    } catch (error) {
        throw new Error('Error al obtener el token: ' + error.message);
    }
    };


*/




    const performAction = async (row) => {

        try {

            const confirmed = window.confirm('¿Estás seguro de seleccionar el CV?');

            if (!confirmed) {
                // El usuario canceló la acción
                return;
            }

			const response = await ApiService.post('/users/add_bandeja1', {
            valor1: row.valor1,
            valor2: row.valor2,
            valor3: row.valor3,
            });
			const record = response.data;
		//	return record;

            if (response.data.success) {
            console.log('Datos agregados correctamente');
            // Puedes realizar acciones adicionales después de una operación exitosa
        } else {
            console.error('Error al agregar datos:', response.data.message);
        }

		}
		catch (err) {
			throw err;
		}
    };

        //try {

        /*
        const authToken = await getToken();



        // Configurar los encabezados de la solicitud con el token
        const headers = {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'X-CSRF-Token': await getCSRFToken()
        };
        */

        /*
        axios.defaults.baseURL = 'http://localhost:8063/api';
        axios.defaults.headers.post['Content-Type']  = 'application/json';
        let token = StorageService.getToken();
        if (token) {
            console.log('Devolviendo token:' + token );
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        }



        // Realizar la solicitud HTTP al endpoint '/add_bandeja1'
        const response = await axios.post('/add_bandeja1', {
            valor1: row.valor1,
            valor2: row.valor2,
            valor3: row.valor3,
        });



        // Verificar la respuesta del servidor
        if (response.data.success) {
            console.log('Datos agregados correctamente');
            // Puedes realizar acciones adicionales después de una operación exitosa
        } else {
            console.error('Error al agregar datos:', response.data.message);
        }
    } catch (error) {
        console.error('Error en la solicitud HTTP:', error);
    }

};
*/

onMounted(()=>{
		load();
	});

</script>
<style scoped>
</style>
