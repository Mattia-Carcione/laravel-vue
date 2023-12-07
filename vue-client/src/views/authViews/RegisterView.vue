<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Create an Account
        </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- Register form -->
        <form class="space-y-6 mx-2 lg:mx-0" action="#" method="POST" @submit.prevent="register(form)">

            <!-- Validation name error -->
            <div v-if="error.name" class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <span class="font-bold block sm:inline">{{ error.name[0] }}</span>
            </div>

            <!-- Name input -->
            <div>
                <label for="name" class="block text-sm font-medium leading-6">Your Name</label>
                <div class="mt-2">
                    <input :class="{ 'border-red-700': error.name, 'border-2': error.name }" v-model="form.name" id="name"
                        name="name" type="text" placeholder="First Name Last Name" required
                        class="block w-full rounded-md border-0 px-3 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- Validation email error -->
            <div v-if="error.email" class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <span v-if="error.email" class="font-bold block sm:inline">{{ error.email[0] }}</span>
            </div>

            <!-- Email input -->
            <div>
                <label for="email" class="block text-sm font-medium leading-6">Email</label>
                <div class="mt-2">
                    <input :class="{ 'border-red-700': error.email, 'border-2': error.email }" v-model="form.email"
                        id="email" name="email" type="email" required placeholder="Enter your email"
                        class="block w-full px-3 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- Validation password error -->
            <div v-if="error.password" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert">
                <span v-for="error in error.password" class="font-bold pr-1 block sm:inline">{{ error }}</span>
            </div>

            <!-- Password input -->
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6">Choose Password</label>
                </div>
                <div class="mt-2 relative rounded-md shadow-sm">
                    <input :class="{ 'border-red-700': error.password, 'border-2': error.password }" v-model="form.password"
                        :type="showPassword ? 'text' : 'password'" id="password" name="password" required
                        placeholder="Password"
                        class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <!-- toggle password -->
                        <button @click="toggleShowPassword" type="button"
                            class="text-gray-500 focus:outline-none">
                            <span v-if="showPassword"><i class=" far fa-eye"></i></span>
                            <span v-else><i class=" far fa-eye-slash"></i></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Input Conferma Password -->
            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password-confirm" class="block text-sm font-medium leading-6">Confirm
                        Password</label>
                </div>
                <div class="mt-2 relative rounded-md shadow-sm">
                    <input :class="{ 'border-red-700': error.password, 'border-2': error.password }"
                        v-model="form.password_confirmation" :type="showPasswordConfirm ? 'text' : 'password'"
                        id="password-confirm" name="password-confirm" required placeholder="Confirm Password"
                        class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <!-- toggle password confirm -->
                        <button @click="toggleShowPasswordConfirm" type="button"
                            class="text-gray-500 focus:outline-none">
                            <span v-if="showPasswordConfirm"><i class=" far fa-eye"></i></span>
                            <span v-else><i class=" far fa-eye-slash"></i></span>
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

        <p class="mt-10 pb-5 text-center text-sm text-white-500">
            Already have an account?
            <RouterLink to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in
            </RouterLink>
        </p>
    </div>
</template>

<script>
import useAuth from '../../auth/useAuth'
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            error: {
                name: '',
                email: '',
                password: '',
            },
            showPassword: false,
            showPasswordConfirm: false,
        }
    },
    methods: {
        async register(form) {
            this.showPassword = false;
            this.showPasswordConfirm = false;
            const auth = useAuth();
            await auth.register(form);
            this.catchError(auth.getErrors.value);
        },
        catchError(error) {
            if (error) {
                this.error = error;
            } else {
                this.$router.push({ name: 'profile' });
            }
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        toggleShowPasswordConfirm() {
            this.showPasswordConfirm = !this.showPasswordConfirm;
        }
    }
}
</script>
