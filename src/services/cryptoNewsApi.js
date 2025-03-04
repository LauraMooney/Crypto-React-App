import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'Content-Type': 'application/json',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cryptoadvice-0qte.onrender.com',
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/fetch-news'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
