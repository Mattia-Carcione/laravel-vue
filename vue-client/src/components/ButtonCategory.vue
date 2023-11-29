<script>
export default {
    props: {
        categories: Array
    }
}
</script>

<template>
    <div class="flex flex-col justify-center">
        <p
            class="inline-flex items-center justify-center rounded-full py-4 px-10 text-base font-medium text-black transition duration-300 ease-in-out hover:bg-opacity-90">
            See All Category:
        </p>
        <div class="flex px-1 lg:px-40 bg-white items-center justify-center pt-4 flex-wrap">
            <RouterLink :to="{ name: 'category', params: { name: category.slug } }" v-for="category in categories"
                :key="category.id">
                <button type="button"
                    class="text-gray-900 border border-gray-500  bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-2 py-1 lg:px-5 lg:py-2.5 text-center me-3 mb-3">
                    {{ category.name }}
                </button>
            </RouterLink>
        </div>
    </div>
</template>