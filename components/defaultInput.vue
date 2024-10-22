<template>
    <div>

        <div class="plain_input">

            <input
                :type="type"
                :name="name"
                placeholder=" "
                :required="required"
                @input="$emit('dataInput', $event.target.value)"
            />
<!--                :pattern="pattern"-->

            <label :for="name">
                {{ label }}
                <small :class="{ 'text-error' : errorMessage}">: {{ errorMessage }} </small>
            </label>

            <Icon
                :name="icon"
                color="currentColor"
                :size="icon_size"
                class="input_icon"
                :class="{ 'text-error' : errorMessage}"
            />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    name: { type: String, default: 'name_of_input'},
    label: { type: String, default: 'label'},
    type: { type: String, default: 'text'},
    required: { type: Boolean, default: false},
    pattern: { type: String, default: ''},
    errorMessage: { type: String, default: ''},
    icon: { type: String, default: 'mingcute:text-2-fill'},
    icon_size: { type: String, default: '18px'},
    variant: { type: String, default: 'default'},
    placeholder: { type: String, default: 'Text'},
});



console.log(props.errorMessage);

const variants = {
    default: 'text-base-content/75',
    primary: 'text-primary shadow-primary-content border-primary',
    secondary: 'text-secondary shadow-secondary-content border-secondary',
    accent: 'text-accent shadow-accent-content border-accent',
    error: 'text-error shadow-error-content border-error',
    success: 'text-success shadow-success-content border-success',
    warning: 'text-success shadow-warning-content border-warning',
};

let input_variant = variants[props.variant] || variants.default;

defineEmits(['dataInput'])

</script>

<style scoped>


.plain_input {
    @apply text-left relative text-base-content/75;
}

label {
    @apply font-mono absolute top-3 left-12 pointer-events-none;
    transition: 0.2s ease;
    transition-property: top, left, color;
}

input {
    @apply input input-bordered w-full shadow-md pl-12;
    transition: 0.3s ease;
    transition-property: border, box-shadow;
}

.input_icon {
    @apply absolute top-3.5 left-4;
}

input:focus + label {
    @apply -top-5 left-0;
}
input:focus {
    @apply outline-none shadow-inner shadow-base-content/30;
}

input:invalid:not(:placeholder-shown) + label,
input:valid:not(:placeholder-shown) + label
{
    @apply -top-5 left-0;
}

input:invalid:not(:placeholder-shown) + label,
input:invalid:not(:placeholder-shown) + label + .input_icon
{
    @apply text-error;
}


input:valid:not(:placeholder-shown) + label,
input:valid:not(:placeholder-shown) + label + .input_icon
{
    @apply text-success;
}

input:invalid:not(:placeholder-shown) {
    @apply border-error shadow-md shadow-error-content;
}

input:valid:not(:placeholder-shown) {
    @apply border border-success shadow-md shadow-success-content;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>