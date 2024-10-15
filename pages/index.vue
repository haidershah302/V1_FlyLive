<template>
    <div>
        <banner-carousel />

        <HomeCarousel />

        <RoomGrid />
    </div>
</template>

<script setup>
import RoomGrid from "~/components/roomGrid.vue";

definePageMeta({
    layout: 'home',
});
</script>

<style scoped>

</style>