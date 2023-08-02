import { defineNuxtModule, addComponent, addImportsSources } from '@nuxt/kit'
import * as LazyHydrationModule from 'vue3-lazy-hydration'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-lazy-hydrate',
    configKey: 'lazyHydrate',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  setup () {
    // addComponent fails to add components named <Lazy* />
    // components named like this are not imported properly in client app
    addComponent({
      name: 'NuxtLazyHydrate',
      export: 'LazyHydrationWrapper',
      filePath: 'vue3-lazy-hydration'
    })

    const composables = Object.keys(LazyHydrationModule).filter(
      key => key !== 'LazyHydrationWrapper'
    )

    addImportsSources({
      imports: composables,
      from: 'vue3-lazy-hydration'
    })
  }
})
