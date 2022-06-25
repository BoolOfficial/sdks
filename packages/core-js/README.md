<h1 align="center">
<br />
<img src="https://avatars.githubusercontent.com/u/79407572?s=200&v=4" alt="Bool - JavaScript SDK" width="120">
<br />
<br />
Bool - JavaScript SDK
</h1>
<br />

[Bool](https://usebool.com/) provides simple and powerful feature management tools, giving you total control of your feature rollout. Test in production, ship code faster, simpler, safer and smarter.

## Introduction

This package is our main client-side (JavaScript) SDK. It can be used directly for any JavaScript application or NodeJs server-side application. This also serves as a core package for the more specialized SDKs - for instance the [React SDK](https://github.com/BoolOfficial/sdk-react).

## Getting started

Install the JavaScript SDK using your package manager of choice:

```js
// npm example
npm install @usebool/sdk-js

// yarn example
yarn add @usebool/sdk-js

// pnpm example
pnpm install @usebool/sdk-js
```

To use the JavaScript SDK, you will need the application key. This key will be provided in the bool dashboard and it is not a secret, meaning that there is no danger in exposing it in your client-side code.

### SDK initialization

```js
import bool from '@usebool/sdk-js';

const boolClient = bool({ idToken: YOUR_ID_TOKEN });
```

You are now left with fetching feature flags where you have two options. After initialization, the client exposes two functions that each in turn return a Promise: `hasFeature` and `getFeatures`.

### getFeatures

```js
// Resolves in a list of feature flags
const allFeatures = await boolClient.getFeatures();
```

If there are no feature flags, an empty list will be returned.
In case of a faulty request the function will log a generic error saying `"Feature flags could not be fetched"`, and will return an empty list by default.

### hasFeature

```js
// Resolves in a boolean
const myAmazingFeature = await boolClient.hasFeature('MY_AMAZING_FEATURE');
```

In case the feature flag cannot be found, the function will log an error saying `'Flag with key MY_AMAZING_FEATURE not found'` and will return `false`. By returning `false` the function provides fallback in case of an accidental deletion of a feature flag.

[Here](https://github.com/BoolOfficial/test-apps) you can find an example of how to use this SDK in a real application.

## TypeScript

This package also provides typescript definitions of the following:

```ts
import {
  BoolClient,
  ClientConfig,
  FeatureFlag,
  FeatureFlagList,
} from '@usebool/sdk-js';

type BoolClient = {
  hasFeature: (featureName: string) => Promise<boolean>;
  getFeatures: () => Promise<FeatureFlag[]>;
};

type ClientConfig = {
  idToken: string;
};

type FeatureFlag = {
  id: string;
  key: string;
  name: string;
  value: boolean;
  description?: string;
};

type FeatureFlagList = {
  Bool_FeatureFlag: FeatureFlag[];
};
```
