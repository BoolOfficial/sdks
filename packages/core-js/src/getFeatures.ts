import { query, GET_FEATURE_FLAGS_QUERY } from './query';
import type { FeatureFlag, FeatureFlagList } from './types';

export const getFeatures = async (idToken: string) => {
  const { data } = await query<FeatureFlagList>(
    GET_FEATURE_FLAGS_QUERY,
    'GetFeatureFlags',
    idToken,
  );

  return composeFeatureFlags(data as FeatureFlagList);
};

export const composeFeatureFlags = (data: FeatureFlagList): FeatureFlag[] => {
  try {
    const featureFlags = data?.Bool_FeatureFlag;

    if (!Array.isArray(featureFlags)) {
      throw new Error('Feature flags could not be fetched');
    }

    return featureFlags;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Feature flags could not be fetched');
    }
    return [];
  }
};
