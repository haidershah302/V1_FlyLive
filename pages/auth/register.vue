<template>
    <div>

        <form class="p-5">

            <div class="flex mb-6 gap-2">

                <File_input class="flex-1" />

                <div>
                    <DefaultInput
                        class="mb-4"
                        name="name"
                        type="text"
                        label="Full Name"
                        icon="solar:user-bold"
                        :required="true"
                        @dataInput="name = $event"
                        :errorMessage="errors.name"
                    />

                    <DefaultInput
                        class="mb-4"
                        name="email"
                        type="email"
                        label="Email"
                        icon="solar:user-bold"
                        :required="true"
                        @dataInput="email = $event"
                        :errorMessage="errors.email"
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
                :errorMessage="errors.password"
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
import {ref, watch} from 'vue';

const { apiUrl } = useRuntimeConfig().public;

definePageMeta({
    layout: 'auth'
})

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref({});

watch([name, email, password], ([newName, newEmail, newPassword]) => {
  errors.value = {};

  if (!newName) {
    errors.value.name = 'Name is required.';
  }

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

async function signup() {
  if (Object.keys(errors.value).length > 0) {
    console.error("Form validation errors:", errors.value);
    return;
  }

  const result = await $fetch(apiUrl + '/register', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
      password: password.value,
    }
  });

  console.log(result);
}

</script>

<style scoped>
.select_input {
    @apply select select-bordered w-full shadow-lg font-mono font-semibold text-base-content/80;
}
</style>