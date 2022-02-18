import { Link } from "react-router-dom"

const SidePanel = ({ logout }) => {
  return (
    <div className="mainTasksSidePanel">

      <Link to='/'>
        <button  className="buttonStyle">
          Home
        </button>
      </Link>

      <button 
        className="buttonStyle" 
        onClick={() => logout()}
      >
        Logout
      </button>

    </div>
  )
}

export default SidePanel