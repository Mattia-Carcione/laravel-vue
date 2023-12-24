<script>
import useAnnouncement from '../announcement/useAnnouncement';
import useAuth from '../auth/useAuth';
import Card from '../components/Card.vue';
export default {
  props: {
    categories: Array,
    user: Object,
  },
  components: {
    Card
  },
  data() {
    return {
      announcements: null,
      image: "http://localhost:8000/storage/avatars/",
    }
  },
  methods: {
    async fetchData() {
      const fetch = useAnnouncement();
      try {
        await fetch.fetchAnnouncements()
        const response = fetch.getData.value;
        this.announcements = response.data.slice(0, 8);
      } catch (error) {
        console.log(error);
      }
    },
    async becomeRevisor() {
      if (this.user && !this.user.is_revisor) {
        const auth = useAuth();
        await auth.becomeRevisor(this.user.id)
          .then(() => {
            if (!auth.getErrors.value) {
              alert('Application submitted successfully.');
            } else {
              alert('An error occurred. Please try again later.');
            }
          })
          .catch(error => {
            console.log(error);
          })
      } else if (this.user && this.user.is_revisor) {
        alert('You are already a reviewer.');
      } else {
        alert('Please login first.');
      }
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
      alert(message);
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

    <section class="bg-custom">
      <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#f8fafc">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
              </path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div class="container mx-auto text-center py-6">

        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Join us!</h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 class="my-4 text-3xl leading-tight">Click the link below to become a Revisor!</h3>

        <button @click="becomeRevisor"
          class="mx-auto lg:mx-0 hover:scale-105 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Join us!
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bg-custom {
  background: linear-gradient(90deg, #5073b8, #1098ad);
}
</style>