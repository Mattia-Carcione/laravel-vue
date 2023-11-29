<script>
import useAnnouncement from '../announcement/useAnnouncement';
import Card from '../components/Card.vue';
import ButtonCategory from '../components/ButtonCategory.vue';
export default {
    props: {
        categories: Array
    },
    components: {
        Card,
        ButtonCategory
    },
    data() {
        return {
            category: [],
            announcements: [],
            lessThan24Hours: false,
            fetch: useAnnouncement(),
        }
    },
    methods: {
        async checkCategory(name = null) {
            if (!name) {
                name = this.$route.params.name
            }
            const findCategory = this.categories.find(category => category.slug === name);
            if (findCategory) {
                this.category = name;
                await this.fetchData();
                console.log(this.announcements);
            } else {
                this.$router.push({ name: 'not-found' });
            }
        },
        async fetchData() {
            await this.fetch.fetchAnnouncementsByCategory(this.category);
            this.announcements = this.fetch.getData.data;
        }
        // Metodi per la gestione della data

        // formatDate() {
        //     this.ANNUNCI.forEach(element => {
        //         const createdDate = new Date(element['created_at']);
        //         const formattedDate = createdDate.toLocaleDateString('en-US', {
        //             year: 'numeric',
        //             month: 'long',
        //             day: 'numeric',
        //             hour12: true
        //         });
        //         this.date = formattedDate;
        //     })
        // },

        // lessThan24Hours() {
        //     this.ANNUNCI.forEach(element => {
        //         const createdDate = new Date(element['created_at']);
        //         const currentDate = new Date();
        //         const timeDifference = currentDate - createdDate;
        //         const hoursDifference = timeDifference / (1000 * 60 * 60);
        //         this.lessThan24Hours = hoursDifference < 24
        //     })
        // }
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

    <section>
        <div class="text-center flex flex-col items-center bg-white" v-if="announcements.length === 0">
            <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
            <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
        </div>
        <div v-else class="grid grid-cols-2 p-10 lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4   bg-zinc-50">
            <div v-for="announcement in announcements" :key="announcement.id"
                class="group relative w-full lg:last:hidden xl:last:block">
                <Card :announcement="announcement" />
            </div>
        </div>
    </section>

    <ButtonCategory :categories="categories" />
</template>