<script lang="ts">
import useAuth from '../../auth/useAuth'
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
export default {
  data() {
    const state = reactive({
      authenticated: useAuth().getAuthenticated,
      user: useAuth().getUser,
      errors: useAuth().getErrors,
    });
    return {
      state,
      form: {
        email: '',
        password: '',
        error: '',
      },
      auth: useAuth(),
      showPassword: false,
    }
  },
  methods: {
    async login(form: Object) {
      this.showPassword = false;
      await this.auth.login(form);
      this.form.error = this.state.errors;
      this.redirect(this.state.authenticated);
    },
    redirect(boolean: boolean) {
      if (boolean) {
        this.$router.push({ name: 'home' })
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<template>
  <!-- !!!temporary template login form!!! -->

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- login form -->
      <form class="space-y-6" action="#" method="POST" @submit.prevent="login(form)">

        <!-- validation email error -->
        <div v-if="form.error.email" class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert">
          <span class="font-bold block sm:inline">{{ state.errors.email[0] }}</span>
        </div>

        <!-- email input -->
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white-900">Email address</label>
          <div class="mt-2">
            <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required
              placeholder="Enter your email"
              class="block w-full px-3 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <!-- validation password error -->
        <div v-if="form.error.password"
          class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span class="font-bold block sm:inline">{{ state.errors.password[0] }}</span>
        </div>

        <!-- Password input -->
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white-900">Choose Password</label>
          </div>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input v-model="form.password" :type="showPassword ? 'text' : 'password'" id="password" name="password"
              required placeholder="Password"
              class="form-input py-2 px-3 block w-full text-white leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <!-- toggle password -->
              <button @click="togglePasswordVisibility" type="button"
                class="text-gray-500 focus:outline-none focus:text-gray-700">
                <span v-if="showPassword"><i class="text-white far fa-eye"></i></span>
                <span v-else><i class="text-white far fa-eye-slash"></i></span>
              </button>
            </div>
          </div>
        </div>

        <!-- login button -->
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-white-500">
        Not a member?
        <RouterLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>