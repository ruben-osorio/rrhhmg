<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section " >
                    <div class="container">
                        <div class="row items-center q-col-gutter-x-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>
                                </q-btn>
                            </div>
                            <div  class="col col-md-auto " >
                                <div class=" text-h6 text-primary" >
                                    Agregar nuevo
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-lg">
                        <div  class="col-12 col-lg-12 col-md-12 comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <evalusersv-users-page ref="usersListPage"  :show-header="true" :show-breadcrumbs="true" :show-footer="false" :paginate="false">
                                    </evalusersv-users-page>
                                </div>
                            </div>
                        </div>
                        <div  class="col-12 col-md-12 comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <listeval-planillapresupuestaria-page ref="planillaPresupuestariaListPage"  :show-header="true" :show-breadcrumbs="true" :show-footer="false" :paginate="true">
                                        </listeval-planillapresupuestaria-page>
                                </div>
                            </div>
                        </div>
                        <p></p>

                        <div  class="col-12 col-lg-12 col-md-12 comp-grid" >

                            <div  class="col col-md-auto " >
                                <div class=" text-h6 text-primary" >
                                    EVALUACIÓN
                                </div>
                                <p></p>
                            </div>

                            <div class="">
                                <div class="reset-grid">

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="text-h7">POSTULANTE {{ `${newNombre1} ${newAppaterno} ${newApmaterno}` }}</div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="text-h7">PERFIL CARGO</div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="text-h7">ACCIÓN</div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <!-- Primera fila -->
                                        <div class="col-md-4">
                                            <!-- Card 1 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Formación Académica
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    {{ `${data.Ncalidaduniver} - ${data.Nniveluniv} - ${data.Ncarrerauniv} - ${data.Ngestionuniv}` }}
                                                </q-card-section>
                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 2 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Formación según perfil
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    {{ `${dataPC.Nformacadref} - ${dataPC.Nobselg} - ${dataPC.Nobsele} ` }}

                                                </q-card-section>

                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 3 -->
                                            <q-card class="no-shadow" bordered>

                                                <q-separator />

                                                <q-card-actions align="left">
                                                    <q-btn label="Cumple" class="text-capitalize q-ma-sm" color="indigo-7" />

                                                    <q-btn label="No cumple" class="text-capitalize q-ma-sm" color="indigo-7" />
                                                </q-card-actions>
                                                <q-card-section>


                                                </q-card-section>
                                            </q-card>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="text-h5"></div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="text-h5"> </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="text-h5"></div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <!-- Primera fila -->
                                        <div class="col-md-4">
                                            <!-- Card 1 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Experiencia General
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    Contenido de la Card 1
                                                </q-card-section>
                                                <q-card-actions align="left">
                                                    <q-btn label="Botón 1" class="text-capitalize q-ma-sm" color="indigo-7" />
                                                </q-card-actions>
                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 2 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Experiencia Perfil
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    Contenido de la Card 2
                                                </q-card-section>
                                                <q-card-actions align="left">
                                                    <q-btn label="Botón 2" class="text-capitalize q-ma-sm" color="indigo-7" />
                                                </q-card-actions>
                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 3 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Acción
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    Contenido de la Card 3
                                                </q-card-section>
                                                <q-card-actions align="left">
                                                    <q-btn label="Botón 3" class="text-capitalize q-ma-sm" color="indigo-7" />
                                                </q-card-actions>
                                            </q-card>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="page-section q-mb-md" >
                <div class="container-fluid">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-2" >

                                    <q-card bordered class="no-shadow">
                                        <q-item>
                                            <q-item-section avatar>
                                                <q-avatar size="60px" class="shadow-10">
                                                    <!-- Aquí puedes proporcionar una URL de imagen fija -->
                                                    <img src="ruta/a/tu/imagen.jpg" alt="Avatar">
                                                </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <!-- Proporciona nombres, descripciones y correos electrónicos fijos -->
                                                <q-item-label class="text-grey-8 text-weight-bold">Nombre Fijo</q-item-label>
                                                <q-item-label caption>
                                                    Descripción Fija
                                                </q-item-label>
                                                <q-item-label class="text-grey-8">
                                                    email@example.com
                                                </q-item-label>
                                            </q-item-section>


                                        </q-item>

                                        <q-separator></q-separator>
                                        <q-card-section>
                                            <div class="q-pa-sm text-grey-8">
                                                <!-- Puedes proporcionar un texto de introducción fijo -->
                                                Intro: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...
                                            </div>
                                        </q-card-section>
                                    </q-card>

                        </div>
                        <div  class="col-md-2" >

                            <q-card class="no-shadow" bordered>
                                <q-card-section>
                                <div class="text-h6 text-grey-8">
                                    {{ `${newNombre1} ${newAppaterno} ${newApmaterno}` }}
                                </div>
                                </q-card-section>
                                <q-separator/>
                                <q-card-section>
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                </q-card-section>

                            </q-card>

                        </div>



                        <div  class="col-md-2" >

                            <q-card class="no-shadow" bordered>
                                <q-card-section>
                                <div class="text-h6 text-grey-8">
                                    Experiencia General
                                </div>
                                </q-card-section>
                                <q-separator/>
                                <q-card-section>
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                </q-card-section>
                                <q-card-actions align="left">
                                <q-btn label="CUMPLE" class="text-capitalize q-ma-sm" color="indigo-7"/>
                                </q-card-actions>
                            </q-card>

                        </div>

                        <div  class="col-md-2" >

                            <q-card class="no-shadow" bordered>
                                <q-card-section>
                                <div class="text-h6 text-grey-8">
                                    Experiencia Específica
                                </div>
                                </q-card-section>
                                <q-separator/>
                                <q-card-section>
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                </q-card-section>
                                <q-card-actions align="left">
                                <q-btn label="CUMPLE" class="text-capitalize q-ma-sm" color="indigo-7"/>
                                </q-card-actions>
                            </q-card>

                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section q-mb-md" >
                <div class="row q-col-gutter-x-lg">
                <div class="col-sm-6">
                    <div class="mb-3">
                        <h5>Experiencia General</h5>

                    </div>
                    <q-table
                        :rows="experienciahv"
                        :columns="columns"
                        row-key="idexp_hv"
                        >
                        <template v-slot:body-cell-Entidad="props">
                            <q-td :props="props">
                            {{ props.row.entidad_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Cargo="props">
                            <q-td :props="props">
                            {{ props.row.cargo_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Funciones="props">
                            <q-td :props="props">
                            {{ props.row.funciones_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-FInicio="props">
                            <q-td :props="props">
                            {{ props.row.f_inicio_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-FFin="props">
                            <q-td :props="props">
                            {{ props.row.f_fin_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-CodGestion="props">
                            <q-td :props="props">
                            {{ props.row.codgestion }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-CodUsuario="props">
                            <q-td :props="props">
                            {{ props.row.codusuario }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Sumatoria="props">
                            <q-td :props="props">
                            {{ props.row.sumatoria }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-SumatoriaTotal="props">
                            <q-td :props="props">
                            {{ props.row.sumatoriatotal }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Duration="props">
                            <q-td :props="props">
                            {{ props.row.a }} years {{ props.row.m }} months {{ props.row.d }} days
                            </q-td>
                        </template>
                    </q-table>

                </div>


                <div class="col-sm-6">
                    <div class="mb-3">
                        <h5>Experiencia Específica</h5>

                    </div>
                    <q-table
                        :rows="experienciahv"
                        :columns="columns"
                        row-key="idexp_hv"
                        >
                        <template v-slot:body-cell-Entidad="props">
                            <q-td :props="props">
                            {{ props.row.entidad_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Cargo="props">
                            <q-td :props="props">
                            {{ props.row.cargo_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Funciones="props">
                            <q-td :props="props">
                            {{ props.row.funciones_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-FInicio="props">
                            <q-td :props="props">
                            {{ props.row.f_inicio_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-FFin="props">
                            <q-td :props="props">
                            {{ props.row.f_fin_hv }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-CodGestion="props">
                            <q-td :props="props">
                            {{ props.row.codgestion }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-CodUsuario="props">
                            <q-td :props="props">
                            {{ props.row.codusuario }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Sumatoria="props">
                            <q-td :props="props">
                            {{ props.row.sumatoria }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-SumatoriaTotal="props">
                            <q-td :props="props">
                            {{ props.row.sumatoriatotal }}
                            </q-td>
                        </template>
                        <template v-slot:body-cell-Duration="props">
                            <q-td :props="props">
                            {{ props.row.a }} years {{ props.row.m }} months {{ props.row.d }} days
                            </q-td>
                        </template>
                    </q-table>

                </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onBeforeMount, onUnmounted } from 'vue';
	import { required, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
    import { ApiService } from 'src/services/api';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	import evalusersvUsersPage from "../users/evalusersv.vue";
    import listevalPlanillapresupuestariaPage from "../planilla_presupuestaria/listeval.vue";
 //   import prlistPerfilreferencialPage from "../perfilreferencial/prlist.vue";
 //   import  storex  from 'src/stores/storex';
    import { useDatosBasicosStore } from 'src/stores/storex';
    import { onMounted } from 'vue';
    import { usePlanillaPStore } from 'src/stores/storepp';

	const props = defineProps({
		pageName : {
			type : String,
			default : 'eval_temp_grid',
		},
		routeName : {
			type : String,
			default : 'eval_temp_gridadd',
		},
		apiPath : {
			type : String,
			default : 'eval_temp_grid/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Guardar",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
		},
		msgTitle: {
			type: String,
			default: "Crear registro",
		},
		msgAfterSave: {
			type: String,
			default: "Grabar agregado exitosamente",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => {}
		},
	});

    const newNombre1 = ref('');
    const newAppaterno = ref('');
    const newApmaterno = ref('');
    const newCodusuario = ref('');

    const data = ref({
        Ncalidaduniver: '',
        Nniveluniv: '',
        Ncarrerauniv: '',
        Ngestionuniv: ''
    });

    const handleDatosbasicosChange = (appaterno, apmaterno, nombre1, codusuario) => {
        console.log('Nuevo Datosbasicos:', codusuario);
        newNombre1.value = nombre1;
        newAppaterno.value = appaterno;
        newApmaterno.value = apmaterno;
        newCodusuario.value = codusuario;
    };

    onBeforeMount(async () => {
    const datosBasicosStore = useDatosBasicosStore();
    const unsubscribe = datosBasicosStore.$subscribe((mutation) => {
        if (mutation.storeId === 'datosBasicos') {
            handleDatosbasicosChange(datosBasicosStore.appaterno, datosBasicosStore.apmaterno, datosBasicosStore.nombre1, datosBasicosStore.codusuario);
            performAction(datosBasicosStore.codusuario);
        }
        });


    const PlanillaPStore = usePlanillaPStore();
    const unsubscribePP = PlanillaPStore.$subscribe((mutation) => {
        if (mutation.storeId === 'datosPlanillaP') {
            handleDatosbasicosChangePP(PlanillaPStore.nivel, PlanillaPStore.clasificacion, PlanillaPStore.fuente, PlanillaPStore.cargo, PlanillaPStore.puesto);
            performActionPC(PlanillaPStore.nivel);
        }
        });

        onUnmounted(unsubscribe, unsubscribePP); // Asegúrate de desuscribirte cuando el componente se desmonte
    });


    const performAction = async (codusuario) => {
        console.log('performAction:', codusuario);
        try {


           // const confirmed = window.confirm('¿Estás seguro de seleccionar el CV?');
/*
            if (!confirmed) {
                // El usuario canceló la acción
                return;
            }
*/
            const url = `/formestudiossup3/index/codusuario/${codusuario}`;
            const response = await ApiService.get(url);
            const record = response.data;
        //	return record;

            if (record && record.records && record.records.length > 0) {
                console.log('Datos obtenidos:', JSON.stringify(record));
                const recordData = record.records[0];
                /*
                Ncalidaduniver.value = recordData.calidaduniver;
                Nniveluniv.value = recordData.niveluniv;
                Ncarrerauniv.value = recordData.carrerauniv;
                Ngestionuniv.value = recordData.gestionuniv;
                */
                data.value.Ncalidaduniver = recordData.calidaduniver;
                data.value.Nniveluniv = recordData.niveluniv;
                data.value.Ncarrerauniv = recordData.carrerauniv;
                data.value.Ngestionuniv = recordData.gestionuniv;

                console.log('Ncalidaduniver:', data.value.Ncalidaduniver);
                console.log('Nniveluniv:', data.value.Nniveluniv);
                // Puedes realizar acciones adicionales después de una operación exitosa
            } else {
                console.error('Error: No se encontraron datos de educación superior');
            }

        }
        catch (err) {
            console.error('Error al realizar la solicitud:', err);
            throw err;
        }
    };

    /* Tabla Experiencia General */


    /*Formacion segun perfil Inicio*/
    const newNivel = ref('');
    const newClasificacion= ref('');
    const newFuente = ref('');
    const newCargo = ref('');

    const dataPC = ref({
        Nnivelref: '',
        Ndenomref: '',
        Nhaberbasicoref: '',
        Nformacadref: '',
        Nanioelg: '',
        Nmeselg: '',
        Nobselg: '',
        Nanioele: '',
        Nmesele: '',
        Nobsele: ''

    });

    const handleDatosbasicosChangePP = (nivel, clasificacion, fuente, cargo, puesto) => {
        console.log('Nuevo clasificacion:', clasificacion);
        newNivel.value = nivel;
        newClasificacion.value = clasificacion;
        newFuente.value = fuente;
        newCargo.value = cargo;
    };


    const performActionPC = async (nivel) => {
        console.log('performActionPC:', nivel);
        try {

            const url = `/perfilreferencial/index/nivelref/${nivel}`;
            const response = await ApiService.get(url);
            const recordP = response.data;
        //	return record;

            if (recordP && recordP.records && recordP.records.length > 0) {
                console.log('Datos obtenidos:', JSON.stringify(recordP));
                const recordDataP = recordP.records[0];
                /*
                Ncalidaduniver.value = recordData.calidaduniver;
                Nniveluniv.value = recordData.niveluniv;
                Ncarrerauniv.value = recordData.carrerauniv;
                Ngestionuniv.value = recordData.gestionuniv;
                */
                dataPC.value.Nnivelref = recordDataP.nivelref;
                dataPC.value.Ndenomref = recordDataP.denomref;
                dataPC.value.Nhaberbasicoref = recordDataP.haberbasicoref;
                dataPC.value.Nformacadref = recordDataP.formacadref;
                dataPC.value.Nanioelg = recordDataP.anioelg;
                dataPC.value.Nmeselg = recordDataP.meselg;
                dataPC.value.Nobselg = recordDataP.obselg;
                dataPC.value.Nanioele = recordDataP.anioele;
                dataPC.value.Nmesele = recordDataP.mesele;
                dataPC.value.Nobsele = recordDataP.obsele;

                console.log('Ndenomref:', dataPC.value.Ndenomref);
                // Puedes realizar acciones adicionales después de una operación exitosa
            } else {
                console.error('Error: No se encontraron datos de perfil');
            }

        }
        catch (err) {
            console.error('Error al realizar la solicitud:', err);
            throw err;
        }
    };
    /*Formacion segun perfil Fin*/


    const experienciahv = ref([
  {
    idexp_hv: 1,
    entidad_hv: 'Empresa 1',
    cargo_hv: 'Cargo 1',

    f_inicio_hv: '2022-01-01',
    f_fin_hv: '2023-01-01',
    codgestion: 'Gestión 1',

    sumatoria: 'Sumatoria 1',
    sumatoriatotal: 'Sumatoria Total 1',
    a: 1,
    m: 0,
    d: 0
  },
  // Agrega más datos aquí según sea necesario
]);

const columns = ref([
  { name: 'Entidad', required: true, label: 'Entidad', align: 'left', field: 'entidad_hv', sortable: true },
  { name: 'Cargo', required: true, label: 'Cargo', align: 'left', field: 'cargo_hv', sortable: true },

  { name: 'FInicio', required: true, label: 'Fecha de Inicio', align: 'left', field: 'f_inicio_hv', sortable: true },
  { name: 'FFin', required: true, label: 'Fecha de Fin', align: 'left', field: 'f_fin_hv', sortable: true },
  { name: 'CodGestion', required: true, label: 'Código de Gestión', align: 'left', field: 'codgestion', sortable: true },

  { name: 'Sumatoria', required: true, label: 'Sumatoria', align: 'left', field: 'sumatoria', sortable: true },
  { name: 'SumatoriaTotal', required: true, label: 'Sumatoria Total', align: 'left', field: 'sumatoriatotal', sortable: true },
  { name: 'Duration', required: true, label: 'Duración', align: 'left', field: '', sortable: false }
]);

    /* Tabla EG fin */

	const store = usePageStore(props.pageName);
	const app = useApp();// application state and methods
	const formDefaultValues = {
		codusuario: "",
		idref: "",
		ultimo_secund_perfil: "",
		estadof1: "",
		ultimo_universit_perfil: "",
		estadof2: "",
		postgrado_perfil: "",
		estadof3: "",
		denominacion: "",
	};
	const formData = reactive({ ...formDefaultValues });
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
		}
	});
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });// page form hook
	//event raised before form submit
	function beforeSubmit(){
		return true;
	}
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); //reset form data
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/eval_temp_grid`);
		}
	}
	const {  saving, pageReady,   } = toRefs(page.state);
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;


	useMeta(() => {
		return {
			//set browser title
			title: "Agregar nuevo"
		}
	});
	// expose page object for other components access
	defineExpose({
		page
	});

</script>
<style scoped>
</style>
<style scoped>

</style>
