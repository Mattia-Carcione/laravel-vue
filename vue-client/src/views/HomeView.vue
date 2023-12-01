<script>
import useAnnouncement from '../announcement/useAnnouncement';
import Card from '../components/Card.vue';
export default {
  components: {
    Card
  },
  data() {
    return {
      fetch: useAnnouncement(),
      announcements: {},
      image: "http://localhost:8000/storage/avatars/"
    }
  },
  methods: {
    async fetchData() {
      try {
        await this.fetch.fetchAnnouncements()
        const response = this.fetch.getData;
        this.announcements = response.data.slice(0, 8);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <header>
    <div class="hero min-h-screen bg-fixed"
      style="background-image: url(https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-3xl font-bold">New arrivals are here</h1>
          <p class="mb-5">The new arrivals have, well, newly arrived. Check out the latest options from our summer
            small-batch release while they're still in stock.</p>
          <RouterLink to="/announcements" class="btn btn-outline text-white border-white rounded-none">Get Started
          </RouterLink>
        </div>
      </div>
    </div>
  </header>

  <main class="bg-gray-100">
    <section class="pt-10">
      <div class="grid grid-cols-1 gap-10 pb-20 md:pb-24 lg:grid-cols-2 lg:pb-32">
        <div class="mx-auto px-10 text-center lg:mx-0 lg:text-left">
          <div class="pb-4 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3">
            <h1 class="font-butler text-3xl text-blue-600 md:text-4xl lg:text-4.5xl">
              SnapList
            </h1>
            <p class="pt-4 font-hk text-lg text-secondary-lighter">
              Checkout our newest announcements
            </p>
          </div>
        </div>
        <div class="mt-6 sm:mt-10 lg:mt-0">
          <div class="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center"
            style="background-image:url(https://wips.plug.it/cips/italiaonline.it/blog/cms/2021/05/e-commerce.jpg)">
            <div class="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
              <h3 class="font-hk text-xl text-yellow-200 font-semibold sm:text-2xl md:text-3xl">
                Cell Phones <br> Collection
              </h3>
              <a href="/category/Cell%20Phones" class="group flex items-center pt-5">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <i class="fa fa-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
                </div>
                <span
                  class="-mt-1 pl-3 font-hk font-semibold leading-none text-yellow-600 transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                  Get it now</span>
              </a>
            </div>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68"
          style="background-image:url(https://joburg.co.za/wp-content/uploads/2020/08/641.jpg)">
          <div class="absolute inset-0 px-6 py-14 md:w-2/3 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-pink-100 sm:text-2xl md:text-3xl">
              Clothing your way! For everyone
            </h3>
            <a href="/category/Clothing" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="fa fa-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-sky-200 transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                Get it now
              </p>
            </a>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center lg:row-span-2 lg:h-auto"
          style="background-image:url(https://img.freepik.com/premium-photo/high-angle-books-with-pink-background_23-2148898316.jpg?w=2000)">
          <div class="absolute inset-0 w-2/3 px-6 py-14 sm:py-16 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-orange-400 sm:text-2xl md:text-3xl">
              Do you want reading <br> a book?
            </h3>
            <a href="/category/Books" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="fa fa-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-red-600 transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                Get it now
              </p>
            </a>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68"
          style="background-image:url(https://img.freepik.com/premium-photo/online-shopping-concept-furniture-surrounded-by-sofas-armchairs-fabric-chairs-promotion-sales-furniture-with-shopping-bag-shipping-box-pastel-background-3d-rendering_156429-5080.jpg)">
          <div class="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-gray-400 sm:text-2xl md:text-3xl">
              Check Furniture in SnapList
            </h3>
            <a href="/category/Furniture" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="fa fa-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-teal-500 transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                Get it now
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="flex flex-col py-20 md:flex-row md:py-24">
        <div
          class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <i class="h-12 w-12 text-slate-500 object-contain object-center fa-solid fa-box-open"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Free shipping
            </h3>
            <p class="font-hk text-base tracking-wide text-slate-500">
              On all orders over $30
            </p>
          </div>
        </div>

        <div
          class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <i class="h-12 w-12 text-slate-500 object-contain object-center fa-solid fa-phone-volume"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Always available
            </h3>
            <p class="font-hk text-base tracking-wide text-slate-500">
              24/7 call center available
            </p>
          </div>
        </div>

        <div
          class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <i class="h-12 w-12 text-slate-500 object-contain object-center fa-solid fa-truck-fast"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Free returns
            </h3>
            <p class="font-hk text-base tracking-wide text-slate-500">
              30 days free return policy
            </p>
          </div>
        </div>

      </div>
    </section>

    <section v-if="announcements" class="bg-zinc-50">
      <div class="p-10 text-center font-semibold text-4xl">
        <h1 class="font-hk font-semibold text-slate-700">Newest Announcements</h1>
        <p class="font-hk text-lg pt-5 lg:px-44 text-slate-500">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some
          form.
        </p>
      </div>
      <div class="grid grid-cols-2 p-10 lg:px-20 gap-10 sm:grid-cols-3 md:grid-cols-4   bg-zinc-50">
        <div v-for="announcement in announcements" :key="announcement.id"
          class="group relative w-full lg:last:hidden xl:last:block">
          <Card :announcement="announcement" />
        </div>
      </div>
    </section>

    <section v-else>
      <div class="text-center flex flex-col items-center bg-white">
        <h2 class="text-3xl font-bold py-5">There aren't any announcements</h2>
        <img class="w-96 h- h-96" src="http://localhost:8000/storage/noFile.jpeg" alt="">
      </div>
    </section>
  </main>
</template>
