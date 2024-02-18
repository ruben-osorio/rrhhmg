<template>
    <div id="master-detailpage">
        <q-tabs  inline-label v-model="selectedTab" active-color="primary" indicator-color="primary" align="left">
            <template v-if="auth.canView('formestudiossup3/vhojavida')">
                <q-tab no-caps name="formestudiossup3" icon="extension" label="Users Formestudiossup3" />
            </template>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels keep-alive v-model="selectedTab" animated>
            <template v-if="auth.canView('formestudiossup3/vhojavida')">
                <q-tab-panel class="q-pa-none" name="formestudiossup3">
                    <div class="reset-grid">
                        <view-formestudiossup3-page ref="formestudiossup3ViewPage"  :id="masterRecord.id" :show-header="false" isSubPage>
                        </view-formestudiossup3-page>
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
import viewFormestudiossup3Page from "../formestudiossup3/vhojavida.vue";
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
const store = usePageStore('users');
const masterRecord = computed(() => store.state.currentRecord);
const pageReady = computed(() => masterRecord.value != null);
const selectedTab = ref("formestudiossup3");
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

	// set formestudiossup3 form data
	const formestudiossup3Store = usePageStore('formestudiossup3');
	formestudiossup3Store.setFormData({  });
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
