import { ref, watch } from 'vue';
import type { FeatureFlag } from '@usebool/sdk-js';
import { useStore } from './useStore.js';

export const useHasFeature = (featureKey: string) => {
  const { client, flags, status } = useStore();

  const feature = ref(
    flags.value.find((flag: FeatureFlag) => flag.key === featureKey),
  );
  const featureValue = ref<FeatureFlag['value']>(feature.value?.value ?? false);

  if (!client.value) {
    console.error('Bool was used before it was initialised.');
  } else if (!flags.value.length && status.value === 'success') {
    console.error(
      "Something went wrong. It seems you don't have any feature flags.",
    );
  }

  if (!feature.value && status.value === 'success') {
    console.error(
      `A feature with key ${featureKey} was not found. Did you create it in your dashboard?`,
    );
  }

  watch(flags, (value) => {
    feature.value = value.find((flag: FeatureFlag) => flag.key === featureKey);
  });

  watch(feature, (value) => {
    featureValue.value = value.value;
  });

  return featureValue;
};
