<script>
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
    }
}
</script>

<template>
    <div class="flex p-10 bg-zinc-50">
        <div class="join grid grid-cols-2">
            <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)"
                class="join-item btn bg-white hover:bg-black hover:text-white border-black text-black">Previous
                page</button>
            <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)"
                class="join-item btn bg-white hover:bg-black hover:text-white btn-outline border-black text-black">Next</button>
        </div>
    </div>
</template>

<style scoped>
.join-item {
    color: black;
    border-color: black;
}

.join-item:hover {
    color: white;
    border-color: black;
}
</style>