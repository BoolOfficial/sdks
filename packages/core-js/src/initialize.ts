import { hasFeature } from './hasFeature';
import { getFeatures } from './getFeatures';
import { BoolClient, ClientConfig, FeatureFlag } from './types';

/**
 * Method for initialising the SDK client. Once initialised, it will return methods
 * to retrieve all feature flags, or the value of a single feature
 * @param {ClientConfig}- unique id token for your application
 * @returns {BoolClient} - hasFeature, getFeatures
 * @example
 * const bool = init({ idToken: '1337-k1tt3n-4prez' });
 */
export const init = ({ idToken }: ClientConfig): BoolClient => {
  return {
    /**
     * Method for retrieving the value of a single feature flag
     * @param {string} key - key for this feature flag
     * @returns {Promise<boolean>} - whether or this feature flag is enabled or not
     * @example
     * const isFooEnabled = await bool.hasFeature('FOO');
     */
    hasFeature: (featureName: string): Promise<boolean> =>
      hasFeature(idToken, featureName),
    /**
     * Method for fetching a list of all features
     * @returns {Promise<FeatureFlag[]>} - list of all feature flags, each containing data
     * @example
     * const myFeatures = await bool.getFeatures();
     */
    getFeatures: (): Promise<FeatureFlag[]> => getFeatures(idToken),
  };
};
