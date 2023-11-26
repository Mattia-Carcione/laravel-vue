<script>
import UpdatePassword from '../../components/authForm/UpdatePasswordForm.vue';
import TwoFactor from '../../components/authForm/TwoFactorForm.vue';

export default {
    props: {
        user: Object
    },
    components: {
        UpdatePassword,
        TwoFactor
    },
    data() {
        return {
            isTwoFactorAccordionOpen: false,
            isPasswordAccordionOpen: false,
            form: {
                current_password: '',
                password: '',
                password_confirmation: '',
                error: '',
                success: '',
            },
        }
    },
    methods: {
        toggleTwoFactorAccordion() {
            this.isTwoFactorAccordionOpen = !this.isTwoFactorAccordionOpen;
            this.isPasswordAccordionOpen = false;
        },
        togglePasswordAccordion() {
            this.isPasswordAccordionOpen = !this.isPasswordAccordionOpen;
            this.isTwoFactorAccordionOpen = false;
        }
    }
}
</script>

<template>
    <div class="mb-6 mx-5 mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 text-lg font-bold">
            Privacy Policy
        </h2>
    </div>

    <!-- Message Success -->
    <div v-if="form.success"
        class="mb-3 bg-green-200 border-green-700 border-4 flex flex-row justify-content-center alert alert-success text-green-700 font-bold">
        {{ form.success }}
    </div>

    <div class="md:mx-20 mt-10 border border-stroke shadow-default">

        <!-- Update TwoFactorl -->
        <div class="accordion">
            <div class="accordion-header" @click="toggleTwoFactorAccordion">
                <div class="accordion-title">Two Factor Authentication</div>
                <div class="accordion-icon" :class="{ 'open': isTwoFactorAccordionOpen }">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div v-if="isTwoFactorAccordionOpen" class="accordion-content">
                <TwoFactor :form="form" />
            </div>
        </div>

        <!-- Update Password -->
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
                <UpdatePassword :form="form" />
            </div>
        </div>
    </div>
</template>
  

  
<style scoped>
.accordion {
    border: 1px solid;
    overflow: hidden;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid;
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
    border-bottom: 1px solid;
}
</style>
  