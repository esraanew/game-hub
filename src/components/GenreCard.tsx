import { HStack, Image, Text } from '@chakra-ui/react'
import { Genre } from '../hooks/useGenre'

interface props{
    genre:Genre;
}
const GenreCard = ({genre}:props) => {
  return (
    <HStack marginY={2}>
        <Image width='50px' src={genre.image_background} borderRadius='5px'/>
        <Text>{genre.name}</Text>
    </HStack>
  )
}

export default GenreCard