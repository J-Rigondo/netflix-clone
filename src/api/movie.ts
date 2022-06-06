import instance from 'api/index';
import { IPlayingMovie, ISearch } from 'interface/movie';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchPlayingMovies() {
  const url = `/movie/now_playing?api_key=${API_KEY}`;
  const response = await instance.get<IPlayingMovie>(url);

  return response.data;
}

export async function searchMovies(keyword: string, page: number) {
  const url = `/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`;
  const response = await instance.get<ISearch>(url);

  return response.data;
}
