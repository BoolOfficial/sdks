import { query, GET_FEATURE_FLAGS_QUERY } from './query';
import type { FeatureFlag, FeatureFlagList } from './types';

export const hasFeature = async (idToken: string, key: FeatureFlag['key']) => {
  const { data } = await query<FeatureFlagList>(
    GET_FEATURE_FLAGS_QUERY,
    'GetFeatureFlags',
    idToken,
  );

  return getSingleFlagValue(data as FeatureFlagList, key);
};

export const getSingleFlagValue = (
  data: FeatureFlagList,
  key: FeatureFlag['key'],
) => {
  try {
    const flag = data.Bool_FeatureFlag.find(
      (featureFlag: FeatureFlag) => featureFlag.key === key,
    );

    if (!flag) {
      throw new Error(`Flag with key "${key}" not found`);
    }

    return flag.value;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Feature flag data could not be fetched');
    }
    return false;
  }
};
