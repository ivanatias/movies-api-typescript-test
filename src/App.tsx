import Container from './components/container'
import MovieItem from './components/movie-item'
import Button from './components/button'
import Status from './components/status'

import { Fragment, ReactElement, useCallback, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchMovies } from './services/public.service.movies'
import {
  MoviePreview,
  MovieResult,
  MoviesResponse,
  FetchMovieKey,
} from './models/types'
import { wrapAsyncFn } from './utils/wrap-async-fn.utility'

const App = (): ReactElement => {
  const [movieKey, setMovieKey] = useState<FetchMovieKey>('upcomingMovies')

  const {
    data,
    isLoading,
    isFetchingNextPage,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<MoviesResponse, Error>(
    ['upcomingMovies', movieKey],
    async ({ pageParam = 1 }) => await fetchMovies(movieKey, pageParam),
    {
      getNextPageParam: lastPage => {
        if (lastPage !== undefined) {
          return lastPage.page < lastPage.total_pages
            ? lastPage.page + 1
            : undefined
        }
      },
    }
  )

  const adaptMoviePreview = useCallback((movie: MovieResult): MoviePreview => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    }
  }, [])

  const selectMovieKey = useCallback((selectedMovieKey: FetchMovieKey) => {
    setMovieKey(selectedMovieKey)
  }, [])

  return (
    <Container>
      <h1 className='text-4xl font-bold text-center text-blue-500'>
        Movies API TypeScript Test
      </h1>
      <div className='flex items-center justify-center gap-4 my-10'>
        <Button callback={() => selectMovieKey('upcomingMovies')}>
          Upcoming
        </Button>
        <Button callback={() => selectMovieKey('topMovies')}>Top Rated</Button>
      </div>
      {isLoading ? (
        <Status status='Loading...' />
      ) : isError ? (
        <Status status={error.message} />
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6 mt-10'>
            {data?.pages.map((movies, index) => (
              <Fragment key={index}>
                {movies?.results.map(movie => (
                  <MovieItem movie={adaptMoviePreview(movie)} key={movie.id} />
                ))}
              </Fragment>
            ))}
          </div>
          <div className='my-4 flex items-center justify-center'>
            <Button
              callback={() => wrapAsyncFn(fetchNextPage)()}
              disabled={hasNextPage === false}
            >
              {isFetchingNextPage
                ? 'Loading...'
                : hasNextPage === true
                ? 'Load more'
                : 'No more results'}
            </Button>
          </div>
        </>
      )}
    </Container>
  )
}

export default App
