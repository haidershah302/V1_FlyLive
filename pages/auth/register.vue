<template>
  <div>

    <form class="p-5">

      <div v-if="success" class="shadow-inner shadow-lg bg-success text-success-content mx-3 mb-6 rounded p-4">
        {{success}}
      </div>

      <div v-if="errors" class="shadow-inner shadow-lg bg-error text-error-content mx-3 mb-6 rounded p-4">
        <ul>
          <li v-for="error in errors">{{ error[0] }}</li>
        </ul>
      </div>

      <div class="flex mb-6 gap-2">

        <File_input class="flex-1" />

        <div>
          <DefaultInput
              class="mb-4" name="name" type="text"
              label="Full Name" icon="solar:user-bold"
              :required="true" @dataInput="name = $event"
          />

          <DefaultInput
              class="mb-4" name="email" type="email"
              label="Email" icon="solar:user-bold"
              :required="true" @dataInput="email = $event"
          />
        </div>
      </div>

      <div class="divider px-5 mb-6">Your Details</div>

      <!--            <DefaultInput-->
      <!--                class="mb-4"-->
      <!--                name="name"-->
      <!--                type="datetime-local"-->
      <!--                label="Date of Birth"-->
      <!--                icon="solar:user-bold"-->
      <!--                :required="true"-->
      <!--                @dataInput=""-->
      <!--            />-->

      <!--            <select class="select_input mb-4">-->
      <!--              <option disabled selected>Gender</option>-->
      <!--              <option>Male</option>-->
      <!--              <option>Female</option>-->
      <!--              <option>Others</option>-->
      <!--            </select>-->

      <!--            <select class="select_input mb-4">-->
      <!--                <option disabled selected>Country</option>-->
      <!--                <option>Pakistan</option>-->
      <!--                <option>India</option>-->
      <!--                <option>Japan</option>-->
      <!--            </select>-->


      <!--            <DefaultInput-->
      <!--                class="mb-4"-->
      <!--                name="signature"-->
      <!--                type="text"-->
      <!--                label="Signature"-->
      <!--                icon="wpf:signature"-->
      <!--                @dataInput="$event"-->
      <!--            />-->


      <!--            <DefaultInput-->
      <!--                class="mb-4"-->
      <!--                name="phone"-->
      <!--                type="number"-->
      <!--                label="Phone No"-->
      <!--                icon="fa6-solid:phone"-->
      <!--                @dataInput="$event"-->
      <!--            />-->

      <DefaultInput
          class="mb-4"
          name="password"
          type="password"
          label="Password"
          icon="fluent:lock-closed-key-16-filled"
          @dataInput="password = $event"
      />


      <button @click.prevent="signup" class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Register</button>

      <NuxtLink to="/auth/" class="btn btn-sm btn-secondary shadow-lg shadow-secondary/60">
        Login
      </NuxtLink>

    </form>


  </div>
</template>

<script setup>

import File_input from "~/components/file_input.vue";
import DefaultInput from "~/components/defaultInput.vue";

const { apiUrl } = useRuntimeConfig().public;

definePageMeta({
  layout: 'auth'
})

const name = ref('');
const email = ref('');
const password = ref('');
let errors = ref(null);
let success = ref(null);

const cookie = useCookie('my_auth_token');
async function signup() {

  try {
    cookie.value = await $fetch(`${apiUrl}signup`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
      }
    });
    errors.value = null;
    success.value = cookie.user;

    console.log(cookie.user)

  } catch (e) {
    errors.value = e.data.errors;
  }
}


</script>

<style scoped>
/*
.select_input {
    @apply select select-bordered w-full shadow-lg font-mono font-semibold text-base-content/80;
}
*/
</style>