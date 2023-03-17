import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './app/store'
import {getTrending} from './features/moviesSlice'

store.dispatch( getTrending() )

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
        <Router>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes>
        </Router>
    </Provider>
)
