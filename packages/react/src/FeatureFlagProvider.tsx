import React from 'react';
import bool from '@usebool/sdk-js';
import { ProviderProps, ClientContext } from './types';
import { Provider } from './context';

export class FeatureFlagProvider extends React.Component<ProviderProps> {
  readonly state: Readonly<ClientContext>;

  constructor(props: ProviderProps) {
    super(props);

    this.state = {
      flags: [],
      client: undefined,
    };
  }

  initializeClient = async () => {
    const { applicationId } = this.props;
    const { client } = this.state;

    if (client) {
      const featureValues = await client.getFeatures();
      this.setState({ flags: featureValues });
    } else {
      const initializedClient = bool({ appId: applicationId });
      const featureValues = await initializedClient.getFeatures();
      this.setState({ flags: featureValues, client: initializedClient });
    }
  };

  async componentDidMount() {
    await this.initializeClient();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
