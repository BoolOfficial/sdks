import { getSingleFlagValue } from './hasFeature';
import { featureFlags } from './fixtures/featureFlags';

const mockClientResponse = {
  Bool_FeatureFlag: featureFlags,
};

const noop = () => {
  /* noop */
};

describe('hasFeature', () => {
  describe('getSingleFlagValue', () => {
    it('will return whether or not a feature flag is enabled', () => {
      expect(getSingleFlagValue(mockClientResponse, 'AWESOME_FEATURE')).toBe(
        true,
      );
      expect(getSingleFlagValue(mockClientResponse, 'BIGGER_BUTTONS')).toBe(
        false,
      );
    });

    it('will throw an error if no flags can be found', () => {
      const consoleError = jest
        .spyOn(console, 'error')
        .mockImplementation(noop);

      expect(getSingleFlagValue(mockClientResponse, 'UNKNOWN_FEATURE')).toBe(
        false,
      );

      expect(consoleError).toHaveBeenCalledWith(
        'Flag with key "UNKNOWN_FEATURE" not found',
      );

      consoleError.mockReset();
    });
  });
});
