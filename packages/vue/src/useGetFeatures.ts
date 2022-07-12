import { useStore } from './useStore.js';

export const useGetFeatures = () => {
  const { flags, status, client } = useStore();

  if (!client.value) {
    console.error('Bool was used before it was initialised.');
  } else if (!flags.value.length && status.value === 'success') {
    console.error(
      "Something went wrong. It seems you don't have any feature flags.",
    );
  }

  return flags;
};
