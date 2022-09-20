export const getImage = (posterPath: string, width: number): string => {
  return `https://image.tmdb.org/t/p/w${width}${posterPath}`
}
