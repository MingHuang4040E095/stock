<script setup>
const obj = {
    a: 11,
    b: 22,
}
console.log(obj)
</script>
<template>
    <div class="fixed top-auto bottom-0 left-0 w-full p-4">
        <nav
            class="flex justify-around shadow-3xl shadow-gray-300 bg-white rounded-full p-2"
        >
            <div
                class="flex justify-center align-middle rounded-full p-2 cursor-pointer"
            >
                <span class="material-symbols-outlined">undo</span>
            </div>
            <div
                class="flex justify-center align-middle rounded-full p-2 cursor-pointer"
            >
                <span class="material-symbols-outlined">favorite</span>
            </div>
            <div
                class="flex justify-center align-middle shadow-inner shadow-gray-300 rounded-full p-2 cursor-pointer"
            >
                <span class="material-symbols-outlined text-gray-500"
                    >home</span
                >
            </div>
            <div
                class="flex justify-center align-middle rounded-full p-2 cursor-pointer"
            >
                <span class="material-symbols-outlined">search</span>
            </div>
            <div
                class="flex justify-center align-middle rounded-full p-2 cursor-pointer"
            >
                <span class="material-symbols-outlined">person</span>
            </div>
        </nav>
    </div>
</template>
