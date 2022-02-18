import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="homePage">

      <div className="homeContainer">

        <div className="homeHeading">
          <h1 className="rotate">Simple</h1><h1> Tasks</h1>
        </div>

        <p>If you have already logged in previously</p>
        <p>
        &rarr; <Link to='/taskDashboard'>Go to Dashboard</Link> &larr;
        </p>

        <p>
          or
        </p>
        
        <p>
        &rarr; <Link to='/login'>Go to Login Page</Link> &larr;
        </p>

      </div>

    </div>
  )
}

export default HomePage
