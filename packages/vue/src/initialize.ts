import bool from '@usebool/sdk-js';
import { useStore } from './useStore.js';

export const init = async ({ idToken }: { idToken: string }) => {
  const { setFlags, setClient, setStatus } = useStore();

  const _client = bool({ idToken });

  setClient(_client);

  setStatus('loading');
  const localFlags = await _client.getFeatures();
  setStatus('success');

  setFlags(localFlags);
};
