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
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            showPassword: false,
            showPasswordConfirm: false,
            auth: useAuth()
        }
    },
    methods: {
        registerUser() {
            this.showPassword = false;
            this.showPasswordConfirm = false;
            useAuth().registerUser(this.form)
            this.redirect(this.state.authenticated)
        },
        redirect(boolean: boolean) {
            if (boolean) {
                this.$router.push({ name: 'home' })
            }
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        togglePasswordConfirmVisibility() {
            this.showPasswordConfirm = !this.showPasswordConfirm;
        }
    }
}

</script>

<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- Register form -->
        <form class="space-y-6" action="#" method="POST" @submit.prevent="registerUser">

            <!-- Validation name error -->
            <div v-if="state.errors.name"
                class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span v-if="state.errors.name" class="font-bold block sm:inline">{{ state.errors.name[0] }}</span>
            </div>

            <!-- Name input -->
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-white-900">Your Name</label>
                <div class="mt-2">
                    <input v-model="form.name" id="name" name="name" type="text" required placeholder="First Name Last Name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- Validation email error -->
            <div v-if="state.errors.email"
                class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span v-if="state.errors.email" class="font-bold block sm:inline">{{ state.errors.email[0] }}</span>
            </div>

            <!-- Email input -->
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-white-900">Email</label>
                <div class="mt-2">
                    <input v-model="form.email" id="email" name="email" type="email" required placeholder="Enter your email"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- Validation password error -->
            <div v-if="state.errors.password"
                class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span v-if="state.errors.password" class="font-bold block sm:inline">{{ state.errors.password[0] }}</span>
            </div>

            <!-- Password input -->
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-white-900">Choose Password</label>
                </div>
                <div class="mt-2 relative rounded-md shadow-sm">
                    <input v-model="form.password" :type="showPassword ? 'text' : 'password'" id="password" name="password"
                        required placeholder="Password"
                        class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
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

            <!-- Validation password confirm error -->
            <div v-if="state.errors.password_confirmation"
                class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span v-if="state.errors.password_confirmation" class="font-bold block sm:inline">{{
                    state.errors.password_confirmation[0] }}</span>
            </div>

            <!-- Input Conferma Password -->
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password-confirm" class="block text-sm font-medium leading-6 text-white-900">Confirm
                        Password</label>
                </div>
                <div class="mt-2 relative rounded-md shadow-sm">
                    <input v-model="form.password_confirmation" :type="showPasswordConfirm ? 'text' : 'password'"
                        id="password-confirm" name="password-confirm" required placeholder="Confirm Password"
                        class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <!-- toggle password confirm -->
                        <button @click="togglePasswordConfirmVisibility" type="button"
                            class="text-gray-500 focus:outline-none focus:text-gray-700">
                            <span v-if="showPasswordConfirm"><i class="text-white far fa-eye"></i></span>
                            <span v-else><i class="text-white far fa-eye-slash"></i></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Register button -->
            <div>
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Register
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-white-500">
            Already have an account?
            <RouterLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in
            </RouterLink>
        </p>
    </div>
</template>

<style scoped></style>