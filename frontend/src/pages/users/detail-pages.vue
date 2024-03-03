<template>
    <div id="master-detailpage">
        <template v-if="auth.canView('formestudios3/list')">
            <div class="q-my-md">
                <div class="reset-grid">
                    <list-formestudios3-page ref="formestudios3ListPage"  field-name="formestudios3.codusuario" :field-value="masterRecord.id" :show-header="false" isSubPage>
                        </list-formestudios3-page>
                    </div>
                </div>
            </template>
            <template v-if="auth.canView('formestudiossup3/list')">
                <div class="q-my-md">
                    <div class="reset-grid">
                        <list-formestudiossup3-page ref="formestudiossup3ListPage"  field-name="formestudiossup3.codusuario" :field-value="masterRecord.id" :show-header="false" isSubPage>
                            </list-formestudiossup3-page>
                        </div>
                    </div>
                </template>
                <template v-if="auth.canView('formposgestudios2/list')">
                    <div class="q-my-md">
                        <div class="reset-grid">
                            <list-formposgestudios2-page ref="formposgestudios2ListPage"  field-name="formposgestudios2.codusuario" :field-value="masterRecord.id" :show-header="false" isSubPage>
                                </list-formposgestudios2-page>
                            </div>
                        </div>
                    </template>
                    <template v-if="auth.canView('formidiomas2/list')">
                        <div class="q-my-md">
                            <div class="reset-grid">
                                <list-formidiomas2-page ref="formidiomas2ListPage"  field-name="formidiomas2.codusuario" :field-value="masterRecord.id" :show-header="false" isSubPage>
                                    </list-formidiomas2-page>
                                </div>
                            </div>
                        </template>
                        <template v-if="auth.canView('experienciahv/list')">
                            <div class="q-my-md">
                                <div class="reset-grid">
                                    <list-experienciahv-page ref="experienciahvListPage"  field-name="experienciahv.codusuario" :field-value="masterRecord.id" :show-header="false" isSubPage>
                                        </list-experienciahv-page>
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
import listFormestudios3Page from "../formestudios3/list.vue";
import listFormestudiossup3Page from "../formestudiossup3/list.vue";
import listFormposgestudios2Page from "../formposgestudios2/list.vue";
import listFormidiomas2Page from "../formidiomas2/list.vue";
import listExperienciahvPage from "../experienciahv/list.vue";
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
	 
	// set formestudios3 form data
	const formestudios3Store = usePageStore('formestudios3');
	formestudios3Store.setFormData({  });
	 
	// set formestudiossup3 form data
	const formestudiossup3Store = usePageStore('formestudiossup3');
	formestudiossup3Store.setFormData({  });
	 
	// set formposgestudios2 form data
	const formposgestudios2Store = usePageStore('formposgestudios2');
	formposgestudios2Store.setFormData({  });
	 
	// set formidiomas2 form data
	const formidiomas2Store = usePageStore('formidiomas2');
	formidiomas2Store.setFormData({  });
	 
	// set experienciahv form data
	const experienciahvStore = usePageStore('experienciahv');
	experienciahvStore.setFormData({  });
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
