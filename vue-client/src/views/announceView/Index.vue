<script>
import useAnnouncement from '../../announcement/useAnnouncement';
export default {
    props: {
        categories: Array
    },
    data() {
        return {
            fetch: useAnnouncement(),
            announcements: [],
            date: '',
        }
    },
    methods: {
        async fetchData() {
            try {
                await this.fetch.fetchAnnouncements();
                this.announcements = this.fetch.getData.data;
                console.log(this.announcements);
            } catch (error) {
                console.log(error);
            }
        },
        formatDate() {
            this.announcements.forEach(element => {
                const createdDate = new Date(element['created_at']);
                const formattedDate = createdDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour12: true
                });
                this.date = formattedDate;
            })
        },
        lessThan24Hours(date) {
            const createdDate = new Date(date);
            const currentDate = new Date();
            const timeDifference = currentDate - createdDate;
            const hoursDifference = timeDifference / (1000 * 60 * 60);
            return hoursDifference < 24
        }
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
        <div class="grid grid-cols-2 p-10 lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4   bg-zinc-50">

            <div v-for="announcement in announcements" :key="announcement.id"
                class="group relative w-full lg:last:hidden xl:last:block">
                <div class="relative flex items-center justify-center rounded">
                    <div class="h-68 w-full bg-cover bg-center bg-no-repeat">
                        <img src="http://localhost:8000/storage/default-image.jpeg" alt="image">
                    </div>
                    <span v-if="lessThan24Hours(announcement.created_at)"
                        class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hk font-bold  text-green-500 text-sm uppercase tracking-wide">New</span>

                    <div
                        class="group absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-85 py-20 opacity-0 transition-opacity group-hover:opacity-75">
                        <a href="/cart"
                            class="mr-3 flex items-center rounded-full bg-white px-3 py-3 transition-all hover:bg-primary-light">
                            <i class="fa-solid fa-magnifying-glass text-black"></i>
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between pt-6">
                    <div>
                        <h3 class="font-hk text-base text-gray-700">{{ announcement.title }}</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <div class="rating rating-lg rating-half w-20">
                                    <input type="radio" :name="'rating-' + announcement.id" class="rating-hidden" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-2" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-1" />
                                    <input type="radio" :name="'rating-' + announcement.id"
                                        class="bg-orange-500 mask mask-star-2 mask-half-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="font-hk text-xl font-bold text-orange-500">${{ announcement.price }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>