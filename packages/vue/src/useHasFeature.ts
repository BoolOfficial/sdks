import type { FeatureFlag } from '@usebool/sdk-js';
import { useStore } from './useStore.js';

export const useHasFeature = (featureKey: string): boolean => {
  const { flags } = useStore();

  const feature = flags.value.find(
    (flag: FeatureFlag) => flag.key === featureKey,
  );

  if (!feature) {
    console.error(
      `A feature with key ${featureKey} was not found. Did you create it in your dashboard?`,
    );
    return false;
  }

  return feature.value;
};
