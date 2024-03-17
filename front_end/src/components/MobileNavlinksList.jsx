import './MobileNavlinksList.css'
import { NavLink } from 'react-router-dom'

const MobileNavlinksList = ({ parentRef }) => {
	const closeMobileMenu = () => {
		let mobileNavlinksList = Array.from(parentRef.current.children).find((child) =>
			child.classList.contains('mobile-navlinks-list')
		)
		mobileNavlinksList.classList.remove('mobile-menu-visible')

		let burgerMenu = Array.from(parentRef.current.children).find((child) => child.tagName === 'HEADER')
		if (burgerMenu) {
			burgerMenu = Array.from(burgerMenu.children).find((child) => child.classList.contains('burger-menu-wrapper'))
			burgerMenu = Array.from(burgerMenu.children).find((child) => child.classList.contains('burger-menu-btn'))
			burgerMenu.classList.remove('active')
		}
	}

	return (
		<div className="mobile-navlinks-list">
			<nav className="navlinks-wrapper">
				<NavLink className="navlink" to="/" onClick={closeMobileMenu}>
					Web_Developer
				</NavLink>
				<NavLink className="navlink" to="/about" onClick={closeMobileMenu}>
					About
				</NavLink>
				<NavLink className="navlink" to="/work" onClick={closeMobileMenu}>
					Work
				</NavLink>
				<NavLink className="navlink" to="/skills" onClick={closeMobileMenu}>
					Skills
				</NavLink>
				<NavLink className="navlink" to="/contacts" onClick={closeMobileMenu}>
					Contacts
				</NavLink>
			</nav>
		</div>
	)
}

export default MobileNavlinksList
