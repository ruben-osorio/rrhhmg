<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <template v-if="auth.canView('eventuales/list')">
                <q-tab no-caps name="eventuales" icon="extension" label="Evaluacion Eventuales" />
            </template>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <template v-if="auth.canView('eventuales/list')">
                <q-tab-panel class="q-pa-none" name="eventuales">
                    <div class="reset-grid">
                        <list-eventuales-page ref="eventualesListPage"  field-name="eventuales.codevaluacion" :field-value="masterRecord.idevaluacion" :show-header="false" isSubPage>
                            </list-eventuales-page>
                        </div>
                    </q-tab-panel>
                </template>
            </q-tab-panels>
        </div>
</template>
<script setup>
import { watch, computed, ref, onMounted } from 'vue';
import { usePageStore } from 'src/stores/page';
import { useApp } from 'src/composables/app.js';
import { useAuth } from 'src/composables/auth';
import listEventualesPage from "../eventuales/list.vue";
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
const store = usePageStore('evaluacion');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("eventuales");
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
	 
	// set eventuales form data
	const eventualesStore = usePageStore('eventuales');
	eventualesStore.setFormData({ codevaluacion:record?.idevaluacion });
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
