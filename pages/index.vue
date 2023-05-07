<script setup lang="ts">
    definePageMeta({
        layout: "session-layout",
    });
    const isSearchLoading = ref<boolean>(false)
    const onSubmit = (value: string) => {
        isSearchLoading.value = true;        
        setTimeout(() => {isSearchLoading.value = false}, 1000)
    }
</script>
<template>
    <v-sheet>
        <v-row style="padding-top: 120px;">
            <v-col md="6" cols="12" class="d-flex align-start flex-column justify-center">
                <h1 class="title mb-6">Поиск работы <br> <span>студенту без опыта</span></h1>
                <p class="desc mb-6" style="max-width: 450px;">tuna - это платформа, где ты можешь найти стажировку, место практики или первую работу, а также собрать команду на собственный проект</p>
                <base-search 
                    @submit-value="onSubmit"
                    :loading="isSearchLoading" 
                />
            </v-col>
            <v-col md="6" cols="12">
                <img style="width: 100%;" src="@/assets/images/home1.png" alt="Картинка">
            </v-col>
        </v-row>
        <v-row style="padding-top: 120px;">
            <v-col cols="12"><h2 class="text-center">Ищешь стажировку?</h2></v-col>
            <v-col md="6" cols="12">
                <img style="width: 100%;" src="@/assets/images/home2.png" alt="Картинка">
            </v-col>
            <v-col md="6" cols="12" class="d-flex align-start flex-column justify-center">
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                                <path d="M48.4475 35.2895V26.7368M48.4475 26.7368L32.0001 18.1842L15.5527 26.7368L32.0001 35.2895L40.2835 31.4663M48.4475 26.7368L40.2835 31.4663M23.4475 31.3421V41.4737C23.5791 44.6316 27.3948 46.2105 32.0001 46.2105C36.6054 46.2105 40.5527 45.3374 40.5527 41.4737V31.3421L40.2835 31.4663" stroke="#274B90" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </template>
                        <v-list-item-title class="ml-4">Присоединяйся к нам</v-list-item-title>
                        <v-list-item-subtitle class="ml-4 list-subtitle">На нашей платформе регистрируются работодатели, которые ищут студентов – таких, как ты</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                                <path d="M30.332 27H33.6654V23.6666H30.332M31.9987 45.3333C24.6487 45.3333 18.6654 39.35 18.6654 32C18.6654 24.65 24.6487 18.6666 31.9987 18.6666C39.3487 18.6666 45.332 24.65 45.332 32C45.332 39.35 39.3487 45.3333 31.9987 45.3333ZM31.9987 15.3333C29.81 15.3333 27.6427 15.7644 25.6206 16.602C23.5985 17.4396 21.7612 18.6672 20.2136 20.2149C17.088 23.3405 15.332 27.5797 15.332 32C15.332 36.4203 17.088 40.6595 20.2136 43.7851C21.7612 45.3327 23.5985 46.5604 25.6206 47.398C27.6427 48.2355 29.81 48.6666 31.9987 48.6666C36.419 48.6666 40.6582 46.9107 43.7838 43.7851C46.9094 40.6595 48.6654 36.4203 48.6654 32C48.6654 29.8113 48.2343 27.644 47.3967 25.6219C46.5591 23.5998 45.3315 21.7625 43.7838 20.2149C42.2362 18.6672 40.3989 17.4396 38.3768 16.602C36.3547 15.7644 34.1874 15.3333 31.9987 15.3333ZM30.332 40.3333H33.6654V30.3333H30.332V40.3333Z" fill="#274B90"/>
                            </svg>
                        </template>
                        <v-list-item-title class="ml-4">Расскажи о себе</v-list-item-title>
                        <v-list-item-subtitle class="ml-4 list-subtitle">Указывай в резюме свои навыки – система подберет подходящие вакансии</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                                <path d="M21.9987 27H16.9987C16.082 27 15.332 26.25 15.332 25.3334C15.332 24.4167 16.082 23.6667 16.9987 23.6667H21.9987C22.9154 23.6667 23.6654 24.4167 23.6654 25.3334C23.6654 26.25 22.9154 27 21.9987 27ZM21.9987 32H16.9987C16.082 32 15.332 32.75 15.332 33.6667C15.332 34.5834 16.082 35.3334 16.9987 35.3334H21.9987C22.9154 35.3334 23.6654 34.5834 23.6654 33.6667C23.6654 32.75 22.9154 32 21.9987 32ZM45.132 42.4834L39.932 37.2834C38.4987 38.2167 36.782 38.75 34.932 38.65C30.982 38.4667 27.5987 35.3834 27.0654 31.4667C26.8893 30.1649 27.0228 28.84 27.4548 27.5994C27.8868 26.3589 28.6053 25.2377 29.5518 24.3268C30.4984 23.416 31.6464 22.7412 32.9026 22.3571C34.1589 21.9731 35.488 21.8908 36.782 22.1167C40.032 22.6667 42.732 25.2 43.4487 28.4167C43.9987 30.85 43.4654 33.1167 42.282 34.9167L47.4987 40.1334C48.1487 40.7834 48.1487 41.8334 47.4987 42.4834C46.8487 43.1334 45.782 43.1334 45.132 42.4834ZM40.332 30.3334C40.332 27.5834 38.082 25.3334 35.332 25.3334C32.582 25.3334 30.332 27.5834 30.332 30.3334C30.332 33.0834 32.582 35.3334 35.332 35.3334C38.082 35.3334 40.332 33.0834 40.332 30.3334ZM16.9987 43.6667H30.332C31.2487 43.6667 31.9987 42.9167 31.9987 42C31.9987 41.0834 31.2487 40.3334 30.332 40.3334H16.9987C16.082 40.3334 15.332 41.0834 15.332 42C15.332 42.9167 16.082 43.6667 16.9987 43.6667Z" fill="#274B90"/>
                            </svg>
                        </template>
                        <v-list-item-title class="ml-4">Найди работу своей мечты</v-list-item-title>
                        <v-list-item-subtitle class="ml-4 list-subtitle">Выбирай лучшие предложения по отзывам о компании</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-row style="padding-top: 120px;">
            <v-col cols="12"><h2 class="text-center">Хочешь работать над проектом?</h2></v-col>
            <v-col md="4" cols="12">
                <v-list class="text-center">
                    <v-list-item-media>
                        <img src="@/assets/images/home3.png" alt="Картинка">
                    </v-list-item-media>
                    <v-list-item-title>Найди команду</v-list-item-title>
                    <v-list-item-subtitle>Выставляй объявления о наборе на свой проект</v-list-item-subtitle>
                </v-list>
            </v-col>
            <v-col md="4" cols="12">
                <v-list class="text-center">
                    <v-list-item-media>
                        <img src="@/assets/images/home4.png" alt="Картинка">
                    </v-list-item-media>
                    <v-list-item-title>Вступай как участник</v-list-item-title>
                    <v-list-item-subtitle>Выбирай из опубликованных объявлений и подавай заявку</v-list-item-subtitle>
                </v-list>
            </v-col>
            <v-col md="4" cols="12">
                <v-list class="text-center">
                    <v-list-item-media>
                        <img src="@/assets/images/home5.png" alt="Картинка">
                    </v-list-item-media>
                    <v-list-item-title>Пополняй портфолио</v-list-item-title>
                    <v-list-item-subtitle>Реализованные проекты добавятся резюме</v-list-item-subtitle>
                </v-list>
            </v-col>
        </v-row>
        <v-row style="padding: 120px 0;">
            <base-mailing />
        </v-row>
    </v-sheet>
</template>
<style lang="scss" scoped>
    .title{
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 130%;
        color: rgba(var(--v-theme-primary), var(--v-high-emphasis-opacity));;
        span{
            color: #0C8771;
        }
    }
    .desc{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
    }
    .list{
        &-subtitle{
            -webkit-line-clamp: initial !important;
        }
    }
</style>