import styled from 'styled-components'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


export const Navigation = () =>
{
	const logo = 'https://th.bing.com/th/id/R.9f316495a8a8657ffa47ee68703ffaf3?rik=dYC1FMGLhnRWvA&pid=ImgRaw&r=0'
	const avatar = 'https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0'
	const [ showNavbar, setShowNavbar ] = useState( false )

const transitionNavbarHandler = () =>
{
	if ( window.scrollY > 100 )
	{
		setShowNavbar( true )
	} else
	{
		setShowNavbar( false )
		}
}
		
useEffect( () =>
{
	window.addEventListener( 'scroll', transitionNavbarHandler )
	return () => window.removeEventListener('scroll', transitionNavbarHandler)
}, [])
	
	return (
	  <Container>
			<Navbar style={ { background: showNavbar ? 'black' : 'transparent' } }>
				<Link to='/'>
					<Logo src={logo} />
				</Link>
				{/* <Avatar src={avatar} /> */ }
				<Link to='/login'>
					<Button>Sign In</Button>
				</Link>
	</Navbar>
	  </Container>
  )
}


const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 1;
`;
const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	transition: all 200ms ease-in;
`

const Logo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 0 15px;
	cursor: pointer;
`
const Avatar = styled.img`
	width: 30px;
	object-fit: contain;
	margin: 0 15px;
	cursor: pointer;
`

const Button = styled.button`
	margin: 0 15px;
	padding: 10px 20px;
	font-size: 1rem;
	background-color: #e50914;
	cursor: pointer;
	border: none;
`;
