<script>
import RevisorCard from '../../components/RevisorCard.vue';
import useRevisor from '../../revisor/useRevisor';

export default {
    emits: ['fetchData'],
    data() {
        return {
            fetchRevisor: useRevisor(),
            announcement: '',
            date: '',
            selectedImage: "http://localhost:8000/storage/default-image.jpeg",
        };
    },
    methods: {
        async fetchData() {
            await this.fetchRevisor.fetchAnnouncements()
                .then(async () => {
                if (this.fetchRevisor.getAnnouncements) {
                    this.announcement = this.fetchRevisor.getAnnouncements;
                    this.formatDate();
                }
                else {
                    this.announcement = null;
                }
            })
                .catch(error => {
                console.log(error);
            });
        },
        formatDate() {
            const createdDate = new Date(this.announcement.created_at);
            const formattedDate = createdDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour12: true
            });
            this.date = formattedDate;
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { RevisorCard }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Review Announcements
        </h2>
    </div>


    <div class="text-center flex flex-col items-center" v-if="!announcement">
        <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
        <img class="w-96 h- h-96 rounded-full" src="http://localhost:8000/storage/noFile.jpeg" alt="">
    </div>

    <RevisorCard :announcement="announcement" :date="date" :selectedImage="selectedImage" @fetchData="fetchData" />
</template>

<style scoped></style>