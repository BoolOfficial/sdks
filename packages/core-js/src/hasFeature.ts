import { query } from './query';
import type { FeatureFlag, FeatureFlagList } from './types';

const GET_ALL_FEATURE_FLAGS_QUERY = `
  query GetFeatureFlagsByID($appId: uuid = "", $order_by: [Bool_FeatureFlag_order_by!] = {created_at: asc})  {
    Bool_FeatureFlag(where: {applicationId: {_eq: $appId}}, order_by: $order_by) {
      id
      key
      name
      value
      description
    }
  }
`;

export const hasFeature = async (appId: string, key: FeatureFlag['key']) => {
  const { data } = await query<FeatureFlagList>(
    GET_ALL_FEATURE_FLAGS_QUERY,
    'GetFeatureFlagsByID',
    appId,
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
