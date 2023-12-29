import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="bg-color">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of peoples are searching for jobs, salary information company
          reviews.Find a Job that fits your ability and potential.
        </p>
        <Link to="/jobs">
          <button type="button">Find Jobs</button>
        </Link>
      </div>
    </>
  )
}

export default Home
