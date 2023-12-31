import {Route, Switch, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

const App = () => (
  //   <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
  //   </BrowserRouter>
)

export default App
