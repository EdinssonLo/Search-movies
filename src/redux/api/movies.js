import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "ae5a52fe48mshe6a64ec24a27ec5p16b2ccjsn0c5613839cfa",
  "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-movie-database.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/title/find?q=${title}`,
        method: "GET",
        headers
      }),
    }),
  }),
});
export const { useFetchMoviesQuery } = moviesApi;
