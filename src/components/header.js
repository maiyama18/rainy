import React from 'react'
import { Link } from 'gatsby'

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
}

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{...linkStyle, fontSize: '3rem', fontFamily: 'Satisfy'}}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ fontWeight: 'normal', margin: 0 }}>
        <Link to="/" style={linkStyle}>
          home
        </Link>
        {' '} | {' '}
        <Link to="/about" style={linkStyle}>
          about
        </Link>
      </h4>
    </div>
  </div>
)

export default Header
