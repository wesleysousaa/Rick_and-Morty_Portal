const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchData = async (type, url) => {
  const data = await fetch(`${url ? url : (BASE_URL + '/' + type)}`)
  return await data.json()
}

