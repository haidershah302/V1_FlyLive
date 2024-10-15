<template>
    <div>
        <div class="px-4">
            <div class="rate_container font-mono">

                <div class="col-span-2 p-2">
                    <img src="/assets/profile/flylivecoin.png" alt="">
                </div>

                <div class="col-span-6 flex flex-col justify-center drop-shadow">
                    <h2 class="text-2xl font-semibold text-base-content">1700</h2>
                </div>

                <div class="col-span-4 flex-it-middle">
                    <button class="hero-buttons">
                        0.99
                        <Icon name="fontisto:dollar" class="text-success" size="20px" />
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.rate_container
{
    @apply grid grid-cols-12 bg-base-100 border-2 border-accent shadow-lg shadow-accent-content rounded-md;
}


.hero-buttons {
    @apply btn btn-sm rounded-full btn-accent bg-gradient-to-l from-warning
    to-accent shadow-md shadow-accent border-2 border-accent/60;
}
</style>