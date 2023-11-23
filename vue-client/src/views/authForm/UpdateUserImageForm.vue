<script>
import useAuth from '../../auth/useAuth';

export default {
    props: {
        state: Object,
        account: Object,
        user: Object
    },
    data() {
        return {
            error: '',
            message: '',
            data: new FormData(),
            image: "http://localhost:8000/storage/avatars/" + this.user.path_image,
            default: `http://localhost:8000/storage/default/file.jpeg`
        }
    },
    emits: ['update-message'],
    methods: {
        async getUserImage(event) {
            this.message = '';
            this.account.path_image = event.target.files[0];
            this.data.append('path_image', this.account.path_image);
            this.image = URL.createObjectURL(this.account.path_image)
            event.target.value = '';
        },
        async updateUserImage() {
            if (this.account.path_image) {
                await useAuth().updateUserImage(this.data);
                this.setResponse();
                this.image = "http://localhost:8000/storage/avatars/" + this.user.path_image
            }
        },
        getImageSource() {
            return this.image !== null && this.image !== '' && this.image !== "http://localhost:8000/storage/avatars/null" ? this.image : this.default;
        },
        async deleteUserImage() {
            this.account.path_image = '';
            await useAuth().deleteImage();
            this.setResponse();
            this.image = '';
        },
        clearImage() {
            this.account.path_image = '';
            this.image = "http://localhost:8000/storage/avatars/" + this.user.path_image
        },
        emitFunction() {
            this.$emit('update-message', this.message);
        },
        setResponse() {
            this.message = this.state.success;
            this.error = this.state.errors;
            this.emitFunction();
        }
    }
}
</script>

<template>
    <!-- Form Update Photo -->
    <div class="md:col-span-4 col-span-10 mb-12">
        <!-- Validation error -->
        <div v-if="state.errors.path_image" v-for="error in state.errors.path_image"
            class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative" role="alert">
            <span class="font-bold block sm:inline">
                {{ error }}
            </span>
        </div>

        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 class="font-medium text-black">
                    Your Photo
                </h3>
            </div>

            <div class="p-7">
                <form enctype="multipart/form-data" @submit.prevent="updateUserImage" method="POST">
                    <div class="mb-4 flex items-center gap-3">
                        <!-- Profile image -->
                        <div class="h-14 w-14 rounded-full">
                            <img :src="getImageSource()" alt="Profile Image" class="h-14 w-14 rounded-full">
                        </div>

                        <!-- Edit -->
                        <div>
                            <span class="mb-1.5 font-medium text-black">Edit your photo</span>
                            <span class="flex gap-2.5">
                                <div onclick="my_modal_5.showModal()"
                                    class="text-sm font-medium hover:text-error cursor-pointer">
                                    Delete
                                </div>

                                <!-- Modal -->
                                <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure you want to delete your photo?</h3>
                                        <p class="py-4">This will <span class="text-error">delete</span> your photo.</p>
                                        <div class="modal-action">
                                            <form method="dialog">
                                                <div class="flex justify-between">
                                                    <button class="btn btn-outline">
                                                        Cancel
                                                    </button>
                                                    <button @click="deleteUserImage"
                                                        class="btn btn-outline btn-error cursor-pointer ml-2">
                                                        Delete
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                                <!-- Update button -->
                                <button type="submit" class="text-sm font-medium hover:text-primary">
                                    Save
                                </button>
                            </span>
                        </div>
                    </div>

                    <div id="FileUpload"
                        class="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                        <input @change="getUserImage" name="path_image" type="file"
                            class="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            accept=".jpg, .jpeg, .png">
                        <div class="flex flex-col items-center justify-center space-y-3">
                            <span
                                class="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                        fill="#3C50E0"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                        fill="#3C50E0"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                        fill="#3C50E0"></path>
                                </svg>
                            </span>
                            <p class="text-sm font-medium">
                                <span class="text-primary">Click to upload</span>
                                or drag and drop
                            </p>
                            <p class="mt-1.5 text-sm font-medium">
                                PNG, JPG or JPEG
                            </p>
                            <p class="text-sm font-medium">
                                (max: 2048Kb)
                            </p>
                        </div>
                    </div>

                    <!-- Save button -->
                    <div class="flex justify-end gap-4.5 mt-2">
                        <div @click="clearImage"
                            class="flex justify-center btn-base-300 btn-outline rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 hover:bg-black hover:text-white dark:border-strokedark cursor-pointer">
                            Clear
                        </div>
                        <button
                            class="flex ml-2 justify-center rounded shadow-sm bg-indigo-600 py-2 px-6 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-opacity-90"
                            type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>