<script>
import CardReview from '../../components/CardReview.vue';
import useRevisor from '../../revisor/useRevisor';
export default {
    components: {
        CardReview
    },
    props: {
        user: Object,
        announcements: Array
    },
    data() {
        return {
            message: '',
            fetch: useRevisor(),
        }
    },
    methods: {
        stateSuccess() {
            this.message = this.fetch.getMessage;
        },
        async fetchAnnouncemntsToBeRevisioned() {
            await this.fetch.fetchAnnouncements();
        }
    },
    beforeMount() {
        this.fetchAnnouncemntsToBeRevisioned();
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Review Announcements
        </h2>
    </div>

    <!-- Message Success -->
    <div v-if="message"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ message }}
    </div>

    <section>
        <div class="text-center flex flex-col items-center" v-if="announcements.length === 0">
            <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
            <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
        </div>
        <div v-else class="grid grid-cols-2 w-full lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4">
            <div v-for="announcement in announcements" :key="announcement.id">
                <CardReview :announcement="announcement" />
            </div>
        </div>
    </section>
</template>