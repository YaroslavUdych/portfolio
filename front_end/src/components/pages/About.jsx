import { useRef } from 'react'

import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Button from '../UI/Button'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import CV from '../../files/UDYCH_YAROSLAV_FrontEndDev_CV.pdf'

const About = function () {
	document.title = 'WebDev | About'
	const titleElem = useRef(null)
	const textElem = useRef(null)
	const buttonElement = useRef(null)
	useGSAP(
		() => {
			gsap.to(titleElem.current, { duration: 0.2, delay: 0.1, opacity: 1, y: 0, ease: 'power1.inOut' })
			gsap.to(textElem.current, { duration: 0.2, delay: 0.2, opacity: 1, y: 0, ease: 'power1.inOut' })
			gsap.to('.button-elem', { duration: 0.2, delay: 0.3, opacity: 1, y: 0, ease: 'power1.inOut' })
		},
		{ trigger: titleElem.current }
	)

	const downloadHandler = () => {
		const link = document.createElement('a')
		link.download = 'UDYCH YAROSLAV FrontEndDev CV'
		link.href = CV
		link.click()
	}

	return (
		<section className="paige-wrapper">
			<h2 ref={titleElem}>Hi, my name is Yaroslav</h2>
			<div className="text-wrapper" ref={textElem}>
				<p className="text">
					Although I have not yet had the opportunity to work commercially in the field of web development, my
					knowledge and skills allow me to create interesting projects.
					<br /> During my studies, I actively worked on my own projects, which allowed me to secure theoretical
					knowledge on practice.
				</p>
				<p className="text text--margin-bottom" ref={textElem}>
					The main feature is the ability to quickly learn and apply knowledge in practice
				</p>
			</div>
			<Button text="Download CV" ref={buttonElement} icon={<FileDownloadIcon />} onClick={downloadHandler} />
		</section>
	)
}

export default About
