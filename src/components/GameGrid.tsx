import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkelton from './GameCardSkelton'

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeltonData = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding='10px'
      >
        {isLoading &&
          skeltonData.map(skeleton => {
            return <GameCardSkelton key={skeleton} />
          })}
        {games.map(game => {
          return <GameCard key={game.id} game={game} />
        })}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
