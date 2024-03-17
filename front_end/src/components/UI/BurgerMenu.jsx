import './BurgerMenu.css'
import { useRef } from 'react'

const BurgerMenu = function ({ parentRef }) {
	const burgerMenuElement = useRef(null)
	const clickHandler = () => {
		burgerMenuElement.current.classList.toggle('active')
		let mobileNavlinksList = Array.from(parentRef.current.children).find((child) =>
			child.classList.contains('mobile-navlinks-list')
		)
		mobileNavlinksList.classList.toggle('mobile-menu-visible')
	}

	return (
		<div className="burger-menu-wrapper">
			<div className="burger-menu-btn" ref={burgerMenuElement} onClick={clickHandler}>
				<span></span>
			</div>
		</div>
	)
}

export default BurgerMenu
