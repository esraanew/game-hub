import { List } from '@chakra-ui/react'
import  useGenre from '../hooks/useGenre'
import GenreCard from './GenreCard'

const GenreList = () => {
  const { data } = useGenre()
  return (
    <List>
      {data.map(genre => {
        return <GenreCard key={genre.id} genre={genre} />
      })}
    </List>
  )
}

export default GenreList
