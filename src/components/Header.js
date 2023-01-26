import { Link } from "react-router-dom"

function Header(props) {
	return (
		<div className="header">
			<Link to="/">
			<div class="header__name two">
        <div class="neon">
            <h3>dotBEATS</h3>
        </div>
    </div>

			</Link>
		</div>
	)
}

export default Header
