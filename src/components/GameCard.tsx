import { Card, CardBody, Heading, Image, List, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
interface props {
  game: Game
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius='10px' overflow='hidden'>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms} />
      </CardBody>
    </Card>
  )
}

export default GameCard
