<script>
export default {
    props: {
        announcement: Object
    },
    data() {
        return {
            currentSlide: 1,
        }
    },
    methods: {
        changeSlide(nextSlide) {
            this.currentSlide = nextSlide;
        }
    }
}
</script>

<template>
    <div class="relative flex items-center justify-center rounded">
        <div class="h-68 w-full bg-cover bg-center bg-no-repeat">
            <div class="carousel w-full h-32 rounded-box">
                <div v-if="currentSlide === 1" key="slide1" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="changeSlide(4)" class="btn btn-outline bg-white btn-xs">❮</button>
                        <button @click="changeSlide(2)" class="btn btn-outline bg-white btn-xs">❯</button>
                    </div>
                </div>
                <div v-else-if="currentSlide === 2" key="slide2" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="changeSlide(1)" class="btn btn-outline bg-white btn-xs">❮</button>
                        <button @click="changeSlide(3)" class="btn btn-outline bg-white btn-xs">❯</button>
                    </div>
                </div>
                <div v-else-if="currentSlide === 3" key="slide3" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="changeSlide(2)" class="btn btn-outline bg-white btn-xs">❮</button>
                        <button @click="changeSlide(4)" class="btn btn-outline bg-white btn-xs">❯</button>
                    </div>
                </div>
                <div v-else-if="currentSlide === 4" key="slide4" class="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button @click="changeSlide(3)" class="btn btn-outline bg-white btn-xs">❮</button>
                        <button @click="changeSlide(1)" class="btn btn-outline bg-white btn-xs">❯</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-1">
        <h3 class="font-hk text-base font-semibold">{{ announcement.title }}</h3>
        <div class="flex flex-wrap items-center justify-between pt-1">
            <p class="text-sm py-1">{{ announcement.category.name }}</p>
            <!-- link provvisorio -->
            <RouterLink to="/profile/dashboard" class="text-sm border p-1 bg-white text-black">See more</RouterLink>
        </div>
    </div>
</template>