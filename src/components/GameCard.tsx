import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getOptimizeImage from './OptimizeImage'
import Emoji from './Emoji'
interface props {
  game: Game
}
const GameCard = ({ game }: props) => {
  return (
    <Card >
      <Image src={getOptimizeImage(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}
        <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
