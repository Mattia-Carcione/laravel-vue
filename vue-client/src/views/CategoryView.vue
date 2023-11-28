<script>
export default {
    props: {
        categories: Array
    },
    data() {
        return {
            category: [],
            date: '',
            lessThan24Hours: false
        }
    },
    methods: {
        updateData() {
            this.category = this.$route.params.name;
        },
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
        this.updateData();
    },
    beforeRouteUpdate(to, from, next) {
        this.category = to.params.name;
        next();
    }
}
</script>

<template>
    <header class="lg:mt-14 bg-white">
        <div class="relative flex">
            <div class="mx-10 mt-10 h-56 w-full bg-cover bg-center bg-no-repeat lg:h-72"
                style="background-image:url(https://iamcheated.indianmoney.com/uploads/ArticleImages/disadvantages-of-online-shopping-10292018192422.png)">
            </div>
            <div class="c-hero-gradient-bg absolute top-0 left-0 h-56 w-full bg-cover bg-no-repeat lg:h-68">
                <div class="hidden sm:block py-20 px-6 sm:px-12 lg:px-20">
                    <h1 class="font-butler text-2xl text-black sm:text-3xl md:text-4.5xl lg:text-5xl">
                        {{ category }}
                    </h1>
                    <div class="flex pt-2">
                        <RouterLink to="/" class="font-hk text-base link transition-colors hover:text-primary">Home</RouterLink>
                        <span class="px-2 font-hk text-base text-black">.</span>
                        <span class="font-hk text-base text-black">{{ category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="bg-white z-[1] flex justify-center py-5 items-baseline sticky lg:pt-20 top-0">
        <div class="text-sm breadcrumbs">
            <ul>
                <li><RouterLink to="/">SnapList</RouterLink></li>
                <li>Category</li>
                <li class="underline underline-offset-2">{{ category }}</li>
            </ul>
        </div>
    </div>

    <section class="p-20 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-8 gap-x-4">
        <div v-for="c in category" :key="category.id" class="card bg-base-100 shadow-xl drop-shadow-2xl hover:scale-105">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ c }}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    </section>
</template>