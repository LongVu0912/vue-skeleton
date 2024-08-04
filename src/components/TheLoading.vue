<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    name: "TheLoading"
});

</script>

<template>
    <div class="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="loading loading-dots loading-lg"></div>
    </div>
</template>