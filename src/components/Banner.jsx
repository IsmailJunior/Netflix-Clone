import styled from 'styled-components'
export const Banner = () =>
{
	
	const truncate = (string, number) => {
	  return string?.length > number ? string.substr(0, number - 1) + ' ...' : string
	}
	
  return (
	  <>
		  <Header>
			  <Container>
				  <Content>
					<Title>Movie Name</Title>
					  <Button>Play</Button>
					  <Button>My List</Button>
					  <Description>
						  { truncate( `Hi guys whasokdspkcddcslckdmds
						  Hi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmds
						  Hi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmds
						  Hi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmds
						  Hi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmds
						  Hi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmdsHi guys whasokdspkcddcslckdmds
						 `, 100) }
					  </Description>
				  </Content>
			  </Container>
			  <Fade />
		</Header>
	  </>
  )
}

const Header = styled.header`
	position: relative;
	height: 400px;
	background-image: url('https://i.ytimg.com/vi/11DLps70XSU/maxresdefault.jpg');
	background-repeat:no-repeat;
    background-size: cover;
	object-fit: contain;
	background-position: center center;
	width: 100vw;
	color: white;
`;

const Container = styled.div`
	margin-left: 20px;
	padding-top: 140px;
	height: 190px;
`

const Content = styled.div`

`

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	padding-bottom: 0.3rem;
`;

const Description = styled.h1`
	width: 45rem;
	line-height: 1rem;
	padding-top: 1rem;
	font-size: 0.8rem;
	max-width: 360px;
	height: 80px;
`

const Button = styled.button`
	cursor: pointer;
	color: white;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 0.2vw;
	padding: 0.5rem 2rem;
	margin-right: 1rem;
	background-color: rgba(51,51,51,0.5);

	&:hover {
		color: #000;
		background-color: #e6e6e6;
		transition: all 200ms;
	}

`;

const Fade = styled.div`
	height: 4.5rem;
	background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`;
