<template>
    <div>

        <!--    Social Login Buttons Start    -->

        <div class="flex gap-4 p-5">

            <button type="button" class="btn flex-auto bg-base-100 shadow-xl shadow-success-content border-success-content">
                <Icon name="logos:google-icon" style="color: black;" size="35px" />
            </button>

            <button type="button" class="btn px-1 flex-auto bg-base-100 shadow-xl shadow-info-content border-info-content">
                <Icon name="logos:meta-icon" style="color: black;" size="35px" />
            </button>

            <button type="button" class="btn flex-auto bg-base-100 shadow-xl shadow-primary-content border-primary-content">
                <img src="/assets/auth/instagram-icon.png" width="36" alt="">
            </button>

        </div>

        <!--    Social Login Buttons End    -->

        <div class="divider px-5">OR</div>

        <!--    Login Form Starts    -->
      

      <!-- New Button Section Start -->
      <div class="flex justify-center gap-4 py-5">
        <button v-auto-animate type="button"
                class="btn-pill"
                @click="withWhat = 'phone'"
                :class="withWhat === 'phone' ? 'btn-active' : 'btn-inActive'">
          <Icon name="fa-solid:phone" size="15px"/>
          Phone
        </button>

        <button v-auto-animate type="button"
                class="btn-pill"
                @click="withWhat = 'email'"
                :class="withWhat === 'email' ? 'btn-active' : 'btn-inActive'">
          <Icon name="fa6-solid:envelope" size="15px"/>
          Email
        </button>
      </div>
      <!-- New Button Section End -->

        <form class="p-5" @submit.prevent="login">

            <DefaultInput v-auto-animate
                v-if="withWhat === 'phone'"
                class="mb-4"
                name="phone"
                type="number"
                label="Phone No"
                icon="fa6-solid:envelope"
                @dataInput=""
            />

            <DefaultInput v-auto-animate
                v-if="withWhat === 'email'"
                class="mb-4"
                name="email"
                type="email"
                label="Email"
                icon="solar:user-bold"
                :required="true"
                @dataInput="email = $event"
                :errorMessage="errors.email"
            />

<!--                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"-->

            <DefaultInput
                class="mb-4"
                name="password"
                type="password"
                label="Password"
                icon="fluent:lock-closed-key-16-filled"
                @dataInput="password = $event"
                :errorMessage="errors.password"
            />


<!--                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"-->


            <button type="submit" class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Login</button>

            <NuxtLink to="/auth/register"
                      class="btn btn-sm btn-secondary shadow-lg shadow-secondary/60">Register</NuxtLink>

        </form>

        <!--    Login Form End    -->

    </div>
</template>

<script setup>

import DefaultInput from "~/components/defaultInput.vue";
import {ref, watch} from "vue";

const { apiUrl } = useRuntimeConfig().public;

definePageMeta({
    layout: 'auth',
    middleware: 'guest'
})


const withWhat = ref('phone');
const email = ref('');
const password = ref('');
const errors = ref({});

const cookie = useCookie('auth_token');

watch([email, password], ([newEmail, newPassword]) => {
  errors.value = {};

  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!newEmail) {
    errors.value.email = 'Email is required.';
  } else if (!emailPattern.test(newEmail)) {
    errors.value.email = 'Invalid email format.';
  }

  if (!newPassword) {
    errors.value.password = 'Password is required.';
  } else if (newPassword.length < 6) {
    errors.value.password = 'Password must be at least 6 characters long.';
  }
});

async function login() {
  if (Object.keys(errors.value).length > 0) {
    console.error("Form validation errors:", errors.value);
    return;
  }

  try {
    cookie.value = await $fetch(apiUrl + 'login_user', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      }
    });
    errors.value = null;

    return navigateTo('/');
  } catch (e) {
    errors.value = e.data.errors;
  }
}


</script>

<style scoped>
.btn-pill{
  @apply btn-sm rounded-full flex items-center gap-1 px-2;
}

.btn-active {
  @apply bg-primary shadow-lg shadow-primary/30 text-primary-content drop-shadow;
}

.btn-inActive {
  @apply bg-base-100 shadow-lg shadow-neutral-content text-base-content drop-shadow;
}
</style>