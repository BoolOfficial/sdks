<h1 align="center">
<br />
<img src="https://avatars.githubusercontent.com/u/79407572?s=200&v=4" alt="Bool - JavaScript SDK" width="120">
<br />
<br />
Bool - Vue SDK
</h1>
<br />

[Bool](https://usebool.com/) provides simple and powerful feature management tools, giving you total control of your feature rollout. Test in production, ship code faster, simpler, safer and smarter.

## Introduction

This package is our Vue (JavaScript) SDK. This is intended for specific usage within Vue applications. It is build upon our core [JavaScript SDK](https://github.com/BoolOfficial/sdk-js).

## Getting started

Install the Vue SDK using your package manager of choice:

```js
// npm example
npm install @usebool/sdk-vue

// yarn example
yarn add @usebool/sdk-vue

// pnpm example
pnpm install @usebool/sdk-vue
```

To use the JavaScript SDK, you will need the application key. This key will be provided in the bool dashboard and it is not a secret, meaning that there is no danger in exposing it in your client-side code.

### SDK usage

Before consuming feature flags, you need to initialise the Bool client. You can do this in any mounted component (e.g. `App.vue`) or composable, as long as it is run before you need it. Note, that this is a default export, so you are free to name it whatever you want.

```ts
import boolClient from '@usebool/sdk-vue';

boolClient({ appId: YOUR_APP_ID });
```

You are now left with fetching feature flags where you have two options.

### useGetFeatures

For fetching all the feature flags you can call the `useGetFeatures` hook. This returns a list of feature flags.

```ts
// Resolves in a list of feature flags
const allFeatures = useGetFeatures();
```

If there are no feature flags, an empty list will be returned.
In case of a faulty request the function will log a generic error saying `"Something went wrong. It seems you don't have any feature flags."`, and will return an empty list by default.

### useHasFeature

```ts
// Resolves in a boolean
const isAmazingFeatureEnabled = useHasFeature('MY_AMAZING_FEATURE');
```

In case the feature flag cannot be found, the function will log an error saying `'A feature with key ${featureKey} was not found. Did you create it in your dashboard?'` and will return `false`. By returning `false` the hook provides fallback in case of an accidental deletion of a feature flag.

## Usage

```ts
// App.vue
<template>
  <div>
    <Header />
    <Content />
  </div>
<template>

<script lang="ts" setup>
import boolClient from '@usebool/sdk-vue';

boolClient({ appId: YOUR_APP_ID });
</script>

// Header.vue
<template>
  <div>
    <AmazingFeature v-if="isAmazingFeatureEnabled" />
  </div>
<template>

<script lang="ts" setup>
import { useHasFeature } from '@usebool/sdk-vue';

const isAmazingFeatureEnabled = useHasFeature('MY_AMAZING_FEATURE');
</script>
```

## TypeScript

This package also provides the types in the event of using typescript in your project.
