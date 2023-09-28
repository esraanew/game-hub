import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  Text
} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getOptimizeImage from './OptimizeImage'
interface props {
  game: Game
}
const GameCard = ({ game }: props) => {
  return (
    <Card >
      <Image src={getOptimizeImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
