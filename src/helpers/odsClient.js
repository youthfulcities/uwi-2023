import { ApiClient } from "@opendatasoft/api-client";

const getData = async (query) => {
  const client = new ApiClient({
    /* (Optional) authenticate through an api key */
    apiKey: process.env.REACT_APP_ODS_API,

    /* (Optional) The Opendatasoft domain identifier or url.
       If missing, in the browser, the client will use the current host. */
    domain: "pivot-data-hub" || "https://pivot-data-hub.opendatasoft.com/",

    /* (Optional) A fetch-compatible API for making a request. */
    fetch: window.fetch,

    /* (Optional) Allow you to update the request before it is send. */
    // interceptRequest: async (request) => {
    //       console.log(request);
    //       request.headers.append('x-custom', 'custom');
    //       return request;
    // },

    /* (Optional) Allow you to intercept the response before it is returned */
    interceptResponse: async (response) => {
      const apiResponse = await response.json();
      delete apiResponse["links"];
      return apiResponse;
    },
  });

  const response = await client.get(
    `catalog/datasets/index-2020-full/records/${query}`
  );
  return response;
};

const getData2 = () => {
  // Initialize the Client by indicating the domain to request.
  const client = new ApiClient({
    domain: "https://pivothub.youthfulcities.com/",
  });

  // Create the query to run.
  const query =
    "catalog/datasets/index-2020-full/aggregates?select=avg(value) as y,city as x&group_by=city";
  // Now, run the query.
  client
    .get(query)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

getData();

export default getData;
