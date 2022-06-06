import bool from '@usebool/sdk-js';
import { useStore } from './useStore.js';

export const init = async ({ appId }: { appId: string }) => {
  const { setFlags } = useStore();

  const featureFlags = bool({ appId });

  const localFlags = await featureFlags.getFeatures();

  setFlags(localFlags);
};
