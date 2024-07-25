<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import TheButtonTheme from './TheButtonTheme.vue';

const router = useRouter();

const currentTheme = ref(localStorage.getItem('theme') || "light");

const isDrawerOpen = ref(false);

const closeDrawer = (): void => {
    isDrawerOpen.value = false;
};

onMounted((): void => {
    document.documentElement.setAttribute('data-theme', currentTheme.value);
});


const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('theme');
    document.documentElement.setAttribute('data-theme', 'light');
    router.push('/');
};

</script>

<template>
    <div class="navbar bg-base-100 shadow-md">
        <div class="flex">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
            <div class="drawer-content">
                <label for="my-drawer" class="btn drawer-button btn-square btn-ghost">
                    <i class="fa-solid fa-bars fa-lg"></i>
                </label>
            </div>
            <div class="drawer-side z-50">
                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li class="items-center font-bold text-xl">VueJS</li>
                    <li class="font-medium mt-1" @click="closeDrawer">
                        <RouterLink to="/" active-class="bg-primary text-primary-content hover:bg-primary">Home
                        </RouterLink>
                    </li>
                    <li class="font-medium mt-1" @click="closeDrawer">
                        <RouterLink to="/product-list"
                                    active-class="bg-primary text-primary-content hover:bg-primary">
                            Product
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">VueJS</a>
        </div>
        <div class="navbar-end">
            <TheButtonTheme />
            <div class="btn btn-error" @click="logout">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    </div>
</template>