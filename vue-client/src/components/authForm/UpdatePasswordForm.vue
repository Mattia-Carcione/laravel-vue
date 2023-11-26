<script>
import useAuth from '../../auth/useAuth';

export default {
    props: {
        form: Object,
    },
    data() {
        return {
            showCurrentPassword: false,
            showPassword: false,
            showPasswordConfirm: false,
        };
    },
    methods: {
        async updatePassword() {
            await useAuth().updatePassword(this.form);
            this.clearInfo();
            this.form.error = useAuth().getErrors;
            this.form.success = useAuth().getMessage;
        },
        clearInfo() {
            this.form.email = '';
            this.form.current_password = '';
            this.form.password = '';
            this.form.password_confirmation = '';
            this.form.error = '';
            this.form.success = '';
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
    <!-- Update Password Form -->
    <form @submit.prevent="updatePassword" class="md:mx-24">
        <!-- Validation current password error -->
        <div v-if="form.error.current_password"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
            <span class="font-bold block sm:inline">{{ form.error.current_password[0]
            }}</span>
        </div>

        <!-- Current Password input -->
        <label for="current_password" class="block font-bold mb-2">
            Current Password
        </label>
        <div class="relative">
            <input :type="showCurrentPassword ? 'text' : 'password'"
                :class="{ 'border-red-700': form.error.current_password, 'border-2': form.error.current_password }"
                v-model="form.current_password" type="password" id="current_password" name="current_password"
                placeholder="Enter your Current Password" class="w-full  border rounded-md mb-5 py-2 px-3" />
            <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                <!-- toggle password confirm -->
                <button @click="toggleCurrentPasswordVisibility" type="button" class="focus:outline-none">
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
        <label for="newPassword" class="block font-bold mb-2">
            New Password
        </label>
        <div class="relative">
            <input :type="showPassword ? 'text' : 'password'"
                :class="{ 'border-red-700': form.error.password, 'border-2': form.error.password }" v-model="form.password"
                type="password" id="newPassword" name="newPassword" placeholder="Enter New Password"
                class="w-full border rounded-md mb-5 py-2 px-3" />
            <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                <!-- toggle password confirm -->
                <button @click="togglePasswordVisibility" type="button" class="focus:outline-none focus">
                    <span v-if="showPassword"><i class=" far fa-eye"></i></span>
                    <span v-else><i class=" far fa-eye-slash"></i></span>
                </button>
            </div>
        </div>

        <!-- Confirm Password input -->
        <label for="newPasswordConfirm" class="block font-bold mb-2">
            Confirm Password
        </label>
        <div class="relative">
            <input :type="showPasswordConfirm ? 'text' : 'password'"
                :class="{ 'border-red-700': form.error.password, 'border-2': form.error.password }"
                v-model="form.password_confirmation" type="password" id="newPasswordConfirm" name="newPasswordConfirm"
                placeholder="Confirm Password" class="w-full border rounded-md mb-5 py-2 px-3" />
            <div class="absolute top-0 bottom-5 right-0 pr-3 flex text-sm leading-5">
                <!-- toggle password confirm -->
                <button @click="togglePasswordConfirmVisibility" type="button" class="focus:outline-none focus">
                    <span v-if="showPasswordConfirm"><i class=" far fa-eye"></i></span>
                    <span v-else><i class=" far fa-eye-slash"></i></span>
                </button>
            </div>
        </div>

        <!-- Submit button -->
        <div class="flex justify-end gap-4.5 mt-2">
            <div @click="clearInfo"
                class="flex justify-center btn-outline rounded border border-stroke py-2 px-6 font-medium  hover:shadow-1  cursor-pointer">
                Clear
            </div>
            <button
                class="flex ml-2 justify-center rounded shadow-sm bg-primary py-2 px-6 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-opacity-90"
                type="submit">
                Save
            </button>
        </div>
    </form>
</template>