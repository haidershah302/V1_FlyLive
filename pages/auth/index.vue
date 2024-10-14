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
                <img src="/assets/auth/instagram-icon.png" width="35" alt="">
            </button>

        </div>

        <!--    Social Login Buttons End    -->

        <div class="divider px-5">OR</div>

        <!--    Login Form Starts    -->

        <form class="p-5">

            <DefaultInput
                class="mb-4"
                name="phone"
                type="number"
                label="Phone No"
                icon="fa6-solid:phone"
                @dataInput="console.log($event)"
            />
<!--                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"-->

            <DefaultInput
                class="mb-4"
                name="password"
                type="password"
                label="Password"
                icon="fluent:lock-closed-key-16-filled"
                @dataInput="console.log($event)"
            />
<!--                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"-->


            <NuxtLink to="/">
                <button class="btn btn-primary shadow-lg shadow-primary/30 mb-4 block w-full">Login</button>
            </NuxtLink>

            <NuxtLink to="/auth/register"
                      class="btn btn-sm btn-secondary shadow-lg shadow-secondary/60">Register</NuxtLink>


        </form>

        <!--    Login Form End    -->

    </div>
</template>

<script setup>

import DefaultInput from "~/components/defaultInput.vue";

definePageMeta({
    layout: 'auth'
})
</script>

<style scoped>

</style>