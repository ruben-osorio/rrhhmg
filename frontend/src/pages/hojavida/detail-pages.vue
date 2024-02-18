<template>
    <div id="master-detailpage">
        <template v-if="auth.canView('cursos/list')">
            <div class="q-my-md">
                <div class="reset-grid">
                    <list-cursos-page ref="cursosListPage"  field-name="cursos.codhoja" :field-value="masterRecord.idhoja" :show-header="false" isSubPage>
                        </list-cursos-page>
                    </div>
                </div>
            </template>
            <template v-if="auth.canView('estudios/list')">
                <div class="q-my-md">
                    <div class="reset-grid">
                        <list-estudios-page ref="estudiosListPage"  field-name="estudios.codhoja" :field-value="masterRecord.idhoja" :show-header="false" isSubPage>
                            </list-estudios-page>
                        </div>
                    </div>
                </template>
                <template v-if="auth.canView('experiencia/list')">
                    <div class="q-my-md">
                        <div class="reset-grid">
                            <list-experiencia-page ref="experienciaListPage"  field-name="experiencia.codhoja" :field-value="masterRecord.idhoja" :show-header="false" isSubPage>
                                </list-experiencia-page>
                            </div>
                        </div>
                    </template>
                </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import { useAuth } from 'src/composables/auth';
import listCursosPage from "../cursos/list.vue";
import listEstudiosPage from "../estudios/list.vue";
import listExperienciaPage from "../experiencia/list.vue";
const props = defineProps({
	isSubPage: {
		type : Boolean,
		default : true,
	},
	scrollIntoView: {
		type : Boolean,
		default : false,
	},
});
const app = useApp();
const auth = useAuth();
const store = usePageStore('hojavida');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("");
function scrollToDetailPage() {
	if (props.scrollIntoView) {
		const pageElement = document.getElementById('master-detailpage');
		if(pageElement){
			pageElement.scrollIntoView({behavior:'smooth', block:'start'});
		}
	}
}
// pass form data from master to detail
function setDetailPageFormData(){
	const record = masterRecord.value;
	 
	// set cursos form data
	const cursosStore = usePageStore('cursos');
	cursosStore.setFormData({ codhoja:record?.idhoja });
	 
	// set estudios form data
	const estudiosStore = usePageStore('estudios');
	estudiosStore.setFormData({  });
	 
	// set experiencia form data
	const experienciaStore = usePageStore('experiencia');
	experienciaStore.setFormData({  });
}
watch(() => masterRecord, (current) => {
		setDetailPageFormData();
		scrollToDetailPage();
	},
	{ deep: true, immediate: true }
);
onMounted(()=>{
    scrollToDetailPage();
});
</script>
