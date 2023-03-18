import { useState } from 'react';
import styled from 'styled-components'
import { Login } from '../components/Login'
import {SignUp} from '../components/SignUp'

export const AuthPage = () =>
{
const [ login, setLogin ] = useState( false )

	const loginHandler = () =>
	{
		setLogin( true )
	}

	const content = login ? <SignUp /> : <Login loginHandler={loginHandler} />

	return (
	<>
	<Container>
	<Section>
		<Background>
			 <Gradient>
			<Body>
				{content}	
			</Body>
			</Gradient>
			</Background>
		</Section>
		</Container>
	</>
  )
}

const Container = styled.div`
	position: relative;
	hight: 100%;
`;

const Section = styled.div`

`;

const Background = styled.div`
	position: relative;
	height: 100%;
	background-repeat:no-repeat;
	background-image: url('https://i.pinimg.com/originals/82/0d/37/820d37a0ce20936801b277b6e2acb0b2.jpg');
    background-size: cover;
	object-fit: contain;
	background-position: center center;
	color: white;
`;

const Gradient = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	z-index: 1;
	background: rgba(0,0,0,0.4);
	background-image: linear-gradient(
		to top,
		rgba(0,0,0,0.8) 0,
		rgba(0,0,0,0) 60%,
		rgba(0,0,0,0.8) 100%
	)
`;

const Body = styled.div`
		z-index: 1;
		padding: 20px;
		text-align: center;
`;
