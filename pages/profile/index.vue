<template>
    <div>

        <div v-for="element in menuElement" class="px-4 grid grid-cols-12 gap-4 mb-4">
            <button  :class="`p-1 btn col-span-2 ` + element.class">
                <Icon :name="element.icon" color="currentColor" size="35px" />
            </button>

            <div class="font-semibold text-2xl col-span-8 text-base-content">
                <h2 class="mt-2">{{ element.name }}</h2>
            </div>

            <NuxtLink :to="element.url" class="btn btn-ghost p-1 shadow-inner col-span-2">
                <Icon name="iconamoon:arrow-right-2" color="currentColor" style="color: black;" size="35px" />
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'profile'
})

const menuElement = [
    {
        name: 'Wallet',
        icon: 'ion:wallet',
        url: '/profile/recharge',
        class: 'btn-success shadow-md shadow-success',
    },
    {
        name: 'Mall',
        icon: 'ic:baseline-store-mall-directory',
        url: '/',
        class: 'btn-primary shadow-md shadow-primary',
    },
    {
        name: 'Level',
        icon: 'fa6-solid:crown',
        url: '/',
        class: 'btn-warning shadow-md shadow-warning',
    },
    {
        name: 'Vip',
        icon: 'lets-icons:dimond-alt-fill',
        url: '/',
        class: 'btn-secondary shadow-md shadow-secondary',
    },
    {
        name: 'My Agency',
        icon: 'map:insurance-agency',
        url: '/',
        class: 'btn-accent shadow-md shadow-accent',
    },
    {
        name: 'My Income',
        icon: 'fontisto:dollar',
        url: '/',
        class: 'btn-success shadow-md shadow-success',
    },
    {
        name: 'Feed Back',
        icon: 'fluent:person-feedback-28-filled',
        url: '/',
        class: 'btn-primary shadow-md shadow-primary',
    },
    {
        name: 'Settings',
        icon: 'solar:settings-bold',
        url: '/',
        class: 'btn-info shadow-md shadow-info',
    },
]

</script>

<style scoped>

</style>