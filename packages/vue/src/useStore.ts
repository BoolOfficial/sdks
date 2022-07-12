import { ref, type Ref } from 'vue';
import type { FeatureFlag } from '@usebool/sdk-js';

// Retyped because vue-tsc reads the import as `any`
type BoolClient = {
  hasFeature: (featureName: string) => Promise<boolean>;
  getFeatures: () => Promise<FeatureFlag[]>;
};

type ClientStatus = 'idle' | 'loading' | 'error' | 'success';

const flags = ref<FeatureFlag[]>([]) as Ref<FeatureFlag[]>;
const status = ref<ClientStatus>('idle');
const client = ref<BoolClient | null>(null);

export function useStore() {
  const setFlags = (newFlags: FeatureFlag[]) => (flags.value = newFlags);
  const setStatus = (newStatus: ClientStatus) => (status.value = newStatus);
  const setClient = (newClient: BoolClient) => (client.value = newClient);

  return {
    flags,
    setFlags,
    status,
    setStatus,
    client,
    setClient,
  };
}
