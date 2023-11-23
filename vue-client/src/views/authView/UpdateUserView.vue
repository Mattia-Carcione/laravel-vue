<script lang="ts">
import { reactive } from 'vue';

import useAuth from '../../auth/useAuth';
import UpdateUserInfoForm from '../authForm/UpdateUserInfoForm.vue';
import UpdateUserImageForm from '../authForm/UpdateUserImageForm.vue';

export default {
    props: {
        user: Object
    },
    components: {
    UpdateUserInfoForm,
    UpdateUserImageForm
},
    data() {
        const account = reactive({
            name: this.user.name,
            surname: this.user.surname,
            phone: this.user.phone,
            about: this.user.about,
            bio: this.user.bio,
            path_image: this.user.path_image,
        });
        const state = reactive({
            errors: useAuth().getErrors,
            success: useAuth().getMessage
        });
        return {
            state,
            account,
            message: '',
        }
    },
    methods: {
        handleUpdateMessage(newMessage) {
            this.message = newMessage;
        }
    }
}
</script>

<template>
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg  font-bold text-black">
            Update Profile
        </h2>
    </div>

    <!-- Message Success -->
    <div v-if="message"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ message }}
    </div>

    <div class="grid grid-cols-10 gap-6">
        <!-- Form Update Information -->
        <UpdateUserInfoForm @update-message="handleUpdateMessage" :account="account" :state="state" />

        <!-- Form Update Photo -->
        <UpdateUserImageForm  @update-message="handleUpdateMessage" :user="user" :account="account" :state="state"/>
    </div>
</template>