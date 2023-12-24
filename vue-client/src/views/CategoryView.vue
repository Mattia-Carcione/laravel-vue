<script>
import useAnnouncement from '../announcement/useAnnouncement';
import Card from '../components/Card.vue';
import ButtonCategory from '../components/ButtonCategory.vue';
import ButtonPagination from '../components/ButtonPagination.vue';
export default {
    props: {
        user: Object,
        categories: Array
    },
    components: {
        Card,
        ButtonCategory,
        ButtonPagination
    },
    data() {
        return {
            category: [],
            announcements: [],
            fetch: useAnnouncement(),
            currentPage: 1,
            totalPages: 1,
        }
    },
    methods: {
        async checkCategory(name = null, page) {
            if (!name) {
                name = this.$route.params.name
            }
            const findCategory = this.categories.find(category => category.slug === name);
            if (findCategory) {
                this.category = name;
                await this.fetchData(page);
            } else {
                this.$router.push({ name: 'not-found' });
            }
        },
        async fetchData(page = 1) {
            await this.fetch.fetchAnnouncementsByCategory(this.category, page)
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
            this.checkCategory(this.$route.params.name, pageNumber);
        }
    },
    created() {
        this.checkCategory();
    },
    beforeRouteUpdate(to, from, next) {
        this.category = to.params.name;
        this.checkCategory(this.category);
        next();
    }
}
</script>

<template>
    <div class="bg-white z-[1] flex justify-center py-5 items-baseline sticky lg:pt-20 top-0">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <RouterLink to="/">SnapList</RouterLink>
                </li>
                <li>Category</li>
                <li class="underline underline-offset-2">{{ category }}</li>
            </ul>
        </div>
    </div>

    <ButtonCategory class="pb-5" :categories="categories" />

    <section>
        <div class="text-center flex flex-col items-center bg-white" v-if="announcements.length === 0">
            <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
            <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
        </div>

        <div v-else >
        <div class="grid grid-cols-2 p-10 lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4   bg-zinc-50">
            <div v-for="announcement in announcements" :key="announcement.id"
                class="group relative w-full lg:last:hidden xl:last:block">
                <Card :announcement="announcement" />
            </div>
        </div>
        <ButtonPagination :currentPage="currentPage" :totalPages="totalPages" @goToPage="goToPage" />
        </div>
    </section>
</template>