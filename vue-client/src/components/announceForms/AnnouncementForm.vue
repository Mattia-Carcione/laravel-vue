<script>
import useAnnouncement from '../../announcement/useAnnouncement';
import { reactive } from 'vue';

export default {
    emits: ['update-message'],
    props: {
        categories: Object,
        user: Object
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
                about: '',
                body: '',
                price: '',
                category_id: '--Choose a category',
                user_id: this.user.id
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
                this.error.errors = false
                this.clearForm();
            }
        },
        clearForm() {
            this.form.title = '';
            this.form.about = '';
            this.form.body = '';
            this.form.price = '';
            this.form.category_id = '--Choose a category';
        }
    }
}
</script>

<template>
    <div class="mb-6 mx-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Create New Announcement
        </h2>
    </div>


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

                        <input v-model="form.title"
                            :class="{ 'border-red-700': error.errors.title, 'border-green-700': message.success, }"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="Title" type="text" name="title" id="title">
                    </div>
                </div>

                <!-- Validation about error -->
                <div v-if="error.errors.about"
                    class="flex mt-5 bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.about[0] }}
                    </span>
                </div>

                <!-- About -->
                <div class="mb-5.5 mt-5">
                    <label class="mb-3 block text-sm font-medium" for="about">
                        Features (max 50)
                    </label>
                    <div class="relative">
                        <span class="absolute pl-3 left-4.5 top-3.5">
                            <i class="fa-solid fa-circle-info text-black"></i>
                        </span>

                        <input v-model="form.about"
                            :class="{ 'border-red-700': error.errors.about, 'border-green-700': message.success, }"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="Features" type="text" name="about" id="about">
                    </div>
                </div>

                <!-- Validation price error -->
                <div v-if="error.errors.price"
                    class="flex mt-5 bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.price[0] }}
                    </span>
                </div>

                <!-- Validation category error -->
                <div v-if="error.errors.category_id"
                    class="hidden lg:flex mt-5 bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                    role="alert">
                    <span class="font-bold block sm:inline">
                        {{ error.errors.category_id[0] }}
                    </span>
                </div>

                <div class="mb-5.5 flex items-center mb-3 flex-col lg:flex-row ">

                    <!-- Price -->
                    <div class="mb-5.5 mt-5 w-full lg:w-1/2  mr-1">
                        <label class="mb-3 block text-sm font-medium" for="price">
                            Price
                        </label>
                        <div class="relative">
                            <span class="absolute pl-3 left-4.5 top-3.5">
                                <i class="fa-solid fa-money-bill-wave text-black"></i>
                            </span>
                            <input v-model="form.price"
                                :class="{ 'border-red-700': error.errors.price, 'border-green-700': message.success, }"
                                class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                placeholder="$12.34" type="text" name="price" id="price">
                        </div>
                    </div>

                    <!-- Validation category error -->
                    <div v-if="error.errors.category_id"
                        class="flex w-full mt-5 lg:hidden bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.errors.category_id[0] }}
                        </span>
                    </div>

                    <!-- Category -->
                    <div class="form-control w-full lg:w-1/2 mb-5.5 mt-5">
                        <label class="mb-3 block text-sm font-medium">
                            <span>Category</span>
                        </label>
                        <select v-model="form.category_id"
                            :class="{ 'border-red-700': error.errors.price, 'border-green-700': message.success, }"
                            class="select w-full select-bordered font-medium text-black focus:border-primary focus-visible:outline-none border-2 rounded bg-slate-200">
                            <option disabled selected>--Choose a category</option>
                            <option :value="category.id" v-for="category in categories" :key="category.id">{{
                                category.name }}
                            </option>
                        </select>
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
    </div>
</template>