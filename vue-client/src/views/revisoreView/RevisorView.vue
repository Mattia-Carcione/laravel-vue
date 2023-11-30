<script>
import useAnnouncement from '../../announcement/useAnnouncement';
import CardReview from '../../components/CardReview.vue';
export default {
    components: {
        CardReview
    },
    props: {
        user: Object
    },
    data() {
        return {
            announcements: '',
            fetch: useAnnouncement()
        };
    },
    async created() {
        // fetch provvisorio
        await this.fetch.fetchAnnouncements();
        this.announcements = this.fetch.getData.data;
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Review Announcements
        </h2>
    </div>

    <div class="grid grid-cols-2 w-full lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4">
        <div v-for="announcement in announcements" :key="announcement.id">
            <CardReview :announcement="announcement" />
        </div>
    </div>
</template>