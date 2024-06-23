<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { capitalizeFirstLetter } from '../utils/index.js';

const router = useRouter();

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"];
const currentTheme = ref(localStorage.getItem('theme') || "light");


const isDrawerOpen = ref(false);

const closeDrawer = () => {
    isDrawerOpen.value = false;
};

onMounted(() => {
    document.documentElement.setAttribute('data-theme', currentTheme.value);
});

const changeTheme = (theme) => {
    currentTheme.value = theme;
    localStorage.setItem('theme', currentTheme.value);
    document.documentElement.setAttribute('data-theme', currentTheme.value);
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('theme');
    document.documentElement.setAttribute('data-theme', 'light');
    router.push('/');
};

</script>

<template>
    <div class="navbar bg-base-200">
        <div class="flex">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
            <div class="drawer-content">
                <label for="my-drawer" class="btn drawer-button btn-square btn-ghost"><svg
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li class="items-center font-bold text-xl">ADMIN</li>
                    <li class="font-medium mt-1" @click="closeDrawer">
                        <RouterLink to="/" active-class="bg-primary">Home</RouterLink>
                    </li>
                    <li class="font-medium mt-1" @click="closeDrawer">
                        <RouterLink to="/product-list" active-class="bg-primary">Product</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">ADMIN</a>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-bottom dropdown-end">
                <div tabIndex="0" role="button" class="btn mr-4 btn-neutral rounded-lg">Theme</div>
                <ul tabIndex="0"
                    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[600px] grid grid-cols-5 gap-8">
                    <li v-for="(theme, index) in themes" :key="index">
                        <a @click="changeTheme(theme)">{{ capitalizeFirstLetter(theme) }}</a>
                    </li>
                </ul>
            </div>
            <div class="btn btn-error" @click="logout">Log Out</div>
        </div>
    </div>
</template>

<style scoped>
.drawer-side {
    z-index: 1000;
}
</style>