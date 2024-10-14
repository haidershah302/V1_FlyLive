<template>
    <div>

        <form class="p-5">

            <div class="flex mb-5 gap-2">

                <File_input class="flex-1" />

                <div>
                    <DefaultInput
                        class="mb-4"
                        name="name"
                        type="text"
                        label="Full Name"
                        icon="solar:user-bold"
                        @dataInput="console.log($event)"
                    />

                    <select class="select select-bordered w-full max-w-xs shadow-lg">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>

            <select class="select select-bordered w-full shadow-lg mb-4">
                <option disabled selected>Date of Birth</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>

            <select class="select select-bordered w-full shadow-lg mb-4">
                <option disabled selected>Country</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>


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
                name="phone"
                type="number"
                label="Phone No"
                icon="fa6-solid:phone"
                @dataInput="console.log($event)"
            />


            <NuxtLink to="/">
                <button class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Register</button>
            </NuxtLink>

            <NuxtLink to="/auth/" class="btn btn-sm btn-secondary shadow-lg shadow-secondary/60">
                Login
            </NuxtLink>

        </form>


    </div>
</template>

<script setup>

import File_input from "~/components/file_input.vue";
import DefaultInput from "~/components/defaultInput.vue";

definePageMeta({
    layout: 'auth'
})
</script>

<style scoped>

</style>