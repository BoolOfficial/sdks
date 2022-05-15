import { useContext } from 'react';
import { context as FeatureFlagContext } from './context';

export const useGetFeatures = () => {
  const { flags, client } = useContext(FeatureFlagContext);

  if (!client) return [];

  if (!flags.length) {
    console.error(
      "Something went wrong. It seems you don't have any feature flags.",
    );
    return [];
  }

  return flags;
};
