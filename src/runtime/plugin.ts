import { defineNuxtPlugin } from '#app'
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LazyHydrate', LazyHydrationWrapper);
})
