import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/user/"; // <-- backend url

// this is connectied to our apiSlice endpoints, we can create our endpoints here //
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        // this is the route to our login function in the backend
        url: `${USERS_URL}login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;

/* 
This is the endpoint to our backend
*/
