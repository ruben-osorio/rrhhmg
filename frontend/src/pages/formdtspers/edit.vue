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
                                    Editar
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nrotitpos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnrotitpos" v-model.trim="formData.nrotitpos"  label="Nrotitpos" type="number" placeholder="Escribir Nrotitpos"   step="any"    
                                                    class="" :error="isFieldValid('nrotitpos')" :error-message="getFieldError('nrotitpos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Hrscursbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhrscursbasico" v-model.trim="formData.hrscursbasico"  label="Hrscursbasico" type="number" placeholder="Escribir Hrscursbasico"   step="any"    
                                                    class="" :error="isFieldValid('hrscursbasico')" :error-message="getFieldError('hrscursbasico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestioncursbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestioncursbasico" v-model="formData.gestioncursbasico" label="Gestioncursbasico"    :error="isFieldValid('gestioncursbasico')" :error-message="getFieldError('gestioncursbasico')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestioncursbasico" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestioncursbasico" @input="$refs.ctrlgestioncursbasico.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestionpos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestionpos" v-model="formData.gestionpos" label="Gestionpos"    :error="isFieldValid('gestionpos')" :error-message="getFieldError('gestionpos')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestionpos" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestionpos" @input="$refs.ctrlgestionpos.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestioncolegio 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestioncolegio" v-model="formData.gestioncolegio" label="Gestioncolegio"    :error="isFieldValid('gestioncolegio')" :error-message="getFieldError('gestioncolegio')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestioncolegio" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestioncolegio" @input="$refs.ctrlgestioncolegio.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Hrsotrcursos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhrsotrcursos" v-model.trim="formData.hrsotrcursos"  label="Hrsotrcursos" type="number" placeholder="Escribir Hrsotrcursos"   step="any"    
                                                    class="" :error="isFieldValid('hrsotrcursos')" :error-message="getFieldError('hrsotrcursos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nrotitbach 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnrotitbach" v-model.trim="formData.nrotitbach"  label="Nrotitbach" type="number" placeholder="Escribir Nrotitbach"   step="any"    
                                                    class="" :error="isFieldValid('nrotitbach')" :error-message="getFieldError('nrotitbach')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestionotrcursos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestionotrcursos" v-model="formData.gestionotrcursos" label="Gestionotrcursos"    :error="isFieldValid('gestionotrcursos')" :error-message="getFieldError('gestionotrcursos')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestionotrcursos" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestionotrcursos" @input="$refs.ctrlgestionotrcursos.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Finicioexp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlfinicioexp" v-model="formData.finicioexp" label="Finicioexp"    :error="isFieldValid('finicioexp')" :error-message="getFieldError('finicioexp')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlfinicioexp" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.finicioexp" @input="$refs.ctrlfinicioexp.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ffinexp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlffinexp" v-model="formData.ffinexp" label="Ffinexp"    :error="isFieldValid('ffinexp')" :error-message="getFieldError('ffinexp')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlffinexp" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.ffinexp" @input="$refs.ctrlffinexp.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Hrsidioma 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlhrsidioma" v-model.trim="formData.hrsidioma"  label="Hrsidioma" type="number" placeholder="Escribir Hrsidioma"   step="any"    
                                                    class="" :error="isFieldValid('hrsidioma')" :error-message="getFieldError('hrsidioma')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestionidioma 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestionidioma" v-model="formData.gestionidioma" label="Gestionidioma"    :error="isFieldValid('gestionidioma')" :error-message="getFieldError('gestionidioma')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestionidioma" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestionidioma" @input="$refs.ctrlgestionidioma.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nrotituniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnrotituniv" v-model.trim="formData.nrotituniv"  label="Nrotituniv" type="number" placeholder="Escribir Nrotituniv"   step="any"    
                                                    class="" :error="isFieldValid('nrotituniv')" :error-message="getFieldError('nrotituniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gestionuniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlgestionuniv" v-model="formData.gestionuniv" label="Gestionuniv"    :error="isFieldValid('gestionuniv')" :error-message="getFieldError('gestionuniv')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrlgestionuniv" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.gestionuniv" @input="$refs.ctrlgestionuniv.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nomidioma 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnomidioma" v-model.trim="formData.nomidioma"  label="Nomidioma" type="text" placeholder="Escribir Nomidioma"      
                                                    class="" :error="isFieldValid('nomidioma')" :error-message="getFieldError('nomidioma')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tipoidioma 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltipoidioma" v-model.trim="formData.tipoidioma"  label="Tipoidioma" type="text" placeholder="Escribir Tipoidioma"      
                                                    class="" :error="isFieldValid('tipoidioma')" :error-message="getFieldError('tipoidioma')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Certidioma 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcertidioma" v-model.trim="formData.certidioma"  label="Certidioma" type="text" placeholder="Escribir Certidioma"      
                                                    class="" :error="isFieldValid('certidioma')" :error-message="getFieldError('certidioma')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nomcursbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnomcursbasico" v-model.trim="formData.nomcursbasico"  label="Nomcursbasico" type="text" placeholder="Escribir Nomcursbasico"      
                                                    class="" :error="isFieldValid('nomcursbasico')" :error-message="getFieldError('nomcursbasico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Instcursbasico 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlinstcursbasico" v-model.trim="formData.instcursbasico"  label="Instcursbasico" type="text" placeholder="Escribir Instcursbasico"      
                                                    class="" :error="isFieldValid('instcursbasico')" :error-message="getFieldError('instcursbasico')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nomotrcursos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnomotrcursos" v-model.trim="formData.nomotrcursos"  label="Nomotrcursos" type="text" placeholder="Escribir Nomotrcursos"      
                                                    class="" :error="isFieldValid('nomotrcursos')" :error-message="getFieldError('nomotrcursos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Instotrcursos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlinstotrcursos" v-model.trim="formData.instotrcursos"  label="Instotrcursos" type="text" placeholder="Escribir Instotrcursos"      
                                                    class="" :error="isFieldValid('instotrcursos')" :error-message="getFieldError('instotrcursos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Certotrcursos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcertotrcursos" v-model.trim="formData.certotrcursos"  label="Certotrcursos" type="text" placeholder="Escribir Certotrcursos"      
                                                    class="" :error="isFieldValid('certotrcursos')" :error-message="getFieldError('certotrcursos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Entidadexp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlentidadexp" v-model.trim="formData.entidadexp"  label="Entidadexp" type="text" placeholder="Escribir Entidadexp"      
                                                    class="" :error="isFieldValid('entidadexp')" :error-message="getFieldError('entidadexp')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cargoexp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcargoexp" v-model.trim="formData.cargoexp"  label="Cargoexp" type="text" placeholder="Escribir Cargoexp"      
                                                    class="" :error="isFieldValid('cargoexp')" :error-message="getFieldError('cargoexp')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Funcionesexp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field  borderless   :error="isFieldValid('funcionesexp')" :error-message="getFieldError('funcionesexp')">
                                                    <q-option-group  ref="ctrlfuncionesexp" v-model="formData.funcionesexp" :options="app.menus.funcionesexpItems"   size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codusuario 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodusuario" v-model.trim="formData.codusuario"  label="Codusuario" type="text" placeholder="Escribir Codusuario"      
                                                    class="" :error="isFieldValid('codusuario')" :error-message="getFieldError('codusuario')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Codgestion 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcodgestion" v-model.trim="formData.codgestion"  label="Codgestion" type="text" placeholder="Escribir Codgestion"      
                                                    class="" :error="isFieldValid('codgestion')" :error-message="getFieldError('codgestion')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Grado 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgrado" v-model.trim="formData.grado"  label="Grado" type="text" placeholder="Escribir Grado"      
                                                    class="" :error="isFieldValid('grado')" :error-message="getFieldError('grado')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Curso 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcurso" v-model.trim="formData.curso"  label="Curso" type="text" placeholder="Escribir Curso"      
                                                    class="" :error="isFieldValid('curso')" :error-message="getFieldError('curso')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Titulobach 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitulobach" v-model.trim="formData.titulobach"  label="Titulobach" type="text" placeholder="Escribir Titulobach"      
                                                    class="" :error="isFieldValid('titulobach')" :error-message="getFieldError('titulobach')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Colegio 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcolegio" v-model.trim="formData.colegio"  label="Colegio" type="text" placeholder="Escribir Colegio"      
                                                    class="" :error="isFieldValid('colegio')" :error-message="getFieldError('colegio')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Carrerauniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcarrerauniv" v-model.trim="formData.carrerauniv"  label="Carrerauniv" type="text" placeholder="Escribir Carrerauniv"      
                                                    class="" :error="isFieldValid('carrerauniv')" :error-message="getFieldError('carrerauniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Casaestuniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcasaestuniv" v-model.trim="formData.casaestuniv"  label="Casaestuniv" type="text" placeholder="Escribir Casaestuniv"      
                                                    class="" :error="isFieldValid('casaestuniv')" :error-message="getFieldError('casaestuniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Calidaduniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcalidaduniv" v-model.trim="formData.calidaduniv"  label="Calidaduniv" type="text" placeholder="Escribir Calidaduniv"      
                                                    class="" :error="isFieldValid('calidaduniv')" :error-message="getFieldError('calidaduniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Niveluniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlniveluniv" v-model.trim="formData.niveluniv"  label="Niveluniv" type="text" placeholder="Escribir Niveluniv"      
                                                    class="" :error="isFieldValid('niveluniv')" :error-message="getFieldError('niveluniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Titulouniv 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitulouniv" v-model.trim="formData.titulouniv"  label="Titulouniv" type="text" placeholder="Escribir Titulouniv"      
                                                    class="" :error="isFieldValid('titulouniv')" :error-message="getFieldError('titulouniv')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cursopost 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcursopost" v-model.trim="formData.cursopost"  label="Cursopost" type="text" placeholder="Escribir Cursopost"      
                                                    class="" :error="isFieldValid('cursopost')" :error-message="getFieldError('cursopost')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nomcurspost 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnomcurspost" v-model.trim="formData.nomcurspost"  label="Nomcurspost" type="text" placeholder="Escribir Nomcurspost"      
                                                    class="" :error="isFieldValid('nomcurspost')" :error-message="getFieldError('nomcurspost')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Instpost 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlinstpost" v-model.trim="formData.instpost"  label="Instpost" type="text" placeholder="Escribir Instpost"      
                                                    class="" :error="isFieldValid('instpost')" :error-message="getFieldError('instpost')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Modalidadpost 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmodalidadpost" v-model.trim="formData.modalidadpost"  label="Modalidadpost" type="text" placeholder="Escribir Modalidadpost"      
                                                    class="" :error="isFieldValid('modalidadpost')" :error-message="getFieldError('modalidadpost')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Titpos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitpos" v-model.trim="formData.titpos"  label="Titpos" type="text" placeholder="Escribir Titpos"      
                                                    class="" :error="isFieldValid('titpos')" :error-message="getFieldError('titpos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
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
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'formdtspers',
		},
		routeName: {
			type: String,
			default: 'formdtspersedit',
		},
		pagePath: {
			type : String,
			default : 'formdtspers/edit',
		},
		apiPath: {
			type: String,
			default: 'formdtspers/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Grabar",
		},
		msgTitle: {
			type: String,
			default: "Actualizar registro",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Registro actualizado con éxito",
		},
		formValidationError: {
			type: String,
			default: "El formulario no es válido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor complete el formulario",
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
	});
	
	const store = usePageStore(props.pageName);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		nrotitpos: "", 
		hrscursbasico: "", 
		gestioncursbasico: new Date(), 
		gestionpos: new Date(), 
		gestioncolegio: new Date(), 
		hrsotrcursos: "", 
		nrotitbach: "", 
		gestionotrcursos: new Date(), 
		finicioexp: new Date(), 
		ffinexp: new Date(), 
		hrsidioma: "", 
		gestionidioma: new Date(), 
		nrotituniv: "", 
		gestionuniv: new Date(), 
		nomidioma: "", 
		tipoidioma: "", 
		certidioma: "", 
		nomcursbasico: "", 
		instcursbasico: "", 
		nomotrcursos: "", 
		instotrcursos: "", 
		certotrcursos: "", 
		entidadexp: "", 
		cargoexp: "", 
		funcionesexp: "", 
		codusuario: "", 
		codgestion: "", 
		grado: "", 
		curso: "", 
		titulobach: "", 
		colegio: "", 
		carrerauniv: "", 
		casaestuniv: "", 
		calidaduniv: "", 
		niveluniv: "", 
		titulouniv: "", 
		cursopost: "", 
		nomcurspost: "", 
		instpost: "", 
		modalidadpost: "", 
		titpos: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/formdtspers`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nrotitpos: { numeric },
		hrscursbasico: { numeric },
		hrsotrcursos: { numeric },
		nrotitbach: { numeric },
		hrsidioma: { numeric },
		nrotituniv: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Editar"
		}
	});
	onMounted(()=>{
		load();
	});
</script>
<style scoped>
</style>
