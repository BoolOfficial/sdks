export type FeatureFlag = {
  applicationId: string;
  id: string;
  key: string;
  name: string;
  value: boolean;
  description?: string;
};

export type FeatureFlagList = {
  Bool_FeatureFlag: FeatureFlag[];
};

export type ClientConfig = {
  idToken: string;
};

export type BoolClient = {
  hasFeature: (featureName: string) => Promise<boolean>;
  getFeatures: () => Promise<FeatureFlag[]>;
};
