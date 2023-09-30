import  useGenre from '../hooks/useGenre'
import GenreCard from './GenreCard'

const GenreList = () => {
  const { data } = useGenre()
  return (
    <>
      {data.map(genre => {
        return <GenreCard key={genre.id} genre={genre} />
      })}
    </>
  )
}

export default GenreList
