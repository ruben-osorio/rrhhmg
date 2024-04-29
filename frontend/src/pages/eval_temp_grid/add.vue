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


                                                    {{ `${dataFS3.Ncursoesc} - ${dataFS3.Ninstitucion} - ${dataFS3.Nnivelesc} - TÍTULO: ${dataFS3.Ntitbachiller}` }}
                                                    <br>
                                                    {{ `${data.Ncarrerauniv}  - ${data.Ncalidaduniver} - ${data.Nniveluniv}` }}

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


                                                    {{ `${dataPC.Nformacadref} ` }} <br>
                                                  <!-- quitado el 21 abril   {{ `${dataPC.Nobselg} - ${dataPC.Nobsele} - ${dataPC.Nanioelg} AÑOS - ${dataPC.Nmeselg}` }}  -->
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


                                                <q-list bordered separator>
                                                    <q-item v-for="(record, index) in recordEG.records" :key="index">
                                                        <q-item-section>
                                                        <q-item-label header>
                                                            {{ record.entidad_hv }}
                                                        </q-item-label>
                                                        <q-item-label>
                                                            <span>Fecha de inicio: {{ record.f_inicio_hv }}</span><br>
                                                       <!--21 ABRIL     <span>Fecha de fin: {{ record.f_fin_hv }}</span><br>  -->
                                                          <!--  <span>Funciones: {{ record.funciones_hv }}</span><br>    -->
                                                            <span>Cargo: {{ record.cargo_hv }}</span><br>
                                                            <!-- Agrega más campos según sea necesario -->
                                                        </q-item-label>
                                                        <span>Sumatoria: {{ record.sumatoria }}</span>
                                                        </q-item-section>
                                                    </q-item>

                                                </q-list>

                                                </q-card-section>

                                                <q-card-section>

                                                    <div class="text-h6 text-grey-8">
                                                    Sumatoria Total:
                                                        <template v-if="sumTotal.totA || sumTotal.totM">
                                                            {{ `${sumTotal.totA}` }} años, {{ `${sumTotal.totM}` }} meses
                                                        </template>
                                                        <template v-else>
                                                            Sin datos
                                                        </template>
                                                    </div>

                                                </q-card-section>
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

                                                   <!-- 21 ABRIL  {{ `${dataPC.Nanioelg} años, ${dataPC.Nmeselg} meses\n${dataPC.Nobselg}` }} -->
																{{ dataPC.Nobselg}}
                                                </q-card-section>

                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 3 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Estado
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    <q-chip
                                                        v-if="EstadoExpPerfil == 'CUMPLE'" color="teal"   text-color="white" icon="check">
                                                        CUMPLE
                                                    </q-chip>
                                                    <q-chip
                                                        v-else
                                                        class="glossy"
                                                        color="orange"
                                                        text-color="white"
                                                        icon="exclamation"
                                                        >
                                                        NO CUMPLE
                                                    </q-chip>
                                                </q-card-section>

                                            </q-card>
                                        </div>
                                    </div>




                                    <div class="row">
                                        <!-- Primera fila -->
                                        <div class="col-md-4">
                                            <!-- Card 1 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Experiencia Específica
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    <q-table
                                                        :rows="recordEG.records"
                                                        :columns="[...columnsEG, { name: 'select', label: 'Seleccionar', align: 'center' }]"
                                                        row-key="idexp_hv" >

                                                        <template v-slot:body-cell-select="props">
                                                            <q-checkbox v-model="props.row.selected"></q-checkbox>
                                                        </template>

                                                        <template v-slot:body-cell-entidad_hv="props">
                                                        {{ props.row.entidad_hv }}
                                                        </template>

                                                        <template v-slot:body-cell-f_inicio_hv="props">
                                                           Fecha Inicio:  {{ formatDate(props.row.f_inicio_hv) }}
                                                        </template>

                                                        <template v-slot:body-cell-funciones_hv="props">
                                                        {{ props.row.funciones_hv }}
                                                        </template>

                                                    </q-table>
                                                </q-card-section>

                                            </q-card>
                                        </div>


                                        <div class="col-md-4">
                                            <!-- Card 2 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Experiencia Perfil Específica
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>

                                               <!-- 21 ABRIL  {{ `${dataPC.Nanioele} años, ${dataPC.Nmesele} meses <br> ${dataPC.Nobsele}` }}  -->
													{{ dataPC.Nobsele }}
                                                </q-card-section>

                                            </q-card>
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Card 3 -->
                                            <q-card class="no-shadow" bordered>
                                                <q-card-section>
                                                    <div class="text-h6 text-grey-8">
                                                        Estado
                                                    </div>
                                                </q-card-section>
                                                <q-separator />
                                                <q-card-section>
                                                    Contenido de la Card 3
                                                </q-card-section>

                                            </q-card>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>

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


    const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
    };

   // const sumTotal = ref('');
