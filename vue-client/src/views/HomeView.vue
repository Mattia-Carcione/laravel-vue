<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      announcements: []
    }
  },
  mounted() {
    const announcementsArray = Object.values(this.data);
    this.announcements = announcementsArray.slice(0, 6);
  }
}
</script>

<template>
  <header>
    <div class="hero min-h-screen" style="background-image: url(http://localhost:8000/storage/Heaader.jpeg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">SnapList</h1>
          <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quis, repellat,
            corrupti
            iste maiores vero quasi aut numquam ipsum maxime, ducimus odit consectetur porro at incidunt placeat illum
            dolore veniam.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section>
      <div class="grid grid-cols-4 gap-2 m-10">

        <div v-for="announcement in announcements" class="card bg-base-100 shadow-xl image-full">

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
