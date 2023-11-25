<script>
import { reactive } from 'vue';
import AnnouncementForm from '../announceForm/AnnouncementForm.vue';

export default {
    props: {
        user: Object,
        categories: Object
    },
    data() {
        const message = reactive({
            success: ''
        })
        return {
            message
        }
    },
    components: {
        AnnouncementForm
    },
    methods: {
        handleUpdateMessage(newMessage) {
            this.message.success = newMessage;
            console.log(this.message);
        }
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Create New Announcement
        </h2>
    </div>

    <!-- Message Success -->
    <div v-if="message.success"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ message.success }}
    </div>

    <div class="p-4">
        <AnnouncementForm :user="user" :categories="categories" @update-message="handleUpdateMessage"/>
    </div>
</template>