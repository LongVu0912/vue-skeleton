<script setup lang="ts">
import { ref, defineComponent } from 'vue';

defineComponent({
    name: "TheButtonTheme"
});

const themes: string[] = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"];
const currentTheme = ref(localStorage.getItem('theme') || "light");

const changeTheme = (theme: string): void => {
    currentTheme.value = theme;
    localStorage.setItem('theme', currentTheme.value);
    document.documentElement.setAttribute('data-theme', currentTheme.value);
};

const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

</script>

<template>
    <div title="Change Theme" class="dropdown dropdown-end">
        <div tabIndex="0" role="button" class="btn mr-2 btn-neutral">{{ capitalizeFirstLetter(currentTheme) }}
        </div>
        <div tabindex="0"
             class="dropdown-content z-[1] bg-base-100 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16">
            <div class="grid grid-cols-1 gap-3 p-3">
                <span v-for="(theme, index) in themes" :key="index">
                    <button class="btn btn-outline btn-block"
                            @click="changeTheme(theme)">{{ capitalizeFirstLetter(theme) }}</button>
                </span>
            </div>
        </div>
    </div>
</template>