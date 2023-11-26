<script>
import useAnnouncement from '../announcement/useAnnouncement';

export default {
  data() {
    return {
      fetch: useAnnouncement(),
      announcements: {}
    }
  },
  methods: {
    async fetchData() {
      try {
        await this.fetch.fetchAnnouncements()
        const response = this.fetch.getData;
        this.announcements = response.data.slice(0, 6);
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
    <div class="hero min-h-screen bg-fixed" style="background-image: url(http://localhost:8000/storage/Heaader.jpeg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-primary text-5xl font-bold">SnapList</h1>
          <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quis, repellat,
            corrupti
            iste maiores vero quasi aut numquam ipsum maxime, ducimus odit consectetur porro at incidunt placeat illum
            dolore veniam.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </header>

  <main class="bg-orange-100">
    <section class="pt-10">
      <div class="grid grid-cols-1 gap-10 pb-20 md:pb-24 lg:grid-cols-2 lg:pb-32">
        <div class="mx-auto px-10 text-center lg:mx-0 lg:text-left">
          <div class="pb-4 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3">
            <h1 class="font-butler text-3xl text-secondary md:text-4xl lg:text-4.5xl">
              Trending Elyssi Collections
            </h1>
            <p class="pt-4 font-hk text-lg text-secondary-lighter">
              Checkout our newest trends this coming season
            </p>
          </div>
        </div>
        <div class="mt-6 sm:mt-10 lg:mt-0">
          <div class="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center"
            style="background-image:url(https://wips.plug.it/cips/italiaonline.it/blog/cms/2021/05/e-commerce.jpg)">
            <div class="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
              <h3 class="font-hk text-xl text-secondary font-semibold sm:text-2xl md:text-3xl">
                Passion Pearl <br> Collection
              </h3>
              <a href="/collection-list" class="group flex items-center pt-5">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <i class="bx bx-chevron-right text-xl transition-colors group-hover:text-v-red"></i>
                </div>
                <span
                  class="-mt-1 pl-3 font-hk font-semibold leading-none text-primary transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                  Get it now</span>
              </a>
            </div>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68"
          style="background-image:url(https://joburg.co.za/wp-content/uploads/2020/08/641.jpg)">
          <div class="absolute inset-0 px-6 py-14 md:w-2/3 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
              Hoodie your way! For Men
            </h3>
            <a href="/collection-list" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="bx bx-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-primary transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                Get it now
              </p>
            </a>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center lg:row-span-2 lg:h-auto"
          style="background-image:url(https://professionalessayhelp.com/wp-content/uploads/2022/10/43.jpg)">
          <div class="absolute inset-0 w-2/3 px-6 py-14 sm:py-16 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
              W.W. Shoes <br> by Elyssi
            </h3>
            <a href="/collection-list" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="bx bx-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-primary transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
                Get it now
              </p>
            </a>
          </div>
        </div>
        <div class="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68"
          style="background-image:url(https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png)">
          <div class="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
            <h3 class="font-hk text-xl font-semibold text-secondary sm:text-2xl md:text-3xl">
              Anabelle Purses by Elyssi
            </h3>
            <a href="/collection-list" class="group flex items-center pt-5">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                <i class="bx bx-chevron-right text-xl text-primary transition-colors group-hover:text-v-red"></i>
              </div>
              <p
                class="-mt-1 pl-3 font-hk font-semibold leading-none text-primary transition-colors group-hover:text-v-red sm:pl-5 sm:text-lg">
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
            <i class="h-12 w-12 text-secondary object-contain object-center fa-solid fa-box-open"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Free shipping
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary">
              On all orders over $30
            </p>
          </div>
        </div>

        <div
          class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <i class="h-12 w-12 text-secondary object-contain object-center fa-solid fa-phone-volume"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Always available
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary">
              24/7 call center available
            </p>
          </div>
        </div>

        <div
          class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
          <div>
            <i class="h-12 w-12 text-secondary object-contain object-center fa-solid fa-truck-fast"></i>
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk text-xl font-semibold tracking-wide text-primary">
              Free returns
            </h3>
            <p class="font-hk text-base tracking-wide text-secondary">
              30 days free return policy
            </p>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="m-10 text-center font-semibold text-4xl text-secondary">
        <h1>Announcements</h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 m-5 md:p-20">
        <div :key="announcement.id" v-for="announcement in announcements"
          class="card bg-base-100 shadow-xl image-full hover:scale-105">

          <figure>
            <img src="http://localhost:8000/storage/default-image.jpeg" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ announcement.title }}</h2>

            <p>{{ announcement.body }}</p>

            <div class="flex justify-start items-start">
              <span>{{ announcement.price }}</span>
              <span>€</span>
            </div>

            <div class="card-actions justify-between">
              <div>
                {{ announcement.user.name }} <br>
                {{ announcement.category.name }}
              </div>

              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>
