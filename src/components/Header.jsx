import styled from 'styled-components'
export const Header = ({banner, children}) => {
  return (
	  <Head style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner}')`}}>
		  {children}
	</Head>
  )
}

const Head = styled.header`
	position: relative;
	height: 400px;
	background-repeat:no-repeat;
    background-size: cover;
	object-fit: contain;
	background-position: center center;
	width: 100vw;
	color: white;
`;