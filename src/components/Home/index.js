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
        <p>Millions of people are searching for jobs</p>
        <Link to="/jobs">
          <button type="button">Find Jobs</button>
        </Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          alt="website logo"
        />
      </div>
    </>
  )
}

export default Home
