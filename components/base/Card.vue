<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        }
    })
</script>
<template>
    <v-card :loading="props.loading" style="width: 100%; max-width: 600px;" class="pt-6">
        <v-card-title class="text-h4 text-center mb-6">{{ props.title }}</v-card-title>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>