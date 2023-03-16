import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Layout = () => {
  return (
	  <>
		  <Navigation />
		  <h1>Header</h1>
		  <Outlet />
	  </>
  )
}
