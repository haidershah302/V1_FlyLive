<template>
    <div>
        <slot name="firstEl"></slot>

        <slot name="secondEl"></slot>

        <slot name="thirdEl"></slot>
    </div>
</template>

<script>
</script>

<style scoped>
    div {
        @apply px-4 grid grid-cols-12 gap-4;
    }
</style>