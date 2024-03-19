import { Link } from 'react-router-dom'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import './Contacts.css'
import ModalWindow from '../UI/ModalWindow'
import Loader from '../UI/Loader'

const Contacts = function () {
	document.title = 'WebDev | Contacts'
	const [loading, setLoading] = useState(false)
	const [buttonText, setButtonText] = useState('Get in touch')

	const contactsTitleElement = useRef(null)
	const inputNameElement = useRef(null)
	const inputEmailElement = useRef(null)
	const inputMessageElement = useRef(null)
	const contactsButtonElement = useRef(null)
	const nameLabel = useRef(null)
	const emaleLabel = useRef(null)
	const messageLabel = useRef(null)

	useGSAP(() => {
		gsap.to(contactsTitleElement.current, { duration: 0.3, y: 0, opacity: 1, ease: 'power2.out', delay: 0.1 })
		gsap.to(inputNameElement.current, { duration: 0.2, opacity: 1, width: '100%', ease: 'power2.out', delay: 0.3 })
		gsap.to(nameLabel.current, { duration: 0.2, opacity: 1, ease: 'power2.out', delay: 0.3 })
		gsap.to(inputEmailElement.current, { duration: 0.2, opacity: 1, width: '100%', ease: 'power2.out', delay: 0.4 })
		gsap.to(emaleLabel.current, { duration: 0.2, opacity: 1, ease: 'power2.out', delay: 0.4 })
		gsap.to(inputMessageElement.current, { duration: 0.2, opacity: 1, width: '100%', ease: 'power2.out', delay: 0.5 })
		gsap.to(messageLabel.current, { duration: 0.2, opacity: 1, ease: 'power2.out', delay: 0.5 })
		gsap.to(contactsButtonElement.current, { duration: 0.2, y: 0, opacity: 1, ease: 'power2.out', delay: 0.5 })
	})

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [modalOpen, setModalOpen] = useState(false)
	const [modalTitle, setModalTitle] = useState('')
	const [modalMessage, setModalMessage] = useState('')

	const closeModalHandler = () => {
		setModalOpen(false)
		setModalMessage('')
		setModalTitle('')
		inputNameElement.current.value = ''
		inputEmailElement.current.value = ''
		inputMessageElement.current.value = ''
		setFormData({ name: '', email: '', message: '' })
	}

	const submitHandler = (e) => {
		e.preventDefault()
		setLoading(true)
		setButtonText('Sending...')

		fetch('/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data)
				if (data.ok) {
					setModalTitle('✓')
					setModalMessage('Your message sent successfully! I will contact you as soon as possible. Thank you!')
					setLoading(false)
					setModalOpen(true)
				} else {
					setModalTitle('!')
					setModalMessage(
						'An error occurred while sending the message. I will fix it asap. You can contact me directly by email or phone. Thank you!'
					)
					setLoading(false)
					setModalOpen(true)
				}
				setButtonText('Get in touch')
			})
			.catch((error) => {
				console.log('Error: ', error)
				setModalTitle('!')
				setModalMessage(
					'An error occurred while sending the message. I will fix it asap. You can contact me directly by email or phone. Thank you!'
				)
				setLoading(false)
				setModalOpen(true)
				setButtonText('Get in touch')
			})
	}

	return (
		<section className="contacts-wrapper">
			{loading && <Loader />}
			<div className="contacts-body">
				<h2 className="contacts-title" ref={contactsTitleElement}>
					Let's work together
				</h2>
				<form className="contacts-form" onSubmit={submitHandler}>
					<div className="input-wrapper input-name">
						<input
							type="text"
							id="name"
							required
							ref={inputNameElement}
							onInput={() => {
								setFormData({ ...formData, name: inputNameElement.current.value })
							}}
						/>
						<label className="labelline" htmlFor="name" ref={nameLabel}>
							Name
						</label>
					</div>
					<div className="input-wrapper input-email">
						<input
							type="email"
							id="email"
							required
							ref={inputEmailElement}
							onInput={() => {
								setFormData({ ...formData, email: inputEmailElement.current.value })
							}}
						/>
						<label className="labelline" htmlFor="email" ref={emaleLabel}>
							Email
						</label>
					</div>
					<div className="input-wrapper input-message">
						<input
							type="text"
							id="message"
							required
							ref={inputMessageElement}
							onInput={() => {
								setFormData({ ...formData, message: inputMessageElement.current.value })
							}}
						/>
						<label className="labelline" htmlFor="message" ref={messageLabel}>
							What I need to know?
						</label>
					</div>
					<button ref={contactsButtonElement} className="button confetti-button" type="submit" disabled={loading}>
						{buttonText}
					</button>
				</form>
			</div>
			<div className="contacts-footer">
				<address>
					<div className="email">
						<p>Email:</p>
						<Link className="email-link" to="mailto:slayes13@gmail.com">
							slayes13@gmail.com
						</Link>
					</div>
					<div className="phone">
						<p>Phone:</p>
						<Link to="tel:+420775375078">+420 775 375 078</Link>
					</div>
				</address>
			</div>
			<ModalWindow open={modalOpen} onClose={closeModalHandler} title={modalTitle} message={modalMessage} />
		</section>
	)
}

export default Contacts
