# nuxt-lazy-hydrate

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

And that's it! You can now use the `LazyHydrate` component in your Nuxt app.

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
