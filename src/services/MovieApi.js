import axios from "axios";
const key = "373f6586b3d8613d31636fadc4170d59";

export const getPopular = () =>
  axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
  );

export const getMovie = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  );

export const getActors = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
  );

export const getReviews = (id) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US`
  );

export const getForQuery = (query) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
