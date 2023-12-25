import {Link} from 'react-router-dom'

const Header = props => (
  <nav>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
        alt="website logo "
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
      <button>Logout</button>
    </div>
  </nav>
)

export default Header
