import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {selectUser, logout} from '../features/user/userSlice'

export const Navigation = () =>
{
	const dispatch = useDispatch()
	const user = useSelector( selectUser )
	const logo = 'https://th.bing.com/th/id/R.9f316495a8a8657ffa47ee68703ffaf3?rik=dYC1FMGLhnRWvA&pid=ImgRaw&r=0'
	const avatar = 'https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0'
	const [ showNavbar, setShowNavbar ] = useState( false )

	const logoutHandler = (event) =>
	{
		event.preventDefault()
		dispatch( logout() );
	}
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
	
	const authorization = user ? (<Avatar src={avatar} /> ): <Link to='/login'><Button>Sign In</Button></Link>
	
	return (
	  <Container>
			<Navbar style={ { background: showNavbar ? 'black' : 'transparent' } }>
				<Link to='/'>
					<Logo src={logo} />
				</Link>
				{ user ? <>
					<Avatar src={ avatar } /> <Button type='button' onClick={logoutHandler}>Logout</Button>
				</>
					: <Link to='/login'><Button>Sign In</Button></Link>
				}
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
	color: #fff;
`;
