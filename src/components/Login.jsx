import styled from 'styled-components'

export const Login = ({loginHandler}) =>
{
  return (
		 
					  <>
						<Heading>Unlimited films, TV programes and more.</Heading>
							  <Title>Watch anywhere. Cancel at any time.</Title>
							  <Description>Ready to watch? Enter your email to create or restart your membership.</Description>
							  <Control>
								  <Form>
									  <Input type='email' placeholder='Email Address' />
									  <Button onClick={loginHandler} type='button'>GET STARTED</Button>
								  </Form>
							</Control>
					  </>
  )
}



const Heading = styled.h1`
		font-size: 3.125rem;
		margin-bottom: 20px;
`;

const Title = styled.h2`
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 30px;
`;

const Description = styled.h3`
		font-size: 1.3rem;
		font-weight: 400;
`;

const Control = styled.div`
		margin: 20px;
`;

const Input = styled.input`
		padding: 10px;
		outline-width: 0;
		height: 30px;
		width: 30%;
		border: none;
		max-width: 600px;
`

const Button = styled.button`
		padding: 15.8px 20px;
		font-size: 1rem;
		color: #fff;
		background-color: #e50914;
		border: none;
		cursor: pointer;
`;

const Form = styled.form`
		display: flex;
		align-items:center;
		justify-content: center;
`;
