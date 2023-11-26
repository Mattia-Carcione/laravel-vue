<script>
export default {
    props: {
        categories: Array
    },
    data() {
        return {
            category: [],
        }
    },
    methods: {
        updateData() {
            this.category = this.$route.params.name;
            console.log(this.category);
        }
    },
    created() {
        this.updateData();
    },
    beforeRouteUpdate(to, from, next) {
        this.category = to.params.name;
        console.log(this.category);

        next();
    }
}
</script>

<template>
    <header class="mt-14 bg-white">
        <div class="carousel rounded-box">
            <div class="carousel-item">
                <img src="https://tokiopiano.ch/wp-content/uploads/2021/06/foto-per-post-Tokio-Piano.png" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://www.bewesrl.com/wp-content/uploads/2020/04/5-piattaforme-pubblicitarie-da-testare-dopo-Google-e-Facebook.jpg" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://m.media-amazon.com/images/G/31/amazonservices/blog/SOA_Blog_1_The-_Wild-Wild-World-of-Online-Selling._SL1280_FMjpg_.jpg" alt="Burger" />
            </div>
        </div>
    </header>

    <div class="bg-white z-[1] flex justify-center py-5 items-baseline sticky pt-20 top-0">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>SnapList</li>
                <li>Category</li>
                <li><a>{{ category }}</a></li>
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