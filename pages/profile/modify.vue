<template>
    <div>
        <Subheader from="/">
            <div class="h-full w-ful flex flex-col justify-center">
                <h1 class="text-center">Modify Profile</h1>
            </div>
        </Subheader>

        <div class="h-12"></div>

        <form class="p-5">

            <FileInput class="h-40 w-40 mb-6 mx-auto"/>

            <DefaultInput
                class="mb-4"
                name="name"
                type="text"
                label="Full Name"
                icon="solar:user-bold"
                @dataInput="console.log($event)"
            />

            <select class="select_input mb-4">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>

            <select class="select_input mb-4">
                <option disabled selected>Date of Birth</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>

            <select class="select_input mb-4">
                <option disabled selected>Country</option>
                <option>Pakistan</option>
                <option>Dubai</option>
                <option>India</option>
            </select>


            <DefaultInput
                class="mb-4"
                name="phone"
                type="number"
                label="Phone No"
                icon="fa6-solid:phone"
                @dataInput="console.log($event)"
            />


            <DefaultInput
                class="mb-4"
                name="signature"
                type="text"
                label="Signature"
                icon="wpf:signature"
                @dataInput="console.log($event)"
            />

            <DefaultInput
                class="mb-4"
                name="password"
                type="password"
                label="Set Password"
                icon="fluent:lock-closed-key-16-filled"
                @dataInput="console.log($event)"
            />


            <NuxtLink to="/profile/">
                <button class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Save Changes</button>
            </NuxtLink>
        </form>

        <div class="px-5">
          <button @click="logout" class="btn btn-error shadow-lg shadow-error/30 mb-4 block w-full">Logout</button>
        </div>

    </div>
</template>

<script setup>
import DefaultInput from "~/components/defaultInput.vue";

const cookie = useCookie('my_auth_token');
const { apiUrl } = useRuntimeConfig().public;

async function logout() {
  console.log('here')
  const result = await $fetch(apiUrl + 'logout', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${cookie.value.token}`
    }
  });

  cookie.value = null
  console.log(result)
}
</script>

<style scoped>
.select_input {
    @apply select select-bordered w-full shadow-lg font-mono font-semibold text-base-content/80;
}

</style>