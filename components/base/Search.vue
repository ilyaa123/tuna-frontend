<script setup lang="ts">
    const emit = defineEmits(['submitValue']);
    const props = defineProps({
        loading: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Введите профессию'
        }
    })
    const value = ref<string>('');
    const valid = ref<boolean>(false);

    const handleOnSubmit = () => {
        if (valid.value){
            emit('submitValue', value.value)
        }
    }
</script>
<template>
    <v-form v-model="valid" class="search" @submit.prevent="handleOnSubmit">
        <v-text-field
            v-model="value"
            :placeholder="props.placeholder"
            type="text"
            variant="solo"
            hide-details
            :rules="[v => !!v || 'Это поле не должно быть пустым']"
          >
            <template v-slot:prepend-inner>
                <v-icon>mdi-magnify</v-icon>
            </template>
            <template v-slot:append-inner>
                <v-progress-circular
                    v-if="props.loading"
                    hide-on-leave
                    leave-absolute
                    color="primary"
                    indeterminate
                    size="24"
                ></v-progress-circular>
                <v-btn v-else color="primary" @click="handleOnSubmit" class="mt-n2">
                    Поиск
                </v-btn>
            </template>
        </v-text-field>
    </v-form>
</template>
<style lang="scss" scoped>
    .search{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 520px;
    }
</style>