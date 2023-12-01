<script>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import AnnouncementForm from '../../components/announceForm/AnnouncementForm.vue';
import DashboardTable from '../../components/DashboardTable.vue';

export default {
    emits: ['fetchData'],
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
        AnnouncementForm,
        DashboardTable
    },
    methods: {
        handleUpdateMessage(newMessage) {
            this.$emit('fetchData');
            this.message.success = newMessage;
        }
    },
    computed: {
        path() {
            return useRoute().path
        },
        showTable() {
            return this.path.includes('/profile/dashboard/create');
        }
    },
    mounted() {
        this.message.success = '';
    }
}
</script>

<template>
    <div v-if="showTable" class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Create New Announcement
        </h2>
    </div>

    <!-- Message Success -->
    <div v-if="message.success && showTable"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ message.success }}
    </div>

    <div class="p-4">
        <AnnouncementForm v-if="showTable" :user="user" :categories="categories" @update-message="handleUpdateMessage" />

        <DashboardTable v-else :user="user" />
    </div>
</template>