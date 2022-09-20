import { MoviesResponse, FetchMovieKey } from '../models/types'
import { errorMessageHandler } from '../utils/service-error-handler'
import { isValidMoviesResponse } from '../utils/validators'

export const fetchMovies = async (
  key: FetchMovieKey,
  page: number
): Promise<MoviesResponse> => {
  const endpoints = {
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
    topMovies: `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
  }

  try {
    const response = await window.fetch(endpoints[key], {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_THEMOVIE_DB_API_TOKEN}`,
      },
    })
    if (!response.ok) {
      errorMessageHandler(response.status)
    }

    const resJSON = await response.json()

    if (!isValidMoviesResponse(resJSON)) {
      throw new Error('Unexpected or invalid response from the server.')
    }

    return resJSON
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      throw error
    }
  }
}
