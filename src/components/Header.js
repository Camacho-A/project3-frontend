import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__name">DOTBEATS</div>
      </Link>
    </div>
  )
}

export default Header
