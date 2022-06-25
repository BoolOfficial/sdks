import fetch from 'cross-fetch';

const URL = 'https://api.usebool.com/v1/graphql';

export const GET_FEATURE_FLAGS_QUERY = `
query GetFeatureFlags {
  Bool_FeatureFlag {
    id
    key
    name
    value
    description
  }
}
`;

export const query = async <Data>(
  queryString: string,
  operationName: string,
  idToken: string,
): Promise<{ data: Data }> => {
  const graphqlQuery = {
    operationName,
    query: queryString,
  };

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(URL, options);
  return (await response.json()) as { data: Data };
};
