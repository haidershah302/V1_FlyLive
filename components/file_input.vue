<template>
    <div>
        <label class="flex items-center justify-center cursor-pointer h-full border-2 border-primary rounded-box shadow-xl shadow-primary-content"
               for="profile_picture"
        >

            <input @change="handleFileChange" type="file" id="profile_picture" name="profile_upload" hidden>

            <img v-if="profile_picture" :src="profile_picture" style="margin: 0 auto;width: 90%" alt="Profile Picture">

            <Icon v-if="!profile_picture" name="fluent:lock-closed-key-16-filled" class="text-primary" color="currentColor" size="26px" />

        </label>
    </div>
</template>

<script setup>
const profile_picture = ref(null);
const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        profile_picture.value = URL.createObjectURL(file);
    }
    console.log(profile_picture);
};
</script>

<style scoped>

</style>