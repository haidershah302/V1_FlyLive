  <template>
    <div>
        <banner-carousel />

        <HomeCarousel />

        <RoomGrid />
    </div>
</template>

<script setup>
import RoomGrid from "~/components/roomGrid.vue";

const cookie = useCookie('auth_token');

const data = ref(null);

definePageMeta({
    layout: 'home',
    middleware: 'auth'
});


</script>

<style scoped>

</style>