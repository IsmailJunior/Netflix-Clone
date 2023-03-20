import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../features/user/userSlice';
import styled from 'styled-components'
import {Avatar} from '../components/Avatar'

export const ProfilePage = () =>
{
	const dispatch = useDispatch()
	const user = useSelector( selectUser )
	const navigate = useNavigate();
	const logoutHandler = (event) =>
	{
		event.preventDefault()
		dispatch( logout() );
		navigate('/login')
	}

  return (
	  <>
		  <Container>
			  <Heading>Edit Profile</Heading>
			  <Group>
				  <Avatar width='100px' height='100px' marign='0' />
				  <Details>
					  <Title>{ user?.email }</Title>
					  <Plans>
						  <Subtitle>Plans</Subtitle>
						  <Button onClick={logoutHandler}>Sign Out</Button>
					  </Plans>
				  </Details>
			  </Group>
			</Container>
	  </>
  )
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 0 auto;
	max-width: 800px;
	padding-top 8%;
`;

const Group = styled.div`
	display: flex;
`;

const Details = styled.div`
	margin-left: 25px;
	flex: 1;
`;

const Plans = styled.div`
	margin-top: 20px;
`;

const Heading = styled.h1`
	font-size: 60px;
	font-weight: 400;
	border-bottom: 1px solid #282c2d;
	margin-bottom: 20px;
`;

const Title = styled.h2`
	background-color: gray;
	padding: 15px;
	font-size: 15px;
	padding-left: 20px;
`;

const Subtitle = styled.h3`
	border-bottom: 1px solid #282c2d;
	padding-bottom: 10px;
`

const Button = styled.button`
	padding: 10px 20px;
	font-size: 1rem;
	margin-top: 5%;
	width: 100%;
	color: #fff;
	background-color: #e50914;
	border: none;
	cursor: pointer;
`;