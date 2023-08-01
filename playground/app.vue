<template>
  <div>
    <p>Hello to Nuxt module playground!</p>
    <NuxtLazyHydrate when-idle>
      <p>this has been hydrated lazily</p>
    </NuxtLazyHydrate>
  </div>
</template>

<script lang="ts" setup>
const result = useLazyHydration()

result.onHydrated(() => {
  console.log('Content hydrated!')
})

useHydrateWhenIdle(
  result,
  4000
)
</script>
