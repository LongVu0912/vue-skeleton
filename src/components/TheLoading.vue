<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    name: "TheLoading"
});

</script>

<template>
    <div class="flex pt-64 items-center justify-center">
        <span class="loading loading-dots loading-lg"></span>
    </div>
</template>