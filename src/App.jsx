import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import {Layout} from './layout/Layout'
import { AuthPage } from './pages/AuthPage';
function App() {

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
