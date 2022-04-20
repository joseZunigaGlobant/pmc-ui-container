import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <div>Cryptos ✨🤑</div>
        </Link>
      </div>
      <Link to="/cryptos">Cryptos price</Link>
    </div>
  )
}

export default Header
