import bool from '@usebool/sdk-js';
import { useStore } from './useStore.js';

export const init = async ({ idToken }: { idToken: string }) => {
  const { setFlags } = useStore();

  const featureFlags = bool({ idToken });

  const localFlags = await featureFlags.getFeatures();

  setFlags(localFlags);
};
