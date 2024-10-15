<template>
    <div>

        <div class="h-screen">

            <div class="grid grid-cols-12 w-full fixed top-0 left-0 z-10 text-base-100 font-mono drop-shadow-md">

                <NuxtLink to="/profile/" class="btn btn-ghost col-span-2">
                    <Icon name="typcn:arrow-back" size="35px" />
                </NuxtLink>

                <div class="col-span-4 flex-it-middle">
                    <NuxtLink to="/profile/recharge"
                              :class="`rounded-b ${route.fullPath === '/profile/recharge'? 'border-b-4' : ''}`">
                        Recharge
                    </NuxtLink>
                </div>

                <div class="col-span-4 flex-it-middle">
                    <NuxtLink to="/profile/exchange"
                              :class="`rounded-b ${route.fullPath === '/profile/exchange'? 'border-b-4' : ''}`">
                        Exchange
                    </NuxtLink>
                </div>
            </div>

            <slot></slot>


        </div>

    </div>
</template>

<script setup>
const route = useRoute();

</script>

<style scoped>

</style>