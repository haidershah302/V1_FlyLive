<template>
    <div>
        <div class="dev-flex-middle h-60">
            <NuxtLink to="/">
                <img src="/assets/brand/logo.png"
                     class="mb-4 text-center drop-shadow-xl font-extrabold"
                     width="180" height="114"
                     alt="">
                <h1 class="text-4xl font-mono font-bold text-center">Fly-live</h1>
            </NuxtLink>
        </div>
        <slot />
    </div>
</template>