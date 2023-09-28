import { Grid, GridItem, Text } from '@chakra-ui/react'
import apiClient from '../Services/api-client'
import { useEffect, useState } from 'react'
interface Game {
  id: number
  name: string
}
interface FetchGamesResponse {
  count: number
  results: Game[]
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
    {error && <Text color="red">{error}</Text>}
      <ul>
        {
            games.map((game)=>{
                return <li key={game.id}>{game.name}</li>
            })
        }
      </ul>
    </>
  )
}

export default GameGrid
