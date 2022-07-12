import { FeatureFlag } from '../types';

export const featureFlags: FeatureFlag[] = [
  {
    id: '1337',
    applicationId: 'foo-bar-baz',
    key: 'AWESOME_FEATURE',
    name: 'Awesome feature',
    description: 'Here is a longer text to describe this feature',
    value: true,
  },
  {
    id: '8008135',
    applicationId: 'foo-bar-baz',
    key: 'BIGGER_BUTTONS',
    name: 'Bigger buttons',
    description: 'Everybody wants massive buttons, most likely',
    value: false,
  },
  {
    id: 'b4d455',
    applicationId: 'foo-bar-baz',
    key: 'BG_MUSIC',
    name: 'Background music',
    description: 'Soothing music might make people buy more',
    value: true,
  },
];
