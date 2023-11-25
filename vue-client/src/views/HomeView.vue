<script>
export default {
  props: {
    data: Object
  }
}
</script>

<template>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p v-for="announcements in data">{{ announcements.category.name }}</p>
</template>
