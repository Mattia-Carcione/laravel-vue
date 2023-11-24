<script>
import AnnouncementForm from '../authForm/AnnouncementForm.vue';

export default {
    props: {
        state: Object
    },
    components: {
        AnnouncementForm
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Create New Announcement
        </h2>
    </div>

    <div class="p-4">
        <AnnouncementForm :state="state"/>
    </div>
</template>