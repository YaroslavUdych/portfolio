import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = function () {
	const navigate = useNavigate()
	const [countdown, setCountdown] = useState(5)

	useEffect(() => {
		const redirectTimer = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1)
		}, 1000)

		return () => {
			clearInterval(redirectTimer)
		}
	}, [])

	useEffect(() => {
		if (countdown === 0) {
			navigate('/')
		}
	}, [countdown, navigate])

	return (
		<div className="page-not-found-wrapper">
			<h3>This page does not exist</h3>
			<p>You will be redirected to the main page in {countdown} seconds.</p>
		</div>
	)
}

export default PageNotFound
