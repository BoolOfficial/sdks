import { ref, readonly, type Ref } from 'vue';
import type { FeatureFlag } from '@usebool/sdk-js';

const flags = ref<FeatureFlag[]>([]) as Ref<FeatureFlag[]>;

export function useStore() {
  const setFlags = (newFlags: FeatureFlag[]) => (flags.value = newFlags);

  const _flags = readonly<Ref<FeatureFlag[]>>(flags);

  return {
    flags: _flags,
    setFlags,
  };
}
