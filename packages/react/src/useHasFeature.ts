import { FeatureFlag } from '@usebool/sdk-js';
import { useContext } from 'react';
import { context as FeatureFlagContext } from './context';

export const useHasFeature = (featureKey: string) => {
  const { flags, client } = useContext(FeatureFlagContext);

  if (!client) return false;

  const feature = flags.find((flag: FeatureFlag) => flag.key === featureKey);

  if (!feature) {
    console.error(
      `A feature with key ${featureKey} was not found. Did you create it in your dashboard?`,
    );
    return false;
  }

  return feature.value;
};
