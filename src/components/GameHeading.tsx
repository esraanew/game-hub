import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
interface props{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:props) => {
    const heading=`${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Game`
  return (
    <Heading as='h1' marginBottom={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading