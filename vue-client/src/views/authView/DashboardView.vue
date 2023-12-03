<script>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import AnnouncementForm from '../../components/announceForm/AnnouncementForm.vue';
import UpdateForm from '../../components/announceForm/UpdateForm.vue';
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
        UpdateForm,
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
            return !this.path.includes('/profile/dashboard/');
        },
        showCreate() {
            return this.path.includes('/profile/dashboard/create');
        },
        showUpdate() {
            return this.path.includes('/profile/dashboard/update');
        }
    },
    mounted() {
        this.message.success = '';
    }
}
</script>

<template>
    <!-- Message Success -->
    <div v-if="message.success"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ message.success }}
    </div>

    <div class="md:p-4">
        <DashboardTable v-if="showTable" :user="user" @update-message="handleUpdateMessage" />

        <AnnouncementForm v-if="showCreate" :user="user" :categories="categories" @update-message="handleUpdateMessage" />

        <UpdateForm v-if="showUpdate" :user="user" :categories="categories" @update-message="handleUpdateMessage" />
    </div>
</template>