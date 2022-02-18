import {Link} from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div>
      
      If you are not yet logged-in
      Please login here: <Link to={'/login'}>login</Link>

    </div>
  )
}

export default LoginScreen
