import { composeFeatureFlags } from './getFeatures';
import { featureFlags } from './fixtures/featureFlags';

const mockClientResponse = {
  Bool_FeatureFlag: featureFlags,
};

const noop = () => {
  /* noop */
};

describe('getFeatures', () => {
  describe('composeFeatureFlags', () => {
    it('will return a clean list of all features', () => {
      const result = composeFeatureFlags(mockClientResponse);
      expect(result).toStrictEqual(mockClientResponse.Bool_FeatureFlag);
    });

    it('will throw an error if the list could not be fetched', () => {
      const consoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(noop);

      // @ts-ignore
      expect(composeFeatureFlags({})).toStrictEqual([]);

      expect(consoleError).toHaveBeenCalledWith(
        'Feature flags could not be fetched',
      );

      consoleError.mockReset();
    });
  });
});
