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
                        :frameBorder="authedUser?.frame?.bdr_box"
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

            <NuxtLink class="btn btn-sm gap-1 btn-secondary shadow-md shadow-secondary">
                <Icon name="lucide:locate-fixed" size="20px" />
                <span>Track</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-primary shadow-md shadow-primary">
                <Icon name="si:heart-duotone" size="20px" />
                <span>Follow</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-success shadow-md shadow-success">
                <Icon name="ic:sharp-meeting-room" size="20px" />
                <span>Room</span>
            </NuxtLink>

            <NuxtLink class="btn btn-sm gap-1 btn-info shadow-lg shadow-info">
                <Icon name="token:chat" size="20px" />
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