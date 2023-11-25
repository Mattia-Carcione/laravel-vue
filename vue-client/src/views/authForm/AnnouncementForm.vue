<script>
import useAnnouncement from '../../announcement/useAnnouncement';
import { reactive } from 'vue';

export default {
    emits: ['update-message'],
    props: {
        state: Object
    },
    data() {
        const error = reactive({
            errors: {
                title: '',
                body: '',
                price: '',
            }
        });
        const message = reactive({
            success: ''
        });
        return {
            announce: useAnnouncement(),
            form: {
                title: '',
                body: '',
                price: '',
            },
            error,
            message
        }
    },
    methods: {
        async createAnnouncement() {
            await this.announce.store(this.form);
            this.setREsponse();
            this.$emit('update-message', this.message.success);
        },
        setREsponse() {
            if (this.announce.getError) {
                this.error = this.announce.getError;
                this.message.success = '';
            } else {
                this.message.success = this.announce.getSuccess;
                this.error.errors.title = false
                this.error.errors.body = false
                this.error.errors.price = false
                this.clearForm();
            }
        },
        clearForm() {
            this.form.title = '';
            this.form.body = '';
            this.form.price = '';
        }
    }
}
</script>

<template>
    <div class="rounded-sm border border-stroke shadow-default">
        <div class="border-b border-stroke py-4 px-7">
            <h3 class="font-medium">
                Announcement Information
            </h3>
        </div>
        <div class="p-7">
            <!-- Announcement Form -->
            <form class="md:my-10 md:mx-20" @submit.prevent="createAnnouncement(form)" method="POST">

                <!-- Validation title error -->
                <div v-if="error.errors.title"
                    class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.title[0] }}
                    </span>
                </div>

                <!-- Title -->
                <div class="mb-5.5">
                    <label class="mb-3 block text-sm font-medium" for="title">
                        Title
                    </label>
                    <div class="relative">
                        <span class="absolute pl-3 left-4.5 top-3.5">
                            <i class="fa-solid fa-tag text-black"></i>
                        </span>
                        <!-- :class="{ 'border-red-700': state.errors.phone, 'border-green-700': message }" -->
                        <input v-model="form.title"
                            :class="{ 'border-red-700': error.errors.title, 'border-green-700': message.success, }"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="Title" type="text" name="title" id="title">
                    </div>
                </div>

                <!-- Validation body error -->
                <div v-if="error.errors.body"
                    class="flex mt-5 bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.body[0] }}
                    </span>
                </div>

                <!-- Body -->
                <div class="my-5">
                    <label class="mb-3 block text-sm font-medium" for="body">Description</label>
                    <div class="relative">
                        <span class="absolute pl-3 left-4.5 top-3.5">
                            <i class="fa-solid fa-pen text-black"></i>
                        </span>
                        <!-- :class="{ 'border-red-700': state.errors.body, 'border-green-700': message }" -->
                        <textarea v-model="form.body"
                            :class="{ 'border-red-700': error.errors.body, 'border-green-700': message.success, }"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 pl-11 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            name="body" id="body" rows="6" placeholder="Write a description here">
                                                                                                                </textarea>
                    </div>
                </div>

                <!-- Validation price error -->
                <div v-if="error.errors.price"
                    class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.price[0] }}
                    </span>
                </div>

                <!-- Price -->
                <div class="mb-5.5">
                    <label class="mb-3 block text-sm font-medium" for="price">
                        price
                    </label>
                    <div class="relative">
                        <span class="absolute pl-3 left-4.5 top-3.5">
                            <i class="fa-solid fa-money-bill-wave text-black"></i>
                        </span>
                        <input v-model="form.price"
                            :class="{ 'border-red-700': error.errors.price, 'border-green-700': message.success, }"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="$123" type="text" name="price" id="price">
                    </div>
                </div>

                <!-- Save button -->
                <div class="flex justify-end gap-4.5 mt-5">
                    <div @click="clearForm"
                        class="flex justify-center btn-outline rounded border border-stroke py-2 px-6 font-medium  hover:shadow-1  cursor-pointer">
                        Clear
                    </div>
                    <button
                        class="flex ml-2 justify-center rounded shadow-sm bg-primary py-2 px-6 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-opacity-90"
                        type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
</div></template>