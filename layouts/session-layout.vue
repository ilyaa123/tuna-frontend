<template>
    <div>
        <v-container style="position: relative" class="pb-0">
            <v-app-bar flat :absolute="true">
                <template v-slot:prepend>
                    <nuxt-link to="/">
                        <img src="@/assets/images/logo.png" alt="Логотип" />
                    </nuxt-link>
                </template>
                <!-- <v-app-bar-title>
                    <v-img src="../public/images/logo.png" alt="Логотип" />
                </v-app-bar-title> -->
                <!-- <v-list>
                    <v-list-item-action>
                        <v-list-item>Test</v-list-item>
                        <v-list-item>Test1</v-list-item>
                        <v-list-item>Test2</v-list-item>
                    </v-list-item-action>
                </v-list>
                <v-spacer /> -->
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