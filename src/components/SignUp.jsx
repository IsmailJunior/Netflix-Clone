import styled from 'styled-components'

export const SignUp = () => {
  return (
		  <Control>
			  <Form>
				  <Heading>Sign In</Heading>
				  <Input type='email' placeholder='Email' />
				  <Input type='password' placeholder='Password' />
			  <Button type='button'>Sign In</Button>
			  <Subtitle><Monotitle>New to Netflix?</Monotitle> Sign Up now.</Subtitle>
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