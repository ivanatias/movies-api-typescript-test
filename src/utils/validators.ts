import { MoviesResponse } from '../models/types'

export const isValidMoviesResponse = (
  response: any
): response is MoviesResponse => {
  if (
    isUndefinedOrNull(response) ||
    isUndefinedOrNull(response.results) ||
    !isNumber(response.page) ||
    !isNumber(response.total_pages) ||
    !isNumber(response.total_results)
  ) {
    return false
  }

  return true
}

export const isUndefinedOrNull = (value: any): boolean => {
  return typeof value === 'undefined' || value === null
}

export const isString = (value: any): boolean => {
  return typeof value === 'string'
}

export const isNumber = (value: any): boolean => {
  return typeof value === 'number'
}
