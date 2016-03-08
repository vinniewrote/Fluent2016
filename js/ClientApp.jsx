const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter
const data = require('../public/data')
//destructuring - deeper dive needed ^^^

class App extends React.component {
  assignShow (nextState, replace) {
    const show = data.shows[nextState.params.id]
    if (!show){
      return replace('/')
    }
    Object.assign(nextState.params, show)
    return nextState
  }
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} />
        <Route path = '/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
