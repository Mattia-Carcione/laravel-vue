<script>
import useAuth from '../../auth/useAuth';

export default {
    props: {
        user: Object,
    },
    data() {
        return {
            error: {
                name: '',
                surname: '',
                about: '',
                phone: '',
                bio: '',
            },
            message: '',
        }
    },
    emits: ['update-message'],
    methods: {
        async updateUser(credentials) {
            const auth = useAuth();
            await auth.updateUser(credentials)
                .then(() => {
                    if (!auth.getErrors.value) {
                        this.message = auth.getMessage;
                        this.emitFunction();
                    } else {
                        this.error = auth.getErrors.value;
                    }
                });
        },
        emitFunction() {
            this.$emit('update-message', this.message);
        },
        clearInfo() {
            this.user.name = '';
            this.user.surname = '';
            this.user.about = '';
            this.user.phone = '';
            this.user.bio = '';
        },
    }
}
</script>

<template>
    <!-- Personal Information -->
    <div class="md:col-span-6 col-span-10">
        <div class="rounded-sm border border-stroke shadow-default">
            <div class="border-b border-stroke py-4 px-7">
                <h3 class="font-medium">
                    Personal Information
                </h3>
            </div>
            <div class="p-7">
                <!-- Form Edit -->
                <form @submit.prevent="updateUser(user)" method="POST">
                    <!-- Validation name error -->
                    <div v-if="error.name"
                        class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.name[0] }}
                        </span>
                    </div>

                    <!-- Validation surname error -->
                    <div v-if="error.surname"
                        class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.surname[0] }}
                        </span>
                    </div>

                    <div class="mb-5.5 flex mb-3 flex-col gap-5.5 sm:flex-row">
                        <!-- Name -->
                        <div class="w-full sm:w-1/2 mr-1">
                            <label class="mb-3 block text-sm font-medium " for="name">
                                Name
                            </label>
                            <div class="relative">
                                <span class="absolute pl-2 left-4.5 top-4">
                                    <svg class="fill-black" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                                fill=""></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </span>

                                <input :class="{ 'border-red-700': error.name, 'border-green-700': message }"
                                    v-model="user.name"
                                    class="w-full rounded border-2 border-stroke bg-slate-200 py-3 pl-10 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                    placeholder="Your Name" type="text" name="name" id="name">
                            </div>
                        </div>

                        <!-- Surname -->
                        <div class="w-full sm:w-1/2">
                            <label class="mb-3 block text-sm font-medium " for="surname">
                                Surname
                            </label>

                            <input :class="{ 'border-red-700': error.surname, 'border-green-700': message }"
                                v-model="user.surname"
                                class="w-full rounded border-2 border-stroke bg-slate-200 p-3 pl-11.5 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                placeholder="Your Surname" type="text" name="surname" id="surname">
                        </div>
                    </div>


                    <!-- Validation error -->
                    <div v-if="error.phone"
                        class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.phone[0] }}
                        </span>
                    </div>

                    <!-- Phone -->
                    <div class="mb-5.5">
                        <label class="mb-3 block text-sm font-medium" for="phone">
                            Phone
                        </label>
                        <div class="relative">
                            <span class="absolute pl-3 left-4.5 top-3.5">
                                <i class="fa-solid fa-phone text-black"></i>
                            </span>

                            <input :class="{ 'border-red-700': error.phone, 'border-green-700': message }"
                                v-model="user.phone"
                                class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                placeholder="Phone" type="text" name="phone" id="phone">
                        </div>
                    </div>

                    <!-- Validation about error -->
                    <div v-if="error.about"
                        class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.about[0] }}
                        </span>
                    </div>

                    <!-- About Job -->
                    <div class="my-5">
                        <label class="mb-3 block text-sm font-medium" for="about">About Job</label>
                        <div class="relative">
                            <span class="absolute pl-3 left-4.5 top-3.5">
                                <i class="fa-solid fa-briefcase text-black"></i>
                            </span>

                            <input :class="{ 'border-red-700': error.about, 'border-green-700': message }"
                                v-model="user.about"
                                class="w-full rounded border-2 border-stroke bg-slate-200 py-3 px-4.5 pl-10 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                placeholder="Enter about job" type="text" name="about" id="about">
                        </div>
                    </div>

                    <!-- Validation bio error -->
                    <div v-if="error.bio"
                        class="flex bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 mb-2 rounded relative"
                        role="alert">
                        <span class="font-bold block sm:inline">
                            {{ error.bio[0] }}
                        </span>
                    </div>

                    <!-- Bio -->
                    <div class="mb-5.5">
                        <label class="my-3 block text-sm font-medium" for="bio">BIO</label>
                        <div class="relative">
                            <span class="absolute left-4.5 top-4 pl-3">
                                <svg class="fill-black" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8" clip-path="url(#clip0_88_10224)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                                            fill=""></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                                            fill=""></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_88_10224">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

                            <textarea :class="{ 'border-red-700': error.bio, 'border-green-700': message }"
                                v-model="user.bio"
                                class="w-full rounded border-2 border-stroke bg-slate-200 py-3 pl-11 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                name="bio" id="bio" rows="6" placeholder="Write your bio here">
                                                                                            {{ user.bio }}
                                                                                        </textarea>
                        </div>
                    </div>

                    <!-- Save button -->
                    <div class="flex justify-end gap-4.5">
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
            </div>
        </div>
    </div>
</template>