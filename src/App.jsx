import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import {Layout} from './layout/Layout'
import { LoginPage } from './pages/LoginPage';
function App() {

  return (
      <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
          </Route>
      </Routes>
  )
}

export default App
