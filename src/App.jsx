import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import {Layout} from './layout/Layout'
import { AuthPage } from './pages/AuthPage';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {auth} from './config/firebase'
import {logout, login, selectUser} from './features/user/userSlice'

function App ()
{
  const user = useSelector( selectUser )
  console.log(user)
  const dispatch = useDispatch()
  useEffect( () =>
{
    const unsubsecribe = auth.onAuthStateChanged( user =>
    {
      if ( user === null ) return dispatch(logout)
      dispatch( login( {
        uid: user.uid,
        email: user.email
      }))
    } )
    return unsubsecribe;
  }, [] )
  
  return (
      <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={<HomePage />} />
        <Route path='login' element={<AuthPage />} />
          </Route>
      </Routes>
  )
}

export default App
