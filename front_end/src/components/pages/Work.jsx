import './Work.css'
import Carousel from 'react-bootstrap/Carousel'

import returnt4Image from '../../files/walker_img.png'
import formValidProjectImg from '../../files/form-valid_img.png'
import weatherAppImg from '../../files/weather-app_img.png'
import porfolioImg from '../../files/portfolio_img.png'

import Button from '../UI/Button'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Work = function () {
	document.title = 'WebDev | Work'
	useGSAP(() => {
		gsap.to('.work-carousel', { duration: 0.7, x: 0, opacity: 1, ease: 'power2.out' })
	})

	return (
		<Carousel
			wrap={true}
			interval={null}
			nextIcon={<ArrowCircleRightIcon className="arrow-icon" style={{ fontSize: '50px' }} />}
			prevIcon={<ArrowCircleLeftIcon className="arrow-icon" style={{ fontSize: '50px' }} />}
		>
			<Carousel.Item>
				<div className="work-carousel">
					<div className="work-carousel__content">
						<h2 className="work-carousel__title">Portfolio</h2>
						<p className="work-carousel__text">A personal portfolio site with animations and a contact form</p>
						<p className="work-carousel__stack">React, Express, GSAP, CSS, Material UI</p>
					</div>
					<div className="work-carousel__image">
						<img src={porfolioImg} alt="First slide" />
					</div>
					<div className="work-carousel__buttons">
						<Button text="Discover" path="https://webdevelop.cz" target="_blank" rel="noreferrer" />
						<Button
							text="View code"
							path="https://github.com/YaroslavUdych/portfolio"
							target="_blank"
							rel="noreferrer"
						/>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="work-carousel">
					<div className="work-carousel__content">
						<h2 className="work-carousel__title">Walker</h2>
						<p className="work-carousel__text">
							A travel blog, with articles and travel routes where authenticated users can leave comments on
							routes
						</p>
						<p className="work-carousel__stack">React, Redux Toolkit, Strapi CMS, GSAP, CSS, Material UI</p>
					</div>
					<div className="work-carousel__image">
						<img src={returnt4Image} alt="First slide" />
					</div>
					<div className="work-carousel__buttons">
						<Button
							text="Discover"
							path="https://walker-shikj.ondigitalocean.app/"
							target="_blank"
							rel="noreferrer"
						/>
						<Button
							text="View code"
							path="https://github.com/YaroslavUdych/walker-react"
							target="_blank"
							rel="noreferrer"
						/>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="work-carousel">
					<div className="work-carousel__content">
						<h2 className="work-carousel__title">Form validation</h2>
						<p className="work-carousel__text">Form validation without libraries on the client side in React</p>
						<p className="work-carousel__stack">React, GSAP, CSS, Material UI</p>
					</div>
					<div className="work-carousel__image">
						<img src={formValidProjectImg} alt="First slide" />
					</div>
					<div className="work-carousel__buttons">
						<Button
							text="Discover"
							path="https://yaroslavudych.github.io/formvalidation"
							target="_blank"
							rel="noreferrer"
						/>
						<Button
							text="View code"
							path="https://github.com/YaroslavUdych/formvalidation"
							target="_blank"
							rel="noreferrer"
						/>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="work-carousel">
					<div className="work-carousel__content">
						<h2 className="work-carousel__title">Weather app</h2>
						<p className="work-carousel__text">
							The weather application, displaying the weather by geolocation, the ability to enter a city and
							autofill for cities in the Czech Republic
						</p>
						<p className="work-carousel__stack">Vanilla JS, CSS, HTML</p>
					</div>
					<div className="work-carousel__image">
						<img src={weatherAppImg} alt="First slide" />
					</div>
					<div className="work-carousel__buttons">
						<Button
							text="Discover"
							path="https://yaroslavudych.github.io/weather/"
							target="_blank"
							rel="noreferrer"
						/>
						<Button
							text="View code"
							path="https://github.com/YaroslavUdych/weather"
							target="_blank"
							rel="noreferrer"
						/>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	)
}

export default Work
