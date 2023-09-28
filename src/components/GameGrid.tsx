import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'

const GameGrid = () => {
const {games,error} = useGames();
console.log(games)
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
