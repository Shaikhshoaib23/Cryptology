import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders =  {
  'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f4002d0defmsh13b75c5417b2f38p166e7bjsn38f180c04456'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsapi = createApi({
    reducerPath: 'cryptoNewsapi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&Freshness=Day&COunt=${count}`),
      })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsapi;