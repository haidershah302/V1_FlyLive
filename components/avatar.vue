<template>
    <div>
        <NuxtLink :to="url" class="room-avatar absolute_center rounded-full"
             :style="`width: ${frameSize}px;height: ${frameSize}px;`"
        >
            <img
                :style="`width: ${frameSize}px;`"
                class="room_frame absolute_center"
                :src="frameSrc" alt=""
            >
            <img
                :style="`border: ${frameBorder}px solid transparent;`"
                class="room_seat"
                :src="profileSrc"
                alt=""
            >
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    frameSrc: String,
    profileSrc: String,
    frameSize: Number,
    frameBorder: Number,
    url: String,
})
</script>

<style scoped>

.room-avatar {
    position: relative;
    border-radius: 100%;
}

.room_seat {
    border-radius: 100%;
    width: 100%;
    height: 100%;
}

.absolute_center {
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
}
</style>