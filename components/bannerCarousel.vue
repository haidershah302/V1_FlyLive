<template>
    <div>
        <div class="carousel carousel-center" style="max-width: 100vw">
            <div v-for="(banner, key, index) in eventBanners" :id="`item-${index}`" class="carousel-item p-4">
                <img :src="banner" class="shadow-lg shadow-primary/40" style="max-width: 360px" alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup>

const eventBanners = [
    '/assets/events/cp_event/cp_banner.png',
    '/assets/events/country_event_banner.png',
    '/assets/events/recharge_benefits_event_banner.png',
    '/assets/events/weekly_star_event_banner.png'
]


</script>

<style scoped>

</style>