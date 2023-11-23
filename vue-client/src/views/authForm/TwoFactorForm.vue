<script lang="ts">
export default {
    props: {
        form: Object,
    }
}
</script>


<template>
    <form @submit.prevent="" class="md:mx-24">
        <!-- Two Factor -->

        <!-- Submit button -->
        <div class="flex justify-end gap-4.5 mt-2">
            <button
                class="flex ml-2 justify-center rounded shadow-sm bg-indigo-600 py-2 px-6 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-opacity-90"
                type="submit">
                Save
            </button>
        </div>
    </form>
</template>