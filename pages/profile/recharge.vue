<template>
    <div>
        <div class="h-64 overflow-hidden arc-bottom mb-8">

            <div id="recharge-hero">
                <div class="drop w-full h-full absolute"></div>

                <div class="coin block flex-it-middle h-full drop-shadow-lg pt-8">
                    <img src="/assets/profile/flylivecoin.png" class="mb-2" alt="">
                    <h1 class="font-mono text-2xl font-bold text-accent-content">1234</h1>
                </div>



                <div class="absolute top-16 right-0 h-40 flex flex-col gap-3">

                    <NuxtLink class="hero-buttons">
                        <Icon name="uim:history" size="40px" />
                    </NuxtLink>

                    <NuxtLink class="hero-buttons">
                        <Icon name="teenyicons:gift-solid" size="30px" />
                    </NuxtLink>

                </div>
            </div>

        </div>


        <RechargepRate v-for="n in 7" class="mb-4"></RechargepRate>
    </div>
</template>

<style scoped>
.drop {
    background-image: url('/assets/random/cccircule.svg');
    background-size: cover;
    opacity: 0.5;
}

#recharge-hero {
    @apply bg-gradient-to-b from-yellow-600 to-accent w-full h-full relative;

    box-shadow: inset 0 -15px 30px 0 #a56d00;
}

.hero-buttons {
    @apply btn rounded-l-full btn-accent bg-gradient-to-l from-warning
    to-accent shadow-md shadow-accent border-2 border-accent/60;
}

</style>

<script setup>
    definePageMeta({
        layout: 'wallet'
    });
</script>