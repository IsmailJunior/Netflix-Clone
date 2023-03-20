import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {register, signIn, selectUser, selectStatus} from '../features/user/userSlice'
import styled from 'styled-components'


export const SignUp = () =>
{
	const navigate = useNavigate();
	const user = useSelector( selectUser )
	const status = useSelector(selectStatus)
	const dispatch = useDispatch();
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const onEmailChangedHandler = (e) => setEmail(e.target.value)
	const onPasswordChangedHandler = (e) => setPassword(e.target.value)
	
	const canSave = [email, password].every(Boolean)

	const registerHandler = (event) =>
	{
		event.preventDefault();
		if ( !canSave ) return
		dispatch( register( { email: email, password: password } ) )
		setEmail( ' ' )
		setPassword( ' ' )
		navigate('/')
	}

	const loginHandler = (event) =>
	{
		event.preventDefault();
		if ( !canSave ) return
		dispatch( signIn( { email: email, password: password } ) )
		setEmail( '' )
		setPassword( '' )
		navigate('/')
	}

  return (
		  <Control>
			  <Form>
				  <Heading>Sign In</Heading>
				  <Input value={email} onChange={onEmailChangedHandler} type='email' placeholder='Email' />
				  <Input value={password} password={password} onChange={onPasswordChangedHandler}  type='password' placeholder='Password' />
			  <Button type='submit' onClick={loginHandler}>Sign In</Button>
			  <Subtitle>
				  <Monotitle>New to Netflix? </Monotitle>
				  <Link onClick={registerHandler}>Sign Up now.</Link>
			  </Subtitle>
			  </Form>
		  </Control>
  )
}


const Control = styled.div`
	max-width: 300px;
	padding: 70px;
	margin: 0 auto;
	background: rgba(0,0,0,0.85)
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	height: 40px;
	margin-bottom: 20px;
	width: 200px;
	max-width: 600px;
	border: none;
	padding: 5px 15px;
	border-radius: 5px;
	outline: none;
`;

const Button = styled.button`
	border: none;
	color: #fff;
	padding: 16px 20px;
	font-size: 1rem;
	border-radius: 5px;
	background-color: #e50914;
	cursor: pointer;
	font-weight: 600;
	margin-bottom: 20px;
`;

const Heading = styled.h1`
	font-size: 2rem;
	text-align: left;
	margin-bottom: 25px;
`;

const Subtitle = styled.h4`

`;

const Monotitle = styled.span`
	color: gray;
`;

const Link = styled.span`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;