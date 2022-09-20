const errorDictionary = {
  401: 'You are not authorized to make this request.',
  404: 'Not Found.',
  500: 'Internal server error.',
}

export const errorMessageHandler = (errorStatus: number): void => {
  if (errorStatus === 401) throw new Error(errorDictionary[401])
  if (errorStatus === 404) throw new Error(errorDictionary[404])
  if (errorStatus >= 500) throw new Error(errorDictionary[500])
}
