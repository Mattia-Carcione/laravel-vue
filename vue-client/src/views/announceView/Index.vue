<script>
import useAnnouncement from '../../announcement/useAnnouncement';
import Card from '../../components/Card.vue';
import ButtonCategory from '../../components/ButtonCategory.vue';
import ButtonPagination from '../../components/ButtonPagination.vue';

export default {
    props: {
        categories: Array
    },
    components: {
        Card,
        ButtonCategory,
        ButtonPagination
    },
    data() {
        return {
            fetch: useAnnouncement(),
            announcements: [],
            currentPage: 1,
            totalPages: 1,
        }
    },
    methods: {
        async fetchData(page = 1) {
            try {
                await this.fetch.fetchAnnouncements(page)
                    .then(() => {
                        this.announcements = this.fetch.getData.data;
                        this.currentPage = this.fetch.getData.current_page;
                        this.totalPages = this.fetch.getData.last_page;
                    })
            } catch (error) {
                console.log(error);
            }
        },
        goToPage(pageNumber) {
            this.fetchData(pageNumber);
        }
    },
    created() {
        this.fetchData();
    }
}
</script>

<template>
    <div class="lg:pt-20">

        <div class="flex px-1 lg:px-40 bg-zinc-50 items-center justify-center py-4 md:py-8">
            <h1 class="text-3xl font-bold">See All Announcements</h1>
        </div>

        <section>
            <div class="text-center flex flex-col items-center bg-white" v-if="announcements.length === 0">
                <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
                <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
            </div>

            <div v-else>
                <div class="grid grid-cols-2 p-10 lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4 bg-zinc-50">
                    <div v-for="announcement in announcements" :key="announcement.id"
                        class="group relative w-full lg:last:hidden xl:last:block">
                        <Card :announcement="announcement" />
                    </div>
                </div>

                <ButtonPagination :currentPage="currentPage" :totalPages="totalPages" @goToPage="goToPage" />
            </div>
        </section>

        <section class="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div class="container mx-auto">

                <div class="flex mx-4">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 class="text-black mb-4 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                Shop By Category
                            </h2>
                            <p class="text-base text-body-color -dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap px-4">
                    <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <RouterLink to="/category/home" class="block mb-10 text-center group">
                            <div class="mb-5 flex justify-center overflow-hidden rounded-lg">
                                <img src="https://cdnm.westwing.com/image/upload/v1/contenthub/app/uploads/it/2023/04/14142711/oggetti-per-la-casa-particolari-3.jpg"
                                    alt="category" class="w-60 h-60 rounded">
                            </div>
                            <h3
                                class="mb-1 text-xl font-semibold group-hover:text-primary text-black md:text-2xl lg:text-xl xl:text-2xl">
                                Home
                            </h3>
                        </RouterLink>
                    </div>
                    <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <RouterLink to="/category/toys" class="block mb-10 text-center group">
                            <div class="mb-5 flex justify-center overflow-hidden rounded-lg">
                                <img src="https://i.ebayimg.com/images/g/TU4AAOSwvJRkm8ej/s-l1200.jpg" alt="category"
                                    class="w-60 h-60 rounded">
                            </div>
                            <h3
                                class="mb-1 text-xl font-semibold group-hover:text-primary text-black md:text-2xl lg:text-xl xl:text-2xl">
                                Video Games
                            </h3>
                        </RouterLink>
                    </div>
                    <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <RouterLink to="/category/electronics" class="block mb-10 text-center group">
                            <div class="mb-5 flex justify-center overflow-hidden rounded-lg">
                                <img src="https://images.eprice.it/nobrand/0/lightbox/652/213412652/BEA0190199312937.jpg"
                                    alt="category" class="w-60 h-60 rounded">
                            </div>
                            <h3
                                class="mb-1 text-xl font-semibold group-hover:text-primary text-black md:text-2xl lg:text-xl xl:text-2xl">
                                Electronics
                            </h3>
                        </RouterLink>
                    </div>
                    <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <RouterLink to="/category/clothing" class="block mb-10 text-center group">
                            <div class="mb-5 flex justify-center overflow-hidden rounded-lg">
                                <img src="https://i.pinimg.com/originals/4b/03/b6/4b03b637d7d0d8a5f2537dc76eb3844b.jpg"
                                    alt="category" class="w-60 h-60 rounded">
                            </div>
                            <h3
                                class="mb-1 text-xl font-semibold group-hover:text-primary text-black md:text-2xl lg:text-xl xl:text-2xl">
                                Clothing
                            </h3>
                        </RouterLink>
                    </div>
                </div>

                <ButtonCategory :categories="categories" />

            </div>
        </section>
    </div>
</template>
