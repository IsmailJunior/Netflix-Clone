import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import {ProfilePage} from './pages/ProfilePage'
import {Layout} from './layout/Layout'
import { AuthPage } from './pages/AuthPage';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {auth} from './config/firebase'
import { logout, login, selectUser, selectStatus } from './features/user/userSlice'

function App ()
{
  const user = useSelector( selectUser );
  const status = useSelector(selectStatus)
  console.log( user );
  const dispatch = useDispatch();
  useEffect( () =>
  {
    const unsubsecribe = auth.onAuthStateChanged( user =>
    {
      if ( !user ) return dispatch( logout() );
      dispatch( login( {
        uid: user.uid,
        email: user.email
      } ) );
    } );
    return unsubsecribe;
  }, [dispatch] );
  
  return (
      <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <HomePage /> } />
            <Route path={!user ? 'login' : 'profile'} element={ !user ? <AuthPage/> : <ProfilePage />} />
          </Route>
      </Routes>
  )
}

export default App
