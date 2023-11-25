<script>
import useAnnouncement from '../../announcement/useAnnouncement';

export default {
    props: {
        state: Object
    },
    data() {
        return {
            announce: useAnnouncement(),
            form: {
                title: '',
                body: '',
                price: '',
            },
            error: '',
            success: '',
        }
    },
    methods: {
        async createAnnouncement() {
            await this.announce.store(this.form);
            this.success = this.announce.getSuccess;
            this.error = this.announce.getError;
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

                <!-- Validation error -->
                <!-- <div v-if="state.errors.phone" class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative" role="alert">
                    <span class="font-bold block sm:inline">
                        {{ state.errors.phone[0] }}
                    </span>
                </div> -->

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
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="Title" type="text" name="title" id="title">
                    </div>
                </div>

                <!-- Validation about error -->
                <!-- <div v-if="state.errors.about"
                                                                            class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                                                                                    role="alert">
                                                                                    <span class="font-bold block sm:inline">
                                                                            {{ state.errors.about[0] }}
                                                                </span>
                                                            </div> -->

                <!-- Body -->
                <div class="my-5">
                    <label class="mb-3 block text-sm font-medium" for="body">Description</label>
                    <div class="relative">
                        <span class="absolute pl-3 left-4.5 top-3.5">
                            <i class="fa-solid fa-pen text-black"></i>
                        </span>
                        <!-- :class="{ 'border-red-700': state.errors.body, 'border-green-700': message }" -->
                        <textarea v-model="form.body"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 pl-11 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            name="body" id="body" rows="6" placeholder="Write a description here">
                                                                </textarea>
                    </div>
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
                        <!-- :class="{ 'border-red-700': state.errors.phone, 'border-green-700': message }" -->
                        <input v-model="form.price"
                            class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                            placeholder="$123" type="text" name="price" id="price">
                    </div>
                </div>

                <!-- Save button -->
                <div class="flex justify-end gap-4.5 mt-5">
                    <div @click="clearInfo"
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