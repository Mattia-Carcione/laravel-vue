<script>
export default {
    props: {
        announcement: Object
    },
    methods: {
        lessThan24Hours(date) {
            const createdDate = new Date(date);
            const currentDate = new Date();
            const timeDifference = currentDate - createdDate;
            const hoursDifference = timeDifference / (1000 * 60 * 60);
            return hoursDifference < 24
        }
    }
}
</script>

<template>
    <div class="relative flex items-center justify-center rounded">
        <div class="h-68 w-full bg-cover bg-center bg-no-repeat">
            <img src="http://localhost:8000/storage/default-image.jpeg" alt="image">
        </div>
        <span v-if="lessThan24Hours(announcement.created_at)"
            class="absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full font-hk font-bold  text-green-500 text-sm uppercase tracking-wide">New</span>

        <div
            class="group absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-85 py-20 opacity-0 transition-opacity group-hover:opacity-75">
            <RouterLink :to="`/announcements/${announcement.slug}`"
                class="mr-3 flex items-center rounded-full bg-white p-4 transition-all hover:bg-primary-light">
                <i class="fa-solid fa-magnifying-glass text-black"></i>
            </RouterLink>
        </div>
    </div>
    <div class="flex items-center justify-between pt-6">
        <div>
            <h3 class="font-hk text-base text-gray-700">{{ announcement.title }}</h3>
            <p class="text-sm text-gray-500">{{ announcement.category.name }}</p>
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
        <span class="font-hk text-xl font-bold text-orange-500">${{ announcement.price }}</span>
    </div>
</template>