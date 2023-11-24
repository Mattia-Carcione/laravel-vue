<script>
import ThemeController from '../../components/ThemeController.vue';

export default {
    components: {
        ThemeController
    },
    methods: {
        handleThemeChanged(theme) {
            console.log('Tema cambiato:', theme);
        },
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Appearance
        </h2>
    </div>

    <div class="p-4">
        <ThemeController @theme-changed="handleThemeChanged" />
    </div>
</template>