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
        password: '',
        type: 'base_user'
    })

    const loading = computed(() => store.getters.getAuthLoading);
    const errors = computed(() => store.getters.getAuthErrors);
    const success = computed(() => store.getters.getRegSuccess);

    const handleOnRegistration = () => {
        if (valid.value){
            store.dispatch(ActionTypes.AUTH__SIGNUP, formValues)
        }
    }
    watch(success, () => {
        if (success.value){
            setTimeout(() => {router.push('/auth')}, 1000)
        }
    })
</script>
<template>
    <v-sheet>
        <v-row class="d-flex align-center justify-center reg">
            <base-card title="Регистрация" :loading="loading">
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12" v-show="success">
                            <v-alert
                                color="success"
                                title="Вы успешно зарегистрировались"
                            />
                        </v-col>
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
                                v-model="formValues.password"
                                :rules="inputRules.passw" 
                                variant="outlined" 
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-select 
                                label="Роль" 
                                v-model="formValues.type"
                                variant="outlined"
                                :items="[{title: 'Пользователь', value: 'base_user'}, {title: 'Компания', value: 'company_user'}]" 
                            />
                        </v-col>
                        <v-col md="6" cols="12">
                            <nuxt-link to="/auth">
                                <v-btn color="primary" variant="tonal" block>Войти</v-btn>
                            </nuxt-link>
                        </v-col>
                        <v-col md="6" cols="12">
                            <v-btn color="primary" @click="handleOnRegistration" block>Зарегистрироваться</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </base-card>
        </v-row>
    </v-sheet>
</template>
<style>
    .reg{
        padding: 120px 0; 
        width: 100%; 
        min-height: 100vh;
        margin: 0;
    }
</style>