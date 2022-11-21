import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import UserScreen from './screens//UserScreen'
import HomeScreen from './screens/HomeScreen'
import ProtectedRoute from './routing/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route element={<ProtectedRoute />}>
          <Route path='/users' element={<UserScreen />} />
          </Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App