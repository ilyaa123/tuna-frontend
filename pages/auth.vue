<script setup lang="ts">
    import { useStore } from '~/store';
    import { ActionTypes } from '~/store/modules/auth/actions';
    definePageMeta({
        layout: "session-layout",
    });
    const store = useStore();
    const router = useRouter();
    const valid = ref<boolean>(false);
    const inputRules = {
        email: [(v: string) => !!v || 'Это поле обязательно'],
        passw: [
            (v: string) => !!v || 'Это поле обязательно',
            (v: string) => v.length >= 8 || 'Не менее 8 символов'
        ]
    }
    const formValues = reactive({
        email: '',
        pwd: '',
    })

    const loading = computed(() => store.getters.getAuthLoading);
    const errors = computed(() => store.getters.getAuthErrors);
    const success = computed(() => store.getters.getAuthSuccess);

    const handleOnAuth = () => {
        if (valid.value){
            store.dispatch(ActionTypes.AUTH__SIGNIN, formValues)
        }
    }
    watch(success, () => {
        if (success.value){
            router.push('/app/')
        }
    })
</script>
<template>
    <v-sheet>
        <v-row class="d-flex align-center justify-center auth">
            <base-card title="Вход" :loading="loading">
            <v-form v-model="valid">
                <v-row>
                    <v-col cols="12">
                        <v-text-field 
                            label="Email" 
                            v-model="formValues.email"
                            :rules="inputRules.email" 
                            variant="outlined" 
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field 
                            label="Пароль" 
                            v-model="formValues.pwd"
                            :rules="inputRules.passw" 
                            variant="outlined" 
                        />
                    </v-col>
                    <v-col md="6" cols="12">
                        <nuxt-link to="/reg">
                            <v-btn color="primary" variant="tonal" block>Зарегистрироваться</v-btn>
                        </nuxt-link>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-btn color="primary" block @click="handleOnAuth">Войти</v-btn>
                    </v-col>
                </v-row>
            </v-form>
            </base-card>
        </v-row>
    </v-sheet>
</template>
<style>
    .auth{
        padding: 120px 0; 
        width: 100%; 
        min-height: 100vh;
        margin: 0;
    }
</style>