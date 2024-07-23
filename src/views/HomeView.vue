<script setup lang="ts">
import { defineComponent } from 'vue';
import toastNotification from '../utils/toastNotification';
import TheHeader from '../components/TheHeader.vue';

defineComponent({
    name: 'HomeView',
})

toastNotification('Welcome to the Home Page', 'success', 2000);
</script>

<template>
    <TheHeader />
</template>