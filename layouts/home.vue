<template>
    <div>
        <header class="navbar fixed bg-base-content text-base-100 mb-2">
            <slot name="header"></slot>
            <div class="flex-1 p-0">
                <NuxtLink to="/" class="btn btn-ghost text-xl pt-0 m-0">
                    <img src="/assets/brand/logo.png" class="w-full h-full" alt="">
                </NuxtLink>
            </div>
            <ul class="menu menu-horizontal p-0 drop-shadow-lg">
                <li>
                    <NuxtLink to="/auth/">
                        <Icon name="fluent-emoji:magnifying-glass-tilted-left" size="35px" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth/register" class="text-accent">
                        <Icon name="fa6-solid:ranking-star" size="35px" />
                    </NuxtLink>
                </li>
            </ul>
        </header>

        <div class="h-20"></div>

        <div class="flex justify-end gap-2 px-5 font-sans font-semibold">
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow-md">Popular</NuxtLink>
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow-md">Explore</NuxtLink>
            <NuxtLink class="btn btn-sm rounded bg-base-100 shadow-md">Follow</NuxtLink>
        </div>

        <main>
            <slot />
        </main>


        <div class="btm-nav bg-base-content grid grid-cols-5 text-base-100 z-10">
            <NuxtLink to="/">
                <Icon name="fluent-color:home-32" size="35px" />
            </NuxtLink>
            <button>
                <Icon name="noto:globe-showing-asia-australia" size="35px" />
            </button>
            <NuxtLink to="/room">
                <Icon name="emojione:door" size="35px" />
            </NuxtLink>
            <button>
                <Icon name="fluent-emoji:bell" size="35px" />
            </button>
            <NuxtLink to="/profile">
                <Avatar
                    frameSrc="/assets/frames/3.png"
                    profileSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    frameBorder="15"
                    frameSize="70"
                    url="/profile/"
                    class="relative w-28"
                />
            </NuxtLink>
        </div>

        <div class="h-80"></div>

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>