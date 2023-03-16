import styled from 'styled-components'
const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100vw;
`

const Logo = styled.img`
	width: 150px;
	margin: 0 15px;
	cursor: pointer;
`
const Avatar = styled.img`
	width: 50px;
	margin: 0 15px;
	cursor: pointer;
`

export const Navigation = () =>
{
	
  return (
	  <Navbar>
		  <Logo src='https://th.bing.com/th/id/R.9f316495a8a8657ffa47ee68703ffaf3?rik=dYC1FMGLhnRWvA&pid=ImgRaw&r=0' />
		  <Avatar src='https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0' />
	</Navbar>
  )
}
