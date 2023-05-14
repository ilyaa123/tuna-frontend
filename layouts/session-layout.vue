<template>
    <div>
        <v-container style="position: relative; padding-bottom: 0; max-width: 1200px" class="pb-0">
            <v-app-bar flat :absolute="true">
                <template v-slot:prepend>
                    <nuxt-link to="/">
                        <img src="@/assets/images/logo.png" alt="Логотип" />
                    </nuxt-link>
                </template>
                <v-list>
                    <v-list-item-action>
                        <v-list-item class="pa-0 mr-2">
                            <nuxt-link to="/auth">
                                <v-btn color="primary" variant="text">Войти</v-btn>
                            </nuxt-link>
                        </v-list-item>
                        <v-list-item class="pa-0">
                            <nuxt-link to="/reg">
                                <v-btn color="primary" variant="flat">Регистрация</v-btn>
                            </nuxt-link>
                        </v-list-item>
                    </v-list-item-action>
                </v-list>
            </v-app-bar>
            <slot />
        </v-container>
        <v-footer color="#1B1D21">

        </v-footer>
    </div>
</template>