const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        <h2 className='header-back'>
        <Link to='/search'>Back</Link>
        </h2>
      </header>
    )
  }
}

module.exports = Header
