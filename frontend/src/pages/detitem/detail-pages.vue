<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <template v-if="auth.canView('detescala/list')">
                <q-tab no-caps name="detescala" icon="extension" label="Detitem Detescala" />
            </template>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <template v-if="auth.canView('detescala/list')">
                <q-tab-panel class="q-pa-none" name="detescala">
                    <div class="reset-grid">
                        <list-detescala-page ref="detescalaListPage"  field-name="detescala.coditem" :field-value="masterRecord.iditem" :show-header="false" isSubPage>
                            </list-detescala-page>
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
import listDetescalaPage from "../detescala/list.vue";
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
const store = usePageStore('detitem');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("detescala");
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
	 
	// set detescala form data
	const detescalaStore = usePageStore('detescala');
	detescalaStore.setFormData({ coditem:record?.iditem });
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
