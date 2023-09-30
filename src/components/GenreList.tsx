import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text
} from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import getOptimizeImage from './OptimizeImage'

interface props {
  onSelectedGerne: (genre: Genre) => void
  selectedGerne: Genre | null
}
const GenreList = ({ selectedGerne, onSelectedGerne }: props) => {
  const { data, error, isLoading } = useGenre()

  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map(genre => {
        return (
          <ListItem paddingY='5px' key={genre.id}>
            <HStack>
              <Image
                boxSize='32px'
                src={getOptimizeImage(genre.image_background)}
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGerne?.id ? 'bold' : 'normal'}
                onClick={() => onSelectedGerne(genre)}
                variant='link'
                fontSize='lg'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )
      })}
    </List>
  )
}

export default GenreList
