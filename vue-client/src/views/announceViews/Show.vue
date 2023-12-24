<script>
import useAnnouncement from '../../announcement/useAnnouncement';

export default {
    props: {
        user: Object,
        categories: Array
    },
    data() {
        return {
            fetch: useAnnouncement(),
            announcement: {
                user: '',
                category: '',
            },
            date: '',
            slug: '',
            selectedImage: "http://localhost:8000/storage/default-image.jpeg",
        };
    },
    methods: {
        async fetchData() {
            await this.fetch.show(this.$route.params.name).
                then(() => {
                    if (!this.fetch.getError) {
                        this.announcement = this.fetch.getData;
                        this.slug = this.announcement.slug.slice(-7);
                        this.formatDate();
                    } else {
                        console.log(this.fetch.getError);
                        this.$router.push({ name: 'not-found' });
                    }
                })
                .catch(error => {
                    console.log(error);
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
        lessThan24Hours() {
            const createdDate = new Date(this.announcement.created_at);
            const currentDate = new Date();
            const timeDifference = currentDate - createdDate;
            const hoursDifference = timeDifference / (1000 * 60 * 60);
            return (hoursDifference < 24)
        }
    }, created() {
        this.fetchData();
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchData();
        next();
    }
}
</script>

<template>
    <div class="px-5 flex bg-slate-50 flex-col justify-between pt-20 pb-24 lg:flex-row">
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
                    <p v-if="lessThan24Hours()"
                        class="ml-8 rounded-full bg-indigo-500 px-5 py-2 font-hk text-sm font-bold uppercase leading-none text-white">
                        New
                    </p>
                </div>
                <div class="flex items-center pt-3">
                    <span class="font-hk text-2xl text-slate-800">${{ announcement.price }}</span>
                    <!-- <span class="pl-5 font-hk text-xl text-grey-darker line-through">$35.0</span> -->
                </div>

                <div class="flex items-center">
                    <div class="flex items-center">
                        <div class="rating rating-lg rating-half w-20">
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
            <div class="flex pb-5">
                <p class="font-hk font-bold text-slate-800">Published on:</p>
                <p class="font-hkbold pl-3 text-slate-800">
                    {{ date }}
                </p>
            </div>
            <div class="flex pb-5">
                <p class="font-hk font-bold text-slate-800">By:</p>
                <p class="font-hkbold pl-3 text-slate-800">
                    {{ announcement.user.name }} {{ announcement.user.surname }}
                </p>
            </div>
            <p class="font-hk font-bold pb-3 text-slate-800">Features:</p>

            <p class="pb-5 font-hk text-slate-800">
                {{ announcement.about }}
            </p>
            <div class="group flex pb-8">
                <a href="#" class="btn btn-outline mr-4 md:mr-6">Add to cart</a>
                <a href="#" class="btn btn-primary">BUY NOW</a>
            </div>
            <div class="flex pb-2">
                <p class="font-hk text-secondary">SKU:</p>
                <p class="font-hkbold pl-3 text-secondary">
                    {{ slug.toUpperCase() }}
                </p>
            </div>
            <p class="font-hk text-slate-800">
                <span class="font-semibold pr-2">Categories:</span>{{ announcement.category.name }}
            </p>
        </div>
    </div>

    <div class="lg:p-10 px-5 pb-5 bg-slate-50">
        <div class="lg:mx-10 bg-slate-200 h-44 min-h-min">
            <h2 class="p-5 font-hk font-bold text-slate-800">Description:</h2>
            <p class="px-5 font-hk text-slate-800">{{ announcement.body }}</p>
        </div>
    </div>
</template>

<style scoped></style>