<h1 align="center">
<br />
<img src="https://avatars.githubusercontent.com/u/79407572?s=200&v=4" alt="Bool - JavaScript SDK" width="120">
<br />
<br />
Bool - React SDK
</h1>
<br />

[![npm](https://img.shields.io/npm/v/@usebool/sdk-react)](https://www.npmjs.com/package/@usebool/sdk-react)
[![npm](https://img.shields.io/npm/dw/@usebool/sdk-react)](https://www.npmtrends.com/@usebool/sdk-react)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@usebool/sdk-react)](https://bundlephobia.com/result?p=@usebool/sdk-react)

[Bool](https://usebool.com/) provides simple and powerful feature management tools, giving you total control of your feature rollout. Test in production, ship code faster, simpler, safer and smarter.

## Introduction

This package is our React (JavaScript) SDK. This is intended for specific usage within React applications. It is build upon our core [JavaScript SDK](https://github.com/BoolOfficial/sdks/tree/main/packages/core-js).

## Getting started

Install the React SDK using your package manager of choice:

```js
// npm example
npm install @usebool/sdk-react

// yarn example
yarn add @usebool/sdk-react

// pnpm example
pnpm install @usebool/sdk-react
```

To use the JavaScript SDK, you will need the an id token. This token will be provided in the bool dashboard and it is not a secret, meaning that there is no danger in exposing it in your client-side code.

### SDK usage

You will wrap you application with our main provider component named `FeatureFlagProvider`. This component requires an `idToken` property used for the initialization of the SDK.

```js
import { FeatureFlagProvider } from '@usebool/sdk-react';

function App() {
  return (
    <FeatureFlagProvider idToken="c80f32fe6f5042c5bb7d9e78a46935da">
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    </FeatureFlagProvider>
  );
}
```

You are now left with fetching feature flags where you have two options.

### useGetFeatures

For fetching all the feature flags you can call the `useGetFeatures` hook. This returns a list of feature flags.

```js
// Resolves in a list of feature flags
const allFeatures = useGetFeatures();
```

If there are no feature flags, an empty list will be returned.
In case of a faulty request the function will log a generic error saying `"Something went wrong. It seems you don't have any feature flags."`, and will return an empty list by default.

### useHasFeature

```js
// Resolves in a boolean
const myAmazingFeature = useHasFeature('MY_AMAZING_FEATURE');
```

In case the feature flag cannot be found, the function will log an error saying `'A feature with key ${featureKey} was not found. Did you create it in your dashboard?'` and will return `false`. By returning `false` the hook provides fallback in case of an accidental deletion of a feature flag.

## Usage

```js
// App.js
import { FeatureFlagProvider } from "@usebool/sdk-react";

function App() {
  return (
    <FeatureFlagProvider 
      idToken="57847459-d4a8-4a88-8809-fc50b74f89d6"
    >
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    </FeatureFlagProvider>
  );
}

// Header.js
import { useHasFeature } from "@usebool/sdk-react";

export const Header = () => {
    const experimentalHeadline = useHasFeature('EXPERIMENTAL_HEADLINE');

    return (
        <header>
          {experimentalHeadline ? <h1>Experiment</h1> : <h1>Original</h1>}
        </header>
    );
}
```

## TypeScript

This package also provides the types in the event of using typescript in your project.

```ts
import {
  BoolClient,
  ClientContext,
  FeatureFlag,
  ProviderProps,
} from '@usebool/sdk-react';

type BoolClient = {
  hasFeature: (featureName: string) => Promise<boolean>;
  getFeatures: () => Promise<FeatureFlag[]>;
};

type ClientContext = {
  flags: FeatureFlag[];
  client: BoolClient | undefined;
};

type FeatureFlag = {
  id: string;
  key: string;
  name: string;
  value: boolean;
  description?: string;
};

type ProviderProps = {
  idToken: string;
  children: React.ReactElement | React.ReactElement[];
};
```
