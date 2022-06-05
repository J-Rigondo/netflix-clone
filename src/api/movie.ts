import instance from 'api/index';
import { IPlayingMovie } from 'interface/movie';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchPlayingMovies() {
  const url = `/movie/now_playing?api_key=${API_KEY}`;
  const response = await instance.get<IPlayingMovie>(url);

  return response.data;
}
