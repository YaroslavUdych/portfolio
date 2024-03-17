import './Skills.css'
import { Link } from 'react-router-dom'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import itgidJS2_0 from '../../files/itgidJS2_0.pdf'
import itgidFunctions from '../../files/itgidFunctions.pdf'
import itgidOOP from '../../files/itgidOOP.pdf'
import itgidArrMethods from '../../files/itgidArrMethods.pdf'
import itgidReact from '../../files/itgidReact.pdf'

const Skills = function () {
	document.title = 'WebDev | Skills'
	const skillsTitleElement = useRef(null)
	const coursesElement = useRef(null)
	const skillsElement = useRef(null)

	useGSAP(() => {
		gsap.to(skillsTitleElement.current, { duration: 0.5, y: 0, opacity: 1, ease: 'power2.out', delay: 0.1 })
		gsap.to(coursesElement.current.children, {
			duration: 0.5,
			y: 0,
			opacity: 1,
			ease: 'power2.out',
			stagger: 0.08,
			delay: 0.2,
		})
		gsap.to(skillsElement.current.children, {
			duration: 0.5,
			y: 0,
			opacity: 1,
			ease: 'power2.out',
			stagger: 0.08,
			delay: 0.7,
		})
	})

	return (
		<section className="skills-wrapper">
			<div className="skills-courses">
				<p className="skills-title" ref={skillsTitleElement}>
					Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself,
					and do interesting things that matter.
				</p>
				<ul className="skills-courses-list" ref={coursesElement}>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">
							Retraining course - Web application programmer - JavaScript
						</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itnetwork.cz / </p>{' '}
							<span style={{ fontSize: '0.8rem', alignSelf: 'flex-end', fontStyle: 'italic' }}>
								on the way to
							</span>
							<Link to="#" className="skills-courses-list-item__certeficate">
								certificate
							</Link>
						</div>
					</li>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">React JS</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itgid.info / </p>
							<Link
								to={itgidReact}
								className="skills-courses-list-item__certeficate"
								target="_blank"
								rel="noreferrer"
							>
								certificate
							</Link>
						</div>
					</li>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">Array methods in JS</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itgid.info / </p>
							<Link
								to={itgidArrMethods}
								className="skills-courses-list-item__certeficate"
								target="_blank"
								rel="noreferrer"
							>
								certificate
							</Link>
						</div>
					</li>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">OOP in JS</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itgid.info / </p>
							<Link
								to={itgidOOP}
								className="skills-courses-list-item__certeficate"
								target="_blank"
								rel="noreferrer"
							>
								certificate
							</Link>
						</div>
					</li>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">Functions in JS</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itgid.info / </p>
							<Link
								to={itgidFunctions}
								className="skills-courses-list-item__certeficate"
								target="_blank"
								rel="noreferrer"
							>
								certificate
							</Link>
						</div>
					</li>
					<li className="skills-courses-list-item">
						<p className="skills-courses-list-item__title">JavaScript 2.0</p>
						<div className="skills-courses-list-item-body">
							<p className="skills-courses-list-item__institution">itgid.info / </p>
							<Link
								to={itgidJS2_0}
								className="skills-courses-list-item__certeficate"
								target="_blank"
								rel="noreferrer"
							>
								certificate
							</Link>
						</div>
					</li>
				</ul>
			</div>
			<div className="skills-list">
				<ul ref={skillsElement}>
					<li>React</li>
					<li>JavaScript(ES5+)</li>
					<li>Redux, Redux Toolkit</li>
					<li>Node JS</li>
					<li>Mongo DB</li>
					<li>Git</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
		</section>
	)
}

export default Skills
