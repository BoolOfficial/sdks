import { useStore } from './useStore.js';

export const useGetFeatures = () => {
  const { flags } = useStore();

  if (!flags.value.length) {
    console.error(
      "Something went wrong. It seems you don't have any feature flags.",
    );
    return [];
  }

  return flags.value;
};
