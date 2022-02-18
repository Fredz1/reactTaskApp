import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useNavigate to direct users after login
  const navigate = useNavigate()

  /* 
    @desc: if user is valid send them to dashboard else alert them to incorrect details entered
  */
  const login = async () => {
    const { data } = await axios.post(
      '/api/user/login',
      {
        email,
        password
      }
    )
    // request returns truethy or falsey
    data? navigate('/taskDashboard') : alert('login failed.  Please try again')
  }


  return (
    <div className="loginPage">
      <div className="loginContainer">

        <h1 className="loginPageHeading">Login</h1>

        <input label='email' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        <input label='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>

        <button className="buttonStyle" onClick={() => login()}>Login</button>

        <div className="loginLinks">&rarr;<Link to='/Register'>Register</Link>&larr; &rarr;<Link to='/'>Home</Link>&larr;</div>

      </div>
    </div>
  )
}

export default Login
