import React from 'react'
import { useRef, useState, useEffect } from 'react'

import Routing from './Routing'
import NavlinkList from './components/NavlinkList'
import MobileNavlinksList from './components/MobileNavlinksList'
import Header from './components/Header'
import Footer from './components/Footer'
import VerticalLines from './components/VerticalLines'
import CubeList from './components/Cubes/CubeList'

import './components/pages/Pages.css'

function App() {
	const appWrapperElement = useRef(null)
	const [isLightTheme, setLightTheme] = useState(false)

	useEffect(() => {
		isLightTheme
			? appWrapperElement.current.classList.add('light-theme')
			: appWrapperElement.current.classList.remove('light-theme')
	}, [isLightTheme])

	const handleThemeChange = () => {
		setLightTheme((prev) => !prev)
	}

	return (
		<div className="app-wrapper" ref={appWrapperElement}>
			<VerticalLines />
			<Header onThemeChange={handleThemeChange} parentRef={appWrapperElement} />
			<Routing />
			<NavlinkList />
			<MobileNavlinksList parentRef={appWrapperElement} />
			<Footer />
			<CubeList />
		</div>
	)
}

export default App
