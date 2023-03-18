import styled from 'styled-components'
export const LoginPage = () => {
  return (
	  <Container>
		  <Section>
			  <Background>
				  <Gradient>
				  <Body>
					  <>
						<Heading>Unlimited films, TV programes and more.</Heading>
							  <Title>Watch anywhere. Cancel at any time.</Title>
							  <Description>Ready to watch? Enter your email to create or restart your membership.</Description>
							  <Control>
								  <Form>
									  <Input type='email' placeholder='Email Address' />
									  <Button type='button'>GET STARTED</Button>
								  </Form>
							</Control>
					  </>
				  </Body>
				  </Gradient>
			  </Background>
		  </Section>
	</Container>
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