<template>
    <div>
        <SectionTitle class="mb-4">
            Agency
        </SectionTitle>

        <div class="px-4">

            <div class="grid grid-cols-12 gap-4 bg-accent shadow-lg shadow-accent/70 rounded-box p-2 text-base-100">
                <div class="col-span-3 relative">
                    <Avatar
                        :frameSrc="authedUser.frame.src"
                        :profileSrc="authedUser.profile_picture"
                        :frameBorder="authedUser.frame.bdr_box"
                        :frameSize="authedUser.frame.size"
                        url="/profile/view"
                        class="relative w-full h-full"
                    />
                </div>

                <div class="font-semibold text-md col-span-7 flex flex-col justify-center gap-2">
                    <h2>Agency User Name</h2>
                    <h2>More About your Agency</h2>
                </div>

                <div class="flex place-items-center justify-center">
                    <button class="btn btn-ghost p-2 py-0 shadow-inner">
                        <Icon name="ant-design:signal-filled" size="auto" />
                        <span>321</span>
                    </button>
                </div>
            </div>

        </div>


        <div class="z-10 mb-4 px-2 w-full absolute bottom-0 flex flex-wrap justify-between">

            <NuxtLink class="btn btn-sm gap-1 btn-secondary shadow-lg shadow-secondary/60">
                <Icon name="ant-design:signal-filled" size="auto" />
                <span>Track</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-primary shadow-lg shadow-secondary/60">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Follow</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-secondary shadow-lg shadow-secondary/60">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Room</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-secondary shadow-lg shadow-secondary/60">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>chat</span>
            </NuxtLink>

        </div>


    </div>
</template>

<script setup>
definePageMeta({
    layout: 'profile'
})

const authedUser = {
    id: 1,
    name: 'User Name',
    profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    frame: {
        src: '/assets/frames/4.png',
        bdr_box: 10,
        size: 80,
    },
}
</script>

<style scoped>

</style>