import { BoolClient, FeatureFlag } from '@usebool/sdk-js';

export type ProviderProps = {
  applicationId: string;
  children: React.ReactElement | React.ReactElement[];
};

export type ClientContext = {
  flags: FeatureFlag[];
  client: BoolClient | undefined;
};
