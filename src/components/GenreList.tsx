import React from 'react'
import useGenre from '../hooks/useGenre';
import GenreCard from './GenreCard';

const GenreList = () => {

    const { genres, error, isLoading } = useGenre();
  return (

    <>
    {
genres.map(genre=>{
    return <GenreCard key={genre.id} genre={genre}/>
})
    }
    </>
  )
}

export default GenreList