import { useEffect, useState } from 'react'
import axios from '../config/axios'
import styled from 'styled-components'

export const Row = ( { title, fetchUrl, isLargeRow = false } ) =>
{
	const base_url = 'https://image.tmdb.org/t/p/original/'
	const [ movies, setMovies ] = useState( [] )
	const posters = movies.map( ( movie ) => ( ( ( isLargeRow && movie.poster_path ) || ( !isLargeRow && movie.backdrop_path ) )
		&& (
				  <Poster style={{maxHeight: isLargeRow ? '250px' : '100px'}} key={ movie.id }
					  src={ `${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path }` }
				alt={ movie.name } />)))
	
	useEffect( () =>
	{
		(async () =>
		{
			const request = await axios.get( fetchUrl )
			setMovies( request.data.results )
			return request;
		})()
	}, [ fetchUrl ] )
	
  return (
	  <>
		<Section>
			  <Title>{ title }</Title>
			  <Posters>
				  {posters}
			  </Posters>
	  	</Section>
	  </>
  )
}

const Section = styled.div`
	color: white;
	margin-left: 20px;
`

const Title = styled.h2`

`

const Poster = styled.img`
	object-fit: contain;
	margin-left: 10px;
	width: 100%;
	transition: transform 450ms;
	&:hover {
		transform: scale(1.08);
		opacity: 1;		
	}
`
const Posters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;
	&::-webkit-scrollbar {
		display: none;
	}
`

