<script setup lang="ts">
    const emit = defineEmits(['submitValue']);
    const value = ref<string>('');
    const valid = ref<boolean>(false);
    const loading = ref<boolean>(false);

    const handleOnSubmit = () => {
        if (valid.value){
            
        }
    }
</script>
<template>
    <div class="d-flex align-center justify-center" style="width: 100%;">
        <v-card flat color="primary" class="py-10 px-md-16 px-1" style="width: 100%; max-width: 784px;">
            <v-card-title class="mb-6 title">Подпишись на рассылку с новостями о платформе </v-card-title>
            <v-form v-model="valid" class="search" @submit.prevent="handleOnSubmit">
            <v-text-field
                v-model="value"
                placeholder="Введите электронную почту"
                type="email"
                variant="solo"
                hide-details
                :rules="[v => !!v || 'Это поле не должно быть пустым']"
            >
                <template v-slot:prepend-inner>
                    <v-icon>mdi-magnify</v-icon>
                </template>
                <template v-slot:append-inner>
                    <v-progress-circular
                        v-if="loading"
                        hide-on-leave
                        leave-absolute
                        color="primary"
                        indeterminate
                        size="24"
                    ></v-progress-circular>
                    <v-btn v-else color="primary" @click="handleOnSubmit" class="mt-n2">
                        Подписаться
                    </v-btn>
                </template>
            </v-text-field>
        </v-form>
        </v-card>
    </div>
</template>
<style scoped lang="scss">
    .title{
        font-weight: 600;
        font-size: 28px;
        line-height: 130%;
        text-align: center;
        color: #FFFFFF;
        -webkit-line-clamp: initial !important;
        white-space: normal;
    }
</style>