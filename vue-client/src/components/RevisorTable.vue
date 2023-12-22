<script>
import useRevisor from '../revisor/useRevisor';
import useAnnouncement from '../announcement/useAnnouncement';
import ButtonPagination from './ButtonPagination.vue';
export default {
    props: {
        user: Object,
    },
    components: {
        ButtonPagination,
    },
    data() {
        return {
            fetchCounter: 0,
            fetch: useRevisor(),
            announcements: [],
            currentPage: 1,
            totalPages: 1,
            tr: 1,
            date: '',
            selectedImage: "http://localhost:8000/storage/default-image.jpeg",
        }
    },
    methods: {
        openModal(announcementId) {
            const modalId = `my_modal_${announcementId}`;
            const modal = document.getElementById(modalId);
            modal.showModal();
        },
        async fetchData(page = 1) {
            this.fetchCounter++; // Incrementa il contatore
            console.log(this.fetchCounter);
            await this.fetch.index(page)
                .then(() => {
                    console.log(this.fetchCounter);
                    this.announcements = this.fetch.getAnnouncements.data;
                    this.currentPage = this.fetch.getAnnouncements.current_page;
                    this.totalPages = this.fetch.getAnnouncements.last_page;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        goToPage(pageNumber) {
            this.success = '';
            if (pageNumber === this.currentPage + 1) {
                this.tr += 12;
            } else if (pageNumber === this.currentPage - 1) {
                this.tr = Math.max(this.tr - 12, 1);
            }
            this.fetchData(pageNumber);
        },
        async acceptAnnouncement(id) {
            await this.fetch.acceptAnnouncement(id)
                .then(async () => {
                    this.fetchData();
                })
                .catch(error => {
                    console.log(error);
                    this.announcement = null;
                })
        },
        async rejectAnnouncement(id) {
            console.log(id);
            this.fetch.rejectAnnouncement(id)
                .then(async () => {
                    this.fetchData();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        formatDate(announcement) {
            const createdDate = new Date(announcement.created_at);
            const formattedDate = createdDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour12: true
            });
            this.date = formattedDate;
            return this.date
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<template>
    <section>
        <div class="overflow-x-auto w-full">

            <!-- table -->
            <table class="table w-full">
                <!-- head -->
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="w-44">Title</th>
                        <th class="display">Features</th>
                        <th class="display">Description</th>
                        <th>Category</th>
                        <th class="display">Price</th>
                        <th class="p-0">Status</th>
                        <th></th>
                    </tr>
                </thead>

                <!-- body -->
                <tbody>
                    <tr v-for="(announcement, index) in announcements" :key="announcement.id">
                        <th class="w-5">{{ index + tr }}</th>
                        <td>{{ announcement.title }}</td>
                        <td class="display">{{ announcement.about }}</td>
                        <td class="display">{{ announcement.body }}</td>
                        <td>{{ announcement.category.name }}</td>
                        <td class="display">{{ announcement.price }}</td>
                        <td class="p-0">
                            <div :class="{ 'badge-success': announcement.is_accepted === 1, 'badge-error': announcement.is_accepted === 0, 'badge-warning': announcement.is_accepted === null }"
                                class="badge badge-md"></div>
                        </td>
                        <td class="p-0">
                            <!-- Open the modal using ID.showModal() method -->
                            <button @click="openModal(announcement.id)"><i
                                    class="px-1 fa-regular fa-pen-to-square text-warning"></i></button>
                            <dialog :id="`my_modal_${announcement.id}`" class="modal">
                                <div class="modal-box">
                                    <div class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse"
                                        x-data="{ selectedImage: 'http://localhost:8000/storage/default-image.jpeg' }">
                                        <div class="flex flex-row sm:flex-col sm:pl-5 md:pl-4 lg:pl-2 lg:pr-2 xl:pr-3">

                                            <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                                                <div
                                                    class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                                                    <img class="cursor-pointer object-cover"
                                                        @click="selectedImage = $event.target.src" alt="product image"
                                                        src="http://localhost:8000/storage/default-image.jpeg">
                                                </div>
                                            </div>

                                            <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                                                <div
                                                    class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                                                    <img class="cursor-pointer object-cover"
                                                        @click="selectedImage = $event.target.src" alt="product image"
                                                        src="http://localhost:8000/storage/noFile.jpeg">
                                                </div>
                                            </div>

                                            <div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
                                                <div
                                                    class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink">
                                                    <img class="cursor-pointer object-cover"
                                                        @click="selectedImage = $event.target.src" alt="product image"
                                                        src="http://localhost:8000/storage/Heaader.jpeg">
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
                                                {{ formatDate(announcement) }}
                                            </p>
                                        </div>
                                        <div class="flex pb-5">
                                            <p class="font-hk font-bold">By:</p>
                                            <p class="font-hkbold pl-3">
                                                {{ announcement.user.name }} {{ announcement.user.surname }}
                                            </p>
                                        </div>
                                        <p class="font-hk font-bold pb-3">Features:</p>

                                        <p class="pb-5 font-hk">
                                            {{ announcement.about }}
                                        </p>
                                        <p class="font-hk font-bold pb-3">Description:</p>

                                        <p class="pb-5 font-hk">
                                            {{ announcement.body }}
                                        </p>
                                        <p class="font-hk">
                                            <span class="font-semibold pr-2">Categories:</span>{{ announcement.category.name
                                            }}
                                        </p>
                                        <div class="flex pt-5">
                                            <p class="font-hk text-secondary">SKU:</p>
                                            <p class="font-hkbold pl-3 text-secondary">
                                                {{ announcement.slug ? announcement.slug.slice(-7).toUpperCase() : '' }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-action">
                                        <form method="dialog">
                                            <!-- if there is a button in form, it will close the modal  -->
                                            <div class="group flex pt-8">
                                                <button @click="acceptAnnouncement(announcement.id)" type="submit"
                                                    class="btn btn-success mr-4 md:mr-6">Accept</button>
                                                <button @click="rejectAnnouncement(announcement.id)"
                                                    class="btn btn-outline btn-error">reject</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- pagination -->
        <ButtonPagination @goToPage="goToPage" :totalPages="totalPages" :currentPage="currentPage" />
    </section>
</template>

<style scoped>
.btn-custom {
    color: white;
    background: linear-gradient(45deg, rgb(97, 69, 180) 0%, #1e618a 100%);
    background-size: 300%;
    border-radius: 15rem;
    transition: all .5s;
}

.btn-custom:hover {
    background-size: 100%;
    transform: scale(1.05);
}

@media screen and (min-width: 768px) {
    tr td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20px;
    }
}

@media screen and (max-width: 768px) {
    .display {
        display: none;
    }
}
</style>