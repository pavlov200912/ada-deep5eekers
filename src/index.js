import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
      // Add a basename to the Router for GitHub Pages
      <Router basename="/deep5eekers">
        <Switch>
          {/* Home route */}
          <Route component={Home} exact path="/" />

          {/* Catch-all route for 404 */}
          <Route component={NotFound} />

          {/* Redirect is not required for this setup */}
        </Switch>
      </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))