export interface Movies {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}

export interface MovieResult {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<Genre['id']>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export type MoviePreview = Pick<
  MovieResult,
  'id' | 'title' | 'poster_path' | 'vote_average'
>

export type MoviesResponse = Movies | undefined

export type FetchMovieKey = 'upcomingMovies' | 'topMovies'
