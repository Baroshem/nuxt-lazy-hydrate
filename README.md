# nuxt-lazy-hydrate

This module is a wrapper around [Vue 3 Lazy Hydration Plugin](https://github.com/freddy38510/vue3-lazy-hydration) for Nuxt 3.

Huge kudos to the package author and also to Markus Oberleihner for developing this amazing idea.

Make sure to give a star to both of these projects:

- <https://github.com/freddy38510/vue3-lazy-hydration>
- <https://github.com/maoberlehner/vue-lazy-hydration>

## Setup

```sh
yarn add nuxt-lazy-hydrate # yarn
npm i nuxt-lazy-hydrate # npm
```

## Usage

The only thing you need to do to use the module in the default configuration is to register the module in the `modules` array in `nuxt.config.ts`:

```javascript
// nuxt.config.js

{
  modules: ["nuxt-lazy-hydrate"],
}
```

And that's it! You can now use the `LazyHydrate` component in your Nuxt app:

```html
<template>
  <div>
    <NuxtLazyHydrate when-idle>
      <p>Nuxt module playground!</p>
    </NuxtLazyHydrate>
  </div>
</template>
```

For all configuration options of this component, please head out to [Vue 3 Lazy Hydration Package](https://github.com/freddy38510/vue3-lazy-hydration)

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
