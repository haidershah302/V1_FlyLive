<template>
    <div>

        <div class="h-64 overflow-hidden arc-bottom mb-20">
            <div id="recharge-hero">
                <div class="drop w-full h-full absolute"></div>

                <div class="coin block flex-it-middle h-full drop-shadow-lg pt-8">
                    <img src="/assets/profile/FlyLiveDimond.png" class="mb-2" alt="">
                    <h1 class="font-mono text-2xl font-bold text-accent-content">908</h1>
                </div>


                <div class="absolute top-16 right-0 h-40 flex flex-col gap-3">

                    <NuxtLink class="hero-buttons">
                        <Icon name="uim:history" size="40px" />
                    </NuxtLink>

                </div>

            </div>
        </div>



        <div class="px-4">

            <div class="rate_container font-mono mb-6 border-secondary shadow-lg shadow-secondary-content ">

                <div class="col-span-2 p-2">
                    <img src="/assets/profile/FlyLiveDimond.png" alt="">
                </div>

                <div class="col-span-6 flex flex-col justify-center">
                    <h2 class="text-lg font-semibold text-base-content/80">Diamonds</h2>
                </div>

                <div class="col-span-4 flex-it-middle">
                    <p>Balance 908</p>
                </div>

            </div>

            <div class="rate_container
            font-mono border-accent shadow-lg shadow-accent-content mb-4">

                <div class="col-span-2 p-2">
                    <img src="/assets/profile/flylivecoin.png" alt="">
                </div>

                <div class="col-span-6 flex flex-col justify-center">
                    <h2 class="text-lg font-semibold text-base-content/80">Gold Coins</h2>
                </div>

                <div class="col-span-4 flex-it-middle">
                    <p>Balance 908</p>
                </div>

            </div>

            <p class="text-lg font-bold mb-4">1 Diamond is Equal to 1 Coin</p>

            <NuxtLink to="/">
                <button class="btn btn-secondary shadow-lg shadow-secondary/80 block w-full">Exchange</button>
            </NuxtLink>

        </div>
    </div>
</template>

<style scoped>
.drop {
    background-image: url('/assets/random/cccircule.svg');
    background-size: cover;
    opacity: 0.5;
}

#recharge-hero {
    @apply bg-gradient-to-b from-purple-500 to-indigo-600 w-full relative h-64 overflow-hidden;
    box-shadow: inset 0 -50px 30px -20px indigo;
}

.hero-buttons {
    @apply btn rounded-l-full btn-secondary bg-gradient-to-l from-indigo-500
    to-purple-500 shadow-md shadow-indigo-600 border-2 border-purple-500/60;
}

.rate_container
{
    @apply grid grid-cols-12 bg-base-100 border-2 rounded-md;
}

</style>

<script setup>
    definePageMeta({
        layout: 'wallet'
    });
</script>