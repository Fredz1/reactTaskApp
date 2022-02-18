import './App.css'
import MainTasks from './Screens/MainTasks'
import HomePage from './Screens/HomePage'

import Login from './components/Login'
import Register from './components/Register'

import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
      <div className="App">
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />}/> 
          <Route path='taskDashboard' element={<MainTasks />}/>
        </Routes>
      </div>
  )
}

export default App
