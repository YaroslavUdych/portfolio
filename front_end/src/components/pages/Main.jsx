import Button from '../UI/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Main = function () {
	document.title = 'WebDev | Main'
	const titleElem = useRef(null)
	const textElem = useRef(null)
	const buttonElement = useRef(null)
	useGSAP(
		() => {
			gsap.to(titleElem.current, { duration: 0.2, delay: 0.1, opacity: 1, y: 0, ease: 'power1.inOut' })
			gsap.to(textElem.current, { duration: 0.2, delay: 0.2, opacity: 1, y: 0, ease: 'power1.inOut' })
			gsap.to(buttonElement.current, { duration: 0.2, delay: 0.3, opacity: 1, y: 0, ease: 'power1.inOut' })
		},
		{ trigger: titleElem.current }
	)

	return (
		<main className="paige-wrapper">
			<h1 ref={titleElem}>Welcome to my portfolio!</h1>
			<div className="text-wrapper" ref={textElem}>
				<p className="text">
					My passion for web development drives me, and I am always seeking new opportunities to grow and learn.
				</p>
				<p className="text text--margin-bottom" ref={textElem}>
					As a strong junior front-end developer with an understanding of the back-end, I am ready for the
					challenges of your business needs.
				</p>
			</div>
			<Button text="Hire me" path="/contacts" ref={buttonElement} />
		</main>
	)
}

export default Main
