import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
// import GenreCard from './GenreCard'
import getOptimizeImage from './OptimizeImage'

interface props {
  onSelectedGerne: (genre:Genre) => void
}
const GenreList = ({ onSelectedGerne }: props) => {
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
              <Button  onClick={()=>onSelectedGerne(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>
        )

        // <GenreCard onSelectedGerne={onSelectedGerne}key={genre.id} genre={genre} />
      })}
    </List>
  )
}

export default GenreList
