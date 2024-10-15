<template>
    <div>
        <div class="w-full max-h-screen min-h-screen bg-base-content text-base-100 relative room">
            <img class="absolute top-0 lef-0 z-0 h-full w-full" :src="user[0].room.theme.background_image" alt="image">


            <div class="relative">

                <div class="grid grid-cols-12 gap-2 p-2">

                    <div class="room_head_block theme-from bg-gradient-to-tl shadow-xl theme-shadow">

                        <div class="col-span-4 text-center">

                            <Avatar
                                :frameSrc="user[0].frame.src"
                                :profileSrc="user[0].profile_picture"
                                :frameBorder="10"
                                :frameSize="60"
                                url="/profile/view"
                                class="relative h-12 w-full"
                            />
                            <p class="text-xs font-bold">{{ user[0].name }}</p>

                        </div>

                        <div class="col-span-6 flex flex-col justify-center">
                            <h1>{{ user[0].room.name }}</h1>

                            <div class="flex">
                                <p>ID: {{ user[0].room.id }}</p>
                            </div>
                        </div>

                        <div class="col-span-2 flex flex-col justify-center">
                            <Icon name="ant-design:heart-twotone" size="38px" />
                        </div>

                    </div>

                    <div class="text-center pt-4 col-span-2">

                        <button class="btn btn-circle border-4 border-success btn-outline btn-success shadow-lg shadow-success/50">
                            <Icon name="ri:share-fill" size="30px" />
                        </button>

                    </div>

                    <div class="col-span-2 text-center pt-4">

                        <NuxtLink to="/" class="btn btn-circle border-4 border-primary btn-outline btn-primary shadow-lg shadow-primary/50">
                            <Icon name="ep:close-bold" size="30px" />
                        </NuxtLink>

                    </div>

                </div>

                <div class="flex justify-between px-4">
                    <button class="btn btn-sm p-0 gap-1 btn-ghost text-accent">
                        <Icon name="solar:dollar-outline" size="20px" />
                        <span class="text-base-100 font-bold">11.3 M</span>
                    </button>

                    <button class="btn btn-sm p-0 gap-1 btn-ghost text-accent">
                        <Icon name="material-symbols:signal-cellular-alt-rounded" size="20px" />
                        <span class="text-base-100 font-bold">321</span>
                    </button>
                </div>

                <div class="grid grid-cols-5 gap-2 gap-y-6 p-2">

                    <div v-for="n in user[0].room.allowed_seats" class="flex flex-col">

                        <Avatar
                            :frameSrc="user[0].room.theme.frame.src"
                            :profileSrc="user[0].room.theme.profile_picture"
                            :frameBorder="20"
                            :frameSize="75"
                            url="/profile/view"
                            class="relative h-16"
                        />

                        <p v-show="false" class="text-center text-base-100 font-bold text-sm">1</p>

                        <button v-show="false" class="btn btn-xs gap-0 text-xs mx-auto btn-ghost text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            4
                        </button>
                    </div>

                </div>

                <div class="p-2">
                    <p class="rounded-box p-2 font-bold text-base-100 text-xs max-w-80 bg-gradient-to-tr theme-from shadow-xl theme-shadow">
                        Welcome to FLY LIVE. Any bad information in chat will be blocked.
                        Please respect each other and country and religions and chat in a decent manners.
                    </p>
                </div>

                <div class="grid grid-cols-12 h-[23rem] gap-2 gap-y-4 px-2">

                    <!--Chat Box-->
                    <div class="col-span-10 rounded-b-box bg-gradient-to-tl theme-from shadow-2xl theme-shadow">

                    </div>

                    <div class="col-span-2 flex flex-col justify-end gap-4">
                        <img src="/assets/room/family.png" alt="">
                        <img src="/assets/room/rings.png" alt="">
                        <div>
                            <img src="/assets/room/crystal.png" class="w-full" alt="">
                            <div class="px-2">
                                <progress class="progress shadow-md theme-shadow"
                                          value="60" max="100">
                                </progress>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 text-[--theme-text-color] grid grid-cols-6">

                        <button class="btn p-0 btn-ghost">
                            <Icon name="token:chat" size="50px" />
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <Icon name="game-icons:cubes" size="50px" />
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <Icon name="fluent:emoji-add-20-filled" size="50px" />
                        </button>

                        <button class="btn p-0 btn-ghost">
                            <Icon name="subway:mic" size="50px" />
                        </button>

                        <button class="btn p-0 btn-ghost shadow-icons">
                            <img src="/assets/room/games.png" alt="">
                        </button>

                        <button class="btn p-0 btn-ghost shadow-icons">
                            <img src="/assets/room/gifts.png" alt="">
                        </button>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
const user = useAuthUser();
</script>

<style scoped>
.room {
    --theme-color: v-bind(user[0].room.theme.color);
    --theme-text-color: v-bind(user[0].room.theme.textColor);
    --theme-shadow-color: rgb(from v-bind(user[0].room.theme.color) r g b / 0.3);

    --avatar-size:  v-bind(user[0].room.theme.frame.size);
    --avatar-border: v-bind(user[0].room.theme.frame.bdr_box);
}

.room_head_block {
    @apply grid grid-cols-12 col-span-8
    rounded-box p-1 text-base-100 font-bold;
}

.theme-from {
    @apply from-[--theme-color];
}
.theme-shadow {
    @apply shadow-[--theme-shadow-color];
}

.room-avatar {
    position: relative;
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 100%;
}

.room_frame {
    width: var(--avatar-size);
}

.room_seat {
    border: var(--avatar-border) solid transparent;
    border-radius: 100%;
    width: 100%;
    height: 100%;
}

.absolute_center {
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
}
.progress::-webkit-progress-value{
    background-color: rgb(from v-bind(user[0].room.theme.color) r g b / 1);
}

.progress::-webkit-progress-bar {
    background-color: rgb(from v-bind(user[0].room.theme.color) r g b / 0.2);
}

.shadow-icons {
    filter: drop-shadow(0 5px 5px rgb(from v-bind(user[0].room.theme.color) r g b / 0.6));
}
</style>