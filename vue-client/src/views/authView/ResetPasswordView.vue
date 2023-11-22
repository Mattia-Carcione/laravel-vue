<script>
import useAuth from '../../auth/useAuth';

export default {
    props: {
        user: Object
    },
    data() {
        return {
            isEmailAccordionOpen: false,
            isPasswordAccordionOpen: false,
            showCurrentPassword: false,
            showPassword: false,
            showPasswordConfirm: false,
            form: {
                email: '',
                current_password: '',
                password: '',
                password_confirmation: '',
                error: useAuth().getErrors,
                success: useAuth().getMessage,
            },
        };
    },
    methods: {
        toggleEmailAccordion() {
            this.isEmailAccordionOpen = !this.isEmailAccordionOpen;
            this.isPasswordAccordionOpen = false;
        },
        togglePasswordAccordion() {
            this.isPasswordAccordionOpen = !this.isPasswordAccordionOpen;
            this.isEmailAccordionOpen = false;
        },
        changeEmail() {
            this.clearInfo();
        },
        async resetPassword() {
            await useAuth().resetPassword(this.form);
            this.clearInfo();
        },
        clearInfo() {
            this.form.email = '';
            this.form.current_password = '';
            this.form.password = '';
            this.form.password_confirmation = '';
            this.form.error = '';
        },
        toggleCurrentPasswordVisibility() {
            this.showCurrentPassword = !this.showCurrentPassword;
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        togglePasswordConfirmVisibility() {
            this.showPasswordConfirm = !this.showPasswordConfirm;
        }
    },
};
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg  font-bold text-black">
            Privacy Policy
        </h2>
    </div>

    <div class="md:mx-20 mt-20 border border-stroke bg-white shadow-default">
        <div class="accordion">
            <div class="accordion-header" @click="toggleEmailAccordion">
                <div class="accordion-title">Change Email</div>
                <div class="accordion-icon" :class="{ 'open': isEmailAccordionOpen }">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div v-if="isEmailAccordionOpen" class="accordion-content">
                <form @submit.prevent="changeEmail">
                    <!-- Form per il cambio dell'email -->
                    <label for="newEmail" class="block text-gray-700 font-bold mb-2">
                        New Email:
                    </label>
                    <input v-model="newEmail" type="email" id="newEmail" name="newEmail"
                        class="w-full bg-slate-200 border rounded-md mb-2 py-2 px-3" placeholder="New Email" />
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-700">
                        Change Email
                    </button>
                </form>
            </div>
        </div>

        <div class="accordion">
            <div class="accordion-header" @click="togglePasswordAccordion">
                <div class="accordion-title">Reset Password</div>
                <div class="accordion-icon" :class="{ 'open': isPasswordAccordionOpen }">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div v-if="isPasswordAccordionOpen" class="accordion-content">
                <!-- Update Password Form -->
                <form @submit.prevent="updatePassword" class="md:mx-24">
                    <!-- Validation current password error -->
                    <div v-if="form.error.current_password"
                        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
                        <span class="font-bold block sm:inline">{{ form.error.current_password[0]
                        }}</span>
                    </div>

                    <!-- Current Password input -->
                    <label for="current_password" class="block text-gray-700 font-bold mb-2">
                        Current Password
                    </label>
                    <div class="relative">
                        <input :type="showCurrentPassword ? 'text' : 'password'"
                            :class="{ 'border-red-700': form.error.current_password, 'border-2': form.error.current_password }"
                            v-model="form.current_password" type="password" id="current_password" name="current_password"
                            placeholder="Enter your Current Password"
                            class="w-full bg-slate-200 border rounded-md mb-5 py-2 px-3" />
                        <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                            <!-- toggle password confirm -->
                            <button @click="toggleCurrentPasswordVisibility" type="button"
                                class="text-gray-500 focus:outline-none focus:text-gray-700">
                                <span v-if="showCurrentPassword"><i class=" far fa-eye"></i></span>
                                <span v-else><i class=" far fa-eye-slash"></i></span>
                            </button>
                        </div>
                    </div>

                    <!-- Validation password error -->
                    <div v-if="form.error.password"
                        class=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
                        <div v-for="error in form.error.password" class="font-bold block sm:inline">{{ error
                        }} </div>
                    </div>

                    <!-- Password input -->
                    <label for="newPassword" class="block text-gray-700 font-bold mb-2">
                        New Password
                    </label>
                    <div class="relative">
                        <input :type="showPassword ? 'text' : 'password'" :class="{ 'border-red-700': form.error.password, 'border-2': form.error.password }"
                            v-model="form.password" type="password" id="newPassword" name="newPassword"
                            placeholder="Enter New Password" class="w-full bg-slate-200 border rounded-md mb-5 py-2 px-3" />
                        <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                            <!-- toggle password confirm -->
                            <button @click="togglePasswordVisibility" type="button"
                                class="text-gray-500 focus:outline-none focus:text-gray-700">
                                <span v-if="showPassword"><i class=" far fa-eye"></i></span>
                                <span v-else><i class=" far fa-eye-slash"></i></span>
                            </button>
                        </div>
                    </div>

                    <!-- Confirm Password input -->
                    <label for="newPasswordConfirm" class="block text-gray-700 font-bold mb-2">
                        Confirm Password
                    </label>
                    <div class="relative">
                        <input :type="showCurrentPassword ? 'text' : 'password'" :class="{ 'border-red-700': form.error.password, 'border-2': form.error.password }"
                            v-model="form.password_confirmation" type="password" id="newPasswordConfirm"
                            name="newPasswordConfirm" placeholder="Confirm Password"
                            class="w-full bg-slate-200 border rounded-md mb-5 py-2 px-3" />
                        <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                            <!-- toggle password confirm -->
                            <button @click="toggleCurrentPasswordVisibility" type="button"
                                class="text-gray-500 focus:outline-none focus:text-gray-700">
                                <span v-if="showCurrentPassword"><i class=" far fa-eye"></i></span>
                                <span v-else><i class=" far fa-eye-slash"></i></span>
                            </button>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="flex justify-end gap-4.5 mt-2">
                        <div @click="clearInfo"
                            class="flex justify-center btn-base-300 btn-outline rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 hover:bg-black hover:text-white dark:border-strokedark cursor-pointer">
                            Clear
                        </div>
                        <button
                            class="flex ml-2 justify-center rounded shadow-sm bg-indigo-600 py-2 px-6 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-opacity-90"
                            type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  

  
<style scoped>
.accordion {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ddd;
}

.accordion-title {
    font-weight: bold;
}

.accordion-icon {
    transition: transform 0.3s ease;
}

.open {
    transform: rotate(180deg);
}

.accordion-content {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
}
</style>
  