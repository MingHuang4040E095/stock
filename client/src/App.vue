<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheMenu from './components/TheMenu/TheMenu.vue'
</script>

<template>
    <!-- <RouterView /> -->
    <!-- 主選單 -->
    <TheMenu />
    <!-- 加權指數
    漲跌 漲幅 成交金額 -->
    <!-- 產業分類 -->
    <main class="relative">
        <header class="fixed top-0 left-0 flex justify-end w-full p-2 z-10">
            <span
                class="material-symbols-outlined font-bold text-3xl text-zinc-300 cursor-pointer"
            >
                notifications
            </span>
        </header>
        <section
            class="relative rounded-b-3xl bg-emerald-800 opacity-90 p-3 mb-10 h-40"
        >
            <div class="flex flex-col justify-center items-center h-full -mt-2">
                <div class="font-bold text-3xl text-zinc-300 tracking-wide">
                    <span class="mr-2">加權指數</span>
                    <span>14553.04</span>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 translate-y-1/2 w-full p-6">
                <div class="rounded-xl bg-white shadow-md px-4 py-3">
                    <div class="flex justify-around font-bold text-zinc-500">
                        <div class="text-center">
                            <div>漲跌</div>
                            <div>76.97</div>
                        </div>
                        <div class="text-center">
                            <div>漲幅</div>
                            <div>-0.53%</div>
                        </div>
                        <div class="text-center">
                            <div>金額(億)</div>
                            <div>1,822</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex gap-2 items-center w-full p-6">
            <span class="material-symbols-outlined cursor-pointer">
                arrow_back
            </span>
            <div
                class="flex-grow flex-shrink rounded-xl bg-orange-300 shadow-md overflow-hidden px-4 py-3"
            >
                <div
                    class="flex justify-around font-bold text-neutral-600 overflow-x-hidden"
                >
                    <div class="basis-1/4 shrink-0 text-center px-2">金融</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">水泥</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">紡織</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">電子</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">汽車</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">化學</div>

                    <div class="basis-1/4 shrink-0 text-center px-2">金融</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">水泥</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">紡織</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">電子</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">汽車</div>
                    <div class="basis-1/4 shrink-0 text-center px-2">化學</div>
                </div>
            </div>
            <span class="material-symbols-outlined cursor-pointer"
                >arrow_forward</span
            >
        </section>

        <section class="w-full px-6">
            <div>
                <span class="font-bold text-xl text-neutral-600 mr-2"
                    >水泥</span
                >
                <span class="text-sm text-red-500">323.7 ▲6.5 +2.05%</span>
            </div>
            <article class="rounded-sm shadow-md p-6">
                <div class="flex justify-between">
                    <h4>台泥</h4>
                    <span class="material-symbols-outlined cursor-pointer"
                        >favorite</span
                    >
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped></style>
