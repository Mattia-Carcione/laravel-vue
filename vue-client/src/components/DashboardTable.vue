<script>
import useAnnouncement from '../announcement/useAnnouncement';
import ButtonPagination from './ButtonPagination.vue';
export default {
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
            tr: 1
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
            if (pageNumber === this.currentPage + 1) {
                this.tr += 12;
            } else if (pageNumber === this.currentPage - 1) {
                this.tr = Math.max(this.tr - 12, 1);
            }
            this.fetchData(pageNumber);
        }
    },
    created() {
        this.fetchData();
    }
}
</script>

<template>
    <section>

        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th class="display">About</th>
                        <th class="display">Description</th>
                        <th>Category</th>
                        <th class="display">Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(announcement, index) in announcements" :key="announcement.id">
                        <th class="w-5">{{ index + tr }}</th>
                        <td>{{ announcement.title }}</td>
                        <td class="display">{{ announcement.about }}</td>
                        <td class="display">{{ announcement.body }}</td>
                        <td>{{ announcement.category.name }}</td>
                        <td class="display">{{ announcement.price }}</td>
                        <td class="w-5">
                            <div :class="{ 'badge-success': announcement.is_accepted === 1, 'badge-error': announcement.is_accepted === 0, 'badge-warning': announcement.is_accepted === null }"
                                class="badge badge-md"></div>
                        </td>
                        <td>
                            <RouterLink :to="'/profile/dashboard/create'">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ButtonPagination @goToPage="goToPage" :totalPages="totalPages" :currentPage="currentPage" />
    </section>
</template>

<style scoped>
tr td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20px;
}

@media screen and (max-width: 768px) {
    .display {
        display: none;
    }

}
</style>