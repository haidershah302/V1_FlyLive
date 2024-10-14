<template>
    <div>
        <div class="grid grid-cols-12 bg-base-content w-full text-base-100 fixed">
            <NuxtLink :to="$attrs.from" class="btn btn-ghost col-span-2">
                <Icon name="typcn:arrow-back" size="35px" />
            </NuxtLink>

            <div class="col-span-8">
                <slot />
            </div>

            <NuxtLink to="/auth/register" class="btn btn-ghost col-span-2">
                <Icon name="ri:menu-2-fill" size="25px" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>