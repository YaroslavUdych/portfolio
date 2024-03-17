import { NavLink } from 'react-router-dom'
import ThemeSwitcher from './UI/ThemeSwitcher'
import BurgerMenu from './UI/BurgerMenu'

const Header = function ({ onThemeChange, parentRef }) {
	return (
		<header>
			<NavLink className="navlink-header" to="/">
				Web_Developer
			</NavLink>
			<BurgerMenu parentRef={parentRef} />
			<ThemeSwitcher onChange={onThemeChange} />
		</header>
	)
}

export default Header
