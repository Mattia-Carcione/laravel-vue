<script>
import useRevisor from '../../revisor/useRevisor';

export default {
    emits: ['fetchData'],
    data() {
        return {
            fetchRevisor: useRevisor(),
            announcement: {
                user: '',
                category: '',
            },
            date: '',
            selectedImage: "http://localhost:8000/storage/default-image.jpeg",
        };
    },
    methods: {
        async fetchData() {
            await this.fetchRevisor.fetchAnnouncements()
                .then(async () => {
                    this.announcement = this.fetchRevisor.getAnnouncements;
                    this.formatDate();
                })
                .catch(error => {
                    console.log(error);
                    this.announcement = null;
                })
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
        },
        async acceptAnnouncement(id) {
            await this.fetchRevisor.acceptAnnouncement(id)
                .then(async () => {
                    await this.fetchData();
                    this.$emit('fetchData');
                })
                .catch(error => {
                    console.log(error);
                    this.announcement = null;
                })
        },
        async rejectAnnouncement(id) {
            this.fetchRevisor.rejectAnnouncement(id)
                .then(async () => {
                    await this.fetchData();
                    this.$emit('fetchData');
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.fetchData();
    }
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
        <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
    </div>

    <div v-if="announcement" class="px-5 flex flex-col justify-between pt-20 pb-24 lg:flex-row">
        <div class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row"
            x-data="{ selectedImage: 'http://localhost:8000/storage/default-image.jpeg' }">
            <div class="flex flex-row sm:flex-col sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3">

                <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                    <div class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                        <img class="cursor-pointer object-cover" @click="selectedImage = $event.target.src"
                            alt="product image" src="http://localhost:8000/storage/default-image.jpeg">
                    </div>
                </div>

                <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                    <div class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                        <img class="cursor-pointer object-cover" @click="selectedImage = $event.target.src"
                            alt="product image" src="http://localhost:8000/storage/noFile.jpeg">
                    </div>
                </div>

                <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                    <div class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                        <img class="cursor-pointer object-cover" @click="selectedImage = $event.target.src"
                            alt="product image" src="http://localhost:8000/storage/Heaader.jpeg">
                    </div>
                </div>

            </div>
            <div class="relative w-full pb-5 sm:pb-0">
                <div
                    class="aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded border border-grey bg-v-pink">
                    <img class="object-cover" alt="product image" :src="selectedImage"
                        src="http://localhost:8000/storage/default-image.jpeg">
                </div>
            </div>
        </div>

        <div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
            <div class="mb-8 border-b border-grey-dark">
                <div class="flex items-center">
                    <h2 class="font-butler text-blue-700 text-3xl md:text-4xl lg:text-4.5xl">
                        {{ announcement.title }}
                    </h2>
                </div>
                <div class="flex items-center pt-3">
                    <span class="font-hk text-2xl">${{ announcement.price }}</span>
                </div>

            </div>
            <div class="flex pb-5">
                <p class="font-hk font-bold">Published on:</p>
                <p class="font-hkbold pl-3">
                    {{ date }}
                </p>
            </div>
            <div class="flex pb-5">
                <p class="font-hk font-bold">By:</p>
                <p class="font-hkbold pl-3">
                    {{ announcement.user.name }} {{ announcement.user.surname }}
                </p>
            </div>
            <p class="font-hk font-bold pb-3">About:</p>

            <p class="pb-5 font-hk">
                {{ announcement.about }}
            </p>
            <p class="font-hk font-bold pb-3">Description:</p>

            <p class="pb-5 font-hk">
                {{ announcement.body }}
            </p>
            <p class="font-hk">
                <span class="font-semibold pr-2">Categories:</span>{{ announcement.category.name }}
            </p>
            <div class="flex pt-5">
                <p class="font-hk text-secondary">SKU:</p>
                <p class="font-hkbold pl-3 text-secondary">
                    {{ announcement.slug ? announcement.slug.slice(-7) : '' }}
                </p>
            </div>
            <div class="group flex pt-8">
                <button @click="acceptAnnouncement(announcement.id)" type="submit"
                    class="btn btn-success mr-4 md:mr-6">Accept</button>
                <button onclick="my_modal_5.showModal()" class="btn btn-outline btn-error">reject</button>
            </div>


            <!-- Modal -->
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to reject the announcements?</h3>
                    <p class="py-4">This will <span class="text-error">reject</span> your photo.</p>
                    <div class="modal-action">
                        <form method="dialog">
                            <div class="flex justify-between">
                                <button class="btn btn-outline">
                                    Cancel
                                </button>
                                <button @click="rejectAnnouncement(announcement.id)"
                                    class="btn btn-outline btn-error cursor-pointer ml-2">
                                    reject
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>

<style scoped></style>