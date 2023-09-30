import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkelton from './GameCardSkelton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenre'
interface props{
  selectedGerne:Genre|null
}
const GameGrid = ({selectedGerne}:props) => {
  const { data, error, isLoading } = useGames(selectedGerne);
  const skeltonData = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={3}
      >
        {isLoading &&
          skeltonData.map(skeleton => {
            return (
              <GameCardContainer key={skeleton}>
                <GameCardSkelton  />
              </GameCardContainer>
            )
          })}
        {data.map(game => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard  game={game} />
            </GameCardContainer>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
