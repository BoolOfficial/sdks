import fetch from 'cross-fetch';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im9wZW5TREtwdWJsaWNVc2VyIiwiaWF0IjoxNjAwMDAwMDAwLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsib3BlblNESyJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJvcGVuU0RLIn19.hmSRp-HmrVjLbqwbCKu96mifq-cULOZNAHfn6AWoUYU';

const URL = 'https://api.usebool.com/v1/graphql';

export const query = async <Data>(
  queryString: string,
  operationName: string,
  appId: string,
): Promise<{ data: Data }> => {
  const graphqlQuery = {
    operationName,
    query: queryString,
    variables: { appId },
  };

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(URL, options);
  return (await response.json()) as { data: Data };
};
