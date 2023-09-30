import { List, Spinner } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import GenreCard from './GenreCard'

const GenreList = () => {
  const { data, error, isLoading } = useGenre()

  if (error) return
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map(genre => {
        return <GenreCard key={genre.id} genre={genre} />
      })}
    </List>
  )
}

export default GenreList
