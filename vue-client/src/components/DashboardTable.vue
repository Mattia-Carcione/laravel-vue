<script>
import useAnnouncement from '../announcement/useAnnouncement';
import ButtonPagination from './ButtonPagination.vue';
export default {
    emits: ['update-message'],
    props: {
        user: Object,
    },
    components: {
        ButtonPagination
    },
    data() {
        return {
            fetch: useAnnouncement(),
            announcements: [],
            currentPage: 1,
            totalPages: 1,
            tr: 1,
            success: '',
        }
    },
    methods: {
        async fetchData(page = 1) {
            await this.fetch.fetchAnnouncements(page, this.user.id)
                .then(() => {
                    this.announcements = this.fetch.getData.data;
                    this.currentPage = this.fetch.getData.current_page;
                    this.totalPages = this.fetch.getData.last_page;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        goToPage(pageNumber) {
            this.success = '';
            this.$emit('update-message', this.success);
            if (pageNumber === this.currentPage + 1) {
                this.tr += 12;
            } else if (pageNumber === this.currentPage - 1) {
                this.tr = Math.max(this.tr - 12, 1);
            }
            this.fetchData(pageNumber);
        },
        async deleteData(announcement) {
            await this.fetch.destroy(announcement)
                .then(() => {
                    this.success = this.fetch.getSuccess;
                    this.$emit('update-message', this.success);
                    this.tr = 1;
                    this.fetchData();
                })
        }
    },
    created() {
        this.fetchData();
    }
}
</script>

<template>
    <section class="text-center h-full" v-if="announcements.length === 0">
        <h2 class="py-5">Get started by creating an announcement</h2>
        <RouterLink :to="{ name: 'createAnnouncements' }">
            <button type="button" class="btn btn-custom">Create</button>
        </RouterLink>
    </section>

    <section v-else>
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
                            <RouterLink v-if="announcement.is_accepted"
                                :to="`/profile/dashboard/update/${announcement.slug.toLowerCase()}`">
                                <i class="px-1 fa-regular fa-pen-to-square text-warning"></i>
                            </RouterLink>
                            <span @click="deleteData(announcement)">
                                <i class="px-1 cursor-pointer fa-solid fa-trash-can text-error"></i>
                            </span>
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