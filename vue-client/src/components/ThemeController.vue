<script>
import { themeChange } from 'theme-change';

export default {
    methods: {
        setTheme(theme) {
            localStorage.setItem('theme', theme);
            themeChange(theme);
        },
    },
};
</script>

<template>
    <div class="rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="light" data-act-class="!outline-base-content">
            <div @click="setTheme(false)" data-theme="light"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1">
                    </div>
                    <div class="bg-base-300 col-start-1 row-start-3">
                    </div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">light</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="dark" data-act-class="!outline-base-content">
            <div @click="setTheme('dark')" data-theme="dark"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">dark</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="cupcake" data-act-class="!outline-base-content">
            <div @click="setTheme('cupcake')" data-theme="cupcake"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">cupcake</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="bumblebee" data-act-class="!outline-base-content">
            <div @click="setTheme('bumblebee')" data-theme="bumblebee"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">bumblebee</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="emerald" data-act-class="!outline-base-content">
            <div @click="setTheme('emerald')" data-theme="emerald"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">emerald</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="corporate" data-act-class="!outline-base-content">
            <div @click="setTheme('corporate')" data-theme="corporate"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">corporate</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="synthwave" data-act-class="!outline-base-content">
            <div @click="setTheme('synthwave')" data-theme="synthwave"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">synthwave</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="retro" data-act-class="!outline-base-content">
            <div @click="setTheme('retro')" data-theme="retro"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">retro</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="cyberpunk" data-act-class="!outline-base-content">
            <div @click="setTheme('cyberpunk')" data-theme="cyberpunk"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">cyberpunk</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="valentine" data-act-class="!outline-base-content">
            <div @click="setTheme('valentine')" data-theme="valentine"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">valentine</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="halloween" data-act-class="!outline-base-content">
            <div @click="setTheme('halloween')" data-theme="halloween"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">halloween</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="garden" data-act-class="!outline-base-content">
            <div @click="setTheme('garden')" data-theme="garden"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">garden</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="forest" data-act-class="!outline-base-content">
            <div @click="setTheme('forest')" data-theme="forest"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">forest</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="aqua" data-act-class="!outline-base-content">
            <div @click="setTheme('aqua')" data-theme="aqua"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">aqua</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="lofi" data-act-class="!outline-base-content">
            <div @click="setTheme('lofi')" data-theme="lofi"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">lofi</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="pastel" data-act-class="!outline-base-content">
            <div @click="setTheme('pastel')" data-theme="pastel"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">pastel</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="fantasy" data-act-class="!outline-base-content">
            <div @click="setTheme('fantasy')" data-theme="fantasy"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">fantasy</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="wireframe" data-act-class="!outline-base-content">
            <div @click="setTheme('wireframe')" data-theme="wireframe"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">wireframe</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="black" data-act-class="!outline-base-content">
            <div @click="setTheme('black')" data-theme="black"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">black</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="luxury" data-act-class="!outline-base-content">
            <div @click="setTheme('luxury')" data-theme="luxury"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">luxury</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="dracula" data-act-class="!outline-base-content">
            <div @click="setTheme('dracula')" data-theme="dracula"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">dracula</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="cmyk" data-act-class="!outline-base-content">
            <div @click="setTheme('cmyk')" data-theme="cmyk"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">cmyk</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="autumn" data-act-class="!outline-base-content">
            <div @click="setTheme('autumn')" data-theme="autumn"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">autumn</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="business" data-act-class="!outline-base-content">
            <div @click="setTheme('business')" data-theme="business"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">business</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="acid" data-act-class="!outline-base-content">
            <div @click="setTheme('acid')" data-theme="acid"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">acid</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="lemonade" data-act-class="!outline-base-content">
            <div @click="setTheme('lemonade')" data-theme="lemonade"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">lemonade</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="night" data-act-class="!outline-base-content">
            <div @click="setTheme('night')" data-theme="night"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">night</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="coffee" data-act-class="!outline-base-content">
            <div @click="setTheme('coffee')" data-theme="coffee"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">coffee</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="winter" data-act-class="!outline-base-content">
            <div @click="setTheme('winter')" data-theme="winter"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">winter</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="dim" data-act-class="!outline-base-content">
            <div @click="setTheme('dim')" data-theme="dim"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">dim</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="nord" data-act-class="!outline-base-content">
            <div @click="setTheme('nord')" data-theme="nord"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">nord</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
            data-set-theme="sunset" data-act-class="!outline-base-content">
            <div @click="setTheme('sunset')" data-theme="sunset"
                class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                    <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                    <div class="bg-base-300 col-start-1 row-start-3"></div>
                    <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                        <div class="font-bold">sunset</div>
                        <div class="flex flex-wrap gap-1">
                            <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-primary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-secondary-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-accent-content text-sm font-bold">A</div>
                            </div>
                            <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                <div class="text-neutral-content text-sm font-bold">A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>