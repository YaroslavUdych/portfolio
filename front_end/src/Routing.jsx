import { Routes, Route } from 'react-router-dom'

import Main from './components/pages/Main'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import Skills from './components/pages/Skills'
import Work from './components/pages/Work'
import PageNotFound from './components/pages/PageNotFound'

const Routing = function () {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/work" element={<Work />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	)
}

export default Routing
