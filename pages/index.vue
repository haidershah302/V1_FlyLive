  <template>
    <div>

        <div class="px-5 bg-primary my-5">
          <button @click="getUser" class="btn btn-info mb-4">Fetch User</button>
          <p v-if="data">
            {{data}}
          </p>
        </div>

        <banner-carousel />

        <HomeCarousel />

        <RoomGrid />
    </div>
</template>

<script setup>
import RoomGrid from "~/components/roomGrid.vue";

const cookie = useCookie('auth_token');
const { apiUrl } = useRuntimeConfig().public;

const data = ref(null);

definePageMeta({
    layout: 'home',
    middleware: 'auth'
});

async function getUser() {
  console.log('here')
  data.value = await $fetch(apiUrl + 'user', {
    headers: {
      'Authorization': `Bearer ${cookie.value.token}`
    }
  });
}
</script>

<style scoped>

</style>