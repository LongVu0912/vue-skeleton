<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheLoading from '../components/TheLoading.vue';
import TheTable from '../components/TheTable.vue';
import http from '../api/http.js'
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const allData = ref([]);

const fetchData = async () => {
    try {
        await http.get(`https://jsonplaceholder.typicode.com/todos`).then(response => {
            allData.value = response.data;
        });
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
        console.log(allData.value);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <TheHeader />
    <TheLoading v-if="isLoading" />
    <TheTable v-else
              :tableHeaders="[
                { key: 'ID', class: '' },
                { key: 'USER ID', class: '' },
                { key: 'TITLE', class: '' },
                { key: 'COMPLETED', class: 'text-center' }
            ]"
              :dataFormat="[
                { type: 'text', key: 'id' },
                { type: 'text', key: 'userId', tdClass: 'font-bold' },
                { type: 'text', key: 'title', },
                { type: 'custom', key: 'completed', tdClass: 'text-center', trueClass: 'badge badge-outline badge-success', falseClass: 'badge badge-outline badge-error', value: true },
            ]"
              :allData="allData"
              :itemsPerPage=10
              findByKeyword="userId">
    </TheTable>
</template>