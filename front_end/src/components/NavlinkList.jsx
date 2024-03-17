import { NavLink } from 'react-router-dom'

const NavlinkList = function () {
	return (
		<nav className="navlinks-wrapper main-navlinks">
			<NavLink className="navlink" to="/about">
				About
			</NavLink>
			<NavLink className="navlink" to="/work">
				Work
			</NavLink>
			<NavLink className="navlink" to="/skills">
				Skills
			</NavLink>
			<NavLink className="navlink" to="/contacts">
				Contacts
			</NavLink>
		</nav>
	)
}

export default NavlinkList
