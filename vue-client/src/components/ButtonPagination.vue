<script>
import { useRoute } from 'vue-router';

export default {
    emits: ['goToPage'],
    props: {
        currentPage: Number,
        totalPages: Number,
    },
    methods: {
        goToPage(pageNumber) {
            this.$emit('goToPage', pageNumber);
        }
    },
    computed: {
        path() {
            return useRoute();
        },
        bgCurrent() {
            return this.$route.path.includes('/dashboard') || this.$route.path.includes('/revisor');
        }
    }
}
</script>

<template>
    <div :class="{ 'bg-zinc-50': !bgCurrent }" class="flex p-10">
        <div class="join grid grid-cols-2">
            <button
            :disabled="currentPage === 1" @click="goToPage(currentPage - 1)" 
                class="btn join-item bg-white hover:bg-blue-700 btn-custom">Previous
                page</button>
            <button
            :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)" class="btn join-item hover:bg-blue-700 bg-white btn-custom">Next</button>
        </div>
    </div>
</template>

<style scoped>
.btn-custom {
    color: black;
    border-color: black;
}

.btn-custom:hover {
    color: white;
    border-color: black;
}
</style>