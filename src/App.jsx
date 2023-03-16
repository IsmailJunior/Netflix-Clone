import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import {Layout} from './layout/Layout'
function App() {

  return (
      <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={HomePage} />
          
          </Route>
      </Routes>
  )
}

export default App