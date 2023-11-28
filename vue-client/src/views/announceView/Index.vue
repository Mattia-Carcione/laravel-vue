<script>
import useAnnouncement from '../../announcement/useAnnouncement';
import Card from '../../components/Card.vue';
export default {
    props: {
        categories: Array
    },
    components: {
        Card
    },
    data() {
        return {
            fetch: useAnnouncement(),
            announcements: [],
        }
    },
    methods: {
        async fetchData() {
            try {
                await this.fetch.fetchAnnouncements();
                this.announcements = this.fetch.getData.data;
            } catch (error) {
                console.log(error);
            }
        },
        // formatDate() {
        //     this.announcements.forEach(element => {
        //         const createdDate = new Date(element['created_at']);
        //         const formattedDate = createdDate.toLocaleDateString('en-US', {
        //             year: 'numeric',
        //             month: 'long',
        //             day: 'numeric',
        //             hour12: true
        //         });
        //         this.date = formattedDate;
        //     })
        // }
    },
    created() {
        this.fetchData();
    }
}
</script>

<template>
    <header class="bg-zinc-100">
        <div class="relative flex lg:mt-10">
            <div class="m-10 h-56 w-full bg-cover bg-center bg-no-repeat lg:h-72"
                style="background-image:url(https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg)">
            </div>
            <div class="c-hero-gradient-bg text-end absolute top-0 left-0 h-56 w-full bg-cover bg-no-repeat lg:h-68">
                <div class="py-20 px-6 sm:px-12 lg:px-20">
                    <h1 class="font-butler text-2xl text-white sm:text-3xl md:text-4.5xl lg:text-5xl">
                        SnapList
                    </h1>
                    <div class="flex pt-2 justify-end">
                        <a href="/" class="font-hk text-base text-white transition-colors hover:text-primary">Home</a>
                        <span class="px-2 font-hk text-base text-white">.</span>
                        <span class="font-hk text-base text-white">Announcements</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="flex px-1 lg:px-40 bg-white items-center justify-center py-4 md:py-8 flex-wrap">
        <RouterLink :to="{ name: 'category', params: { name: category.name } }" v-for="category in categories"
            :key="category.id">
            <button type="button"
                class="text-gray-900 border border-gray-500  bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                {{ category.name }}
            </button>
        </RouterLink>
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
</template>

<style></style>