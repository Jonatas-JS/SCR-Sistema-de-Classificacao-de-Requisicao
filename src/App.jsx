import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'
import RegistrationPage from './pages/registration/RegistrationPage'
import RequestPage from './pages/request/RequestPage'
import FormPage from './pages/form/FormPage'
import DashboardPage from './pages/dashboard/DashboardPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={(<LoginPage />)} />
          <Route path='/home' element={(<HomePage />)} />
          <Route path='/registration' element={(<RegistrationPage />)} />
          <Route path='/request' element={(<RequestPage />)} />
          <Route path='/form-page' element={(<FormPage />)} />
          <Route path='/dashboard' element={(<DashboardPage />)} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
