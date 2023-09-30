import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import { Genre } from '../hooks/useGenre'
import getOptimizeImage from './OptimizeImage'

interface props {
  genre: Genre
}
const GenreCard = ({ genre }: props) => {
  return (
    <ListItem paddingY='5px'>
      <HStack>
        <Image
          boxSize='32px'
          src={getOptimizeImage(genre.image_background)}
          borderRadius={8}
        />
        <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
    </ListItem>
  )
}

export default GenreCard