const sumTotal = ref({ totA: 0, totM: 0, totD: 0 });
const recordEG = ref({ records: [] });
let totA = 0;
let totM = 0;
let totD = 0;

const EstadoExpPerfil = ref(' sdvd CUMPLE');
function actualizarEstadoExpPerfil(sumTotalaux, dataPCNob) {
    console.log('datos de cumplimiento sumTot:', sumTotalaux , ' dataPCNob: ', dataPCNob )
    if (sumTotalaux >= dataPCNob) {
      EstadoExpPerfil.value = 'CUMPLE';
    } else {
      EstadoExpPerfil.value = 'NO';
    }
}
const sumaTotal = () => {
        let totA = 0;
        let totM = 0;
        let totD = 0;

        for ( const rec of recordEG.value.records )
        {
            totA += rec.a || 0;
            totM += rec.m || 0;
            totD += rec.d || 0;
        }

        if (totD >= 30) {
        // Incrementar meses en 1 por cada 31 días
        totM += Math.floor(totD / 30);
        // Restar los días adicionales que se convierten en meses
        totD %= 30;
        }

        // Verificar si los meses superan los 12
        if (totM >= 12) {
            // Incrementar años en 1 por cada 12 meses
            totA += Math.floor(totM / 12);
            // Restar los meses adicionales que se convierten en años
            totM %= 12;
        }


        return  {totA, totM, totD};
    };

   // sumTotal.value = sumaTotal();

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
            performActionFS3(datosBasicosStore.codusuario);
            // handleExperienciaGralChange (ExpGralStore.idexp_hv, ExpGralStore.f_inicio_hv, ExpGralStore.f_fin_hv, ExpGralStore.funciones_hv, ExpGralStore.codusuario, ExpGralStore.sumatoria, ExpGralStore.codgestion, ExpGralStore.entidad_hv, ExpGralStore.cargo_hv, ExpGralStore.anyo, ExpGralStore.mes, ExpGralStore.dia, ExpGralStore.sumatoriatotal);
            performActionExpGral(datosBasicosStore.codusuario);

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

            const url = `/formestudiossup3/index/codusuario/${codusuario}`;
            const response = await ApiService.get(url);
            const record = response.data;

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




    const dataFS3 = ref({
        Nidformestudios: '',
        Ninstitucion: '',
        Nnivelesc: '',
        Nnrotitbachiller: '',
        Ntitbachiller: '',
        Ncursoesc: '',
        Ncodusuario: '',
        Ncodgestion: null
    });

    const performActionFS3 = async (codusuario) => {
        try {

            const url = `/formestudios3/index/codusuario/${codusuario}`;
            const response = await ApiService.get(url);
            const record = response.data;

            if (record && record.records && record.records.length > 0) {
                console.log('Datos obtenidos:', JSON.stringify(record));
                const recordDataFS3 = record.records[0];
                dataFS3.value.Nidformestudios = recordDataFS3.idformestudios;
                dataFS3.value.Ninstitucion = recordDataFS3.institucion;
                dataFS3.value.Nnivelesc = recordDataFS3.nivelesc;
                dataFS3.value.Nnrotitbachiller = recordDataFS3.nrotitbachiller;
                dataFS3.value.Ntitbachiller = recordDataFS3.titbachiller;
                dataFS3.value.Ncursoesc = recordDataFS3.cursoesc;
                dataFS3.value.Ncodusuario = recordDataFS3.codusuario;
                dataFS3.value.Ncodgestion = recordDataFS3.codgestion;
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

                actualizarEstadoExpPerfil(totA, dataPC.value.Nanioelg);
               /* if ( sumTotal >= dataPC.value.Nobselg  )
                  EstadoExpPerfil.value = 'CUMPLE'
                else
                  EstadoExpPerfil.value = 'NO'

                  */
              //  console.log('Ndenomref:', dataPC.value.Ndenomref);
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



    /*Experiencia inicio*/

    const dataEx = ref({
        Nidexp_hv: '',
        Nf_inicio_hv: '',
        Nf_fin_hv: '',
        Nfunciones_hv: '',
        Ncodusuario: '',
        Nsumatoria: '',
        Ncodgestion: '',
        Nentidad_hv: '',
        Ncargo_hv: '',
        Nanyo: '',
        Nmes: '',
        Ndia: '',
        Nsumatoriatotal: ''
    });

    const handleExperienciaGralChange = (idexp_hv, f_inicio_hv, f_fin_hv, funciones_hv, codusuario, sumatoria, codgestion, entidad_hv, cargo_hv, anyo, mes, dia, sumatoriatotal) => {
        console.log('funciones_hv:', funciones_hv);
         newIdexp_hv = idexp_hv;
         newF_inicio_hv = f_inicio_hv;
         newF_fin_hv = f_fin_hv;
         newFunciones_hv = funciones_hv;
         newCodusuario = codusuario;
         newSumatoria = sumatoria;
         newCodgestion = codgestion;
         newEntidad_hv = entidad_hv;
         newCargo_hv = cargo_hv;
         newAnyo = anyo;
         newMes = mes;
         newDia = dia;
         newSumatoriatotal = sumatoriatotal;
    };


    //({});
    const selectedRows = ref([]);
  //  sumaTotal();


    const performActionExpGral = async (codusuario) => {
        console.log('performActionExpGral:', codusuario);
        try {

            const url = `/experienciahv/index/codusuario/${codusuario}`;
            const response = await ApiService.get(url);
            recordEG.value = response.data;

            //sumaTotal();

        let totA = 0;
        let totM = 0;
        let totD = 0;

        for ( const rec of recordEG.value.records )
        {
            totA += rec.a || 0;
            totM += rec.m || 0;
            totD += rec.d || 0;
        }

        if (totD >= 30) {
        // Incrementar meses en 1 por cada 31 días
        totM += Math.floor(totD / 30);
        // Restar los días adicionales que se convierten en meses
        totD %= 30;
        }

        // Verificar si los meses superan los 12
        if (totM >= 12) {
            // Incrementar años en 1 por cada 12 meses
            totA += Math.floor(totM / 12);
            // Restar los meses adicionales que se convierten en años
            totM %= 12;
        }

     //   sumTotal.totA = totA;
        sumTotal.value.totA = totA;
        sumTotal.value.totM = totM;
        sumTotal.value.totD = totD;

        actualizarEstadoExpPerfil(totA, dataPC.value.Nanioelg);
        /*
             console.log ('Total de Años: ', totA);
        console.log ('Total de Mes: ', sumTotal.totA);
        console.log ('Total de Dias: ', sumTotal.value.totA);
*/
    //      if (recordEG && recordEG.records && recordEG.records.length > 0) {
            if (recordEG.value && Array.isArray(recordEG.value.records) && recordEG.value.records.length > 0) {
                console.log('Datos obtenidos EG:', JSON.stringify(recordEG.value));
                const recordDataEG = recordEG.value.records[0];

                dataEx.value.Nidexp_hv = recordDataEG.idexp_hv;
                dataEx.value.Nf_inicio_hv = recordDataEG.f_inicio_hv;
                dataEx.value.Nf_fin_hv = recordDataEG.f_fin_hv;
                dataEx.value.Nfunciones_hv = recordDataEG.funciones_hv;

                console.log('Nfunciones_hv:', dataEx.value.Nfunciones_hv);
            } else {
                console.error('Error: No se encontraron datos de experiencoa de trabajo');
            }

        }
        catch (err) {
            console.error('Error al realizar la solicitud:', err);
            throw err;
        }
    };





    const columnsEG = ref([
                    { name: 'entidad_hv', label: 'Entidad' },
                    { name: 'f_inicio_hv', label: 'Fecha de Inicio' },
                    { name: 'f_fin_hv', label: 'Fecha de Fin' },
                    { name: 'funciones_hv', label: 'Funciones' }
                    // Agrega más columnas según sea necesario
                    ]);
    /*Experiencia fin*/


    const selectedItems = ref([]);
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
