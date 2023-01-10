import './App.css'
import LoginPage from './pages/login/LoginPage'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <LoginPage />
      <BrowserRouter>
        <Route path='/' element={(<LoginPage />)} />
        <Route path='/home' element={(<HomePage />)} />
        <Route path='/registration'element={(<RegistrationPage />)} />
        <Route path='/request'element={(<RequestPage />)} />
      </BrowserRouter>
    </div>
  )
}

export default App
