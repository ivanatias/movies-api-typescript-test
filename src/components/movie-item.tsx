import { ReactElement } from 'react'
import { MoviePreview } from '../models/types'
import { getImage } from '../utils/get-image.utility'

interface MovieItemProps {
  movie: MoviePreview
}

const MovieItem = ({ movie }: MovieItemProps): ReactElement => {
  return (
    <div className='flex flex-col w-full gap-2 items-center'>
      <div className='w-full relative max-w-[342px] rounded-lg shadow-md'>
        <img
          src={getImage(movie.poster_path, 342)}
          alt={movie.title}
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='text-blue-700 absolute top-2 right-2 p-1 rounded-md bg-slate-200 flex items-center justify-center text-sm 2xl:text-base min-w-[40px]'>
          {movie.vote_average}
        </div>
      </div>
      <div>
        <p className='text-blue-500 font-semibold text-lg 2xl:text-xl text-center'>
          {movie.title}
        </p>
      </div>
    </div>
  )
}

export default MovieItem
