import { query } from './query';
import type { FeatureFlag, FeatureFlagList } from './types';

const GET_ALL_FEATURE_FLAGS_QUERY = `
  query GetFeatureFlagsByID($appId: uuid = "", $order_by: [Bool_FeatureFlag_order_by!] = {name: asc})  {
    Bool_FeatureFlag(where: {applicationId: {_eq: $appId}}, order_by: $order_by) {
      id
      key
      name
      value
      description
    }
  }
`;

export const getFeatures = async (appId: string) => {
  const { data } = await query<FeatureFlagList>(
    GET_ALL_FEATURE_FLAGS_QUERY,
    'GetFeatureFlagsByID',
    appId,
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
