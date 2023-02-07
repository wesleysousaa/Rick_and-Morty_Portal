import { useState } from "react"

// Services
import { fetchData } from "../services/fetchData"

export const useFetch = () => {

  const [loading, setLoading] = useState(false)

  const fetchCharacters = async (url) => {
    setLoading(true)
    const data = await fetchData('character', url)
    setLoading(false)
    return data
  }

  const fetchLocations = async () => {
    setLoading(true)
    const data = await fetchData('location')
    setLoading(false)
    return data
  }

  const fetchEpisodes = async (episodes) => {
    setLoading(true)
    let data = []
    if (episodes.length > 0) {
      await episodes.forEach(async (episode) => {
        data.push(await fetchData(`episode`, episode))
      });
    }
    setLoading(false)
    return data
  }

  return {
    fetchCharacters,
    fetchEpisodes,
    fetchLocations,
    loading
  }
}