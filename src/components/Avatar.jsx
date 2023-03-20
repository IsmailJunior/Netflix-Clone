import styled from 'styled-components'

export const Avatar = ({width = '30px', marign = '0 15px', height}) =>
{
const avatar = 'https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0'
  return (
	  <>
		<Profile style={{width: width, height: height ,margin: marign}} src={ avatar } />
	  </>
  )
}

const Profile = styled.img`
	object-fit: contain;
	cursor: pointer;
`