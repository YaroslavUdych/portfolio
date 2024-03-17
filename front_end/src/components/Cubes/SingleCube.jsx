import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const SingleCube = ({ svg, animation }) => {
	const cubeRef = useRef(null)

	useGSAP(
		() => {
			gsap.fromTo(cubeRef.current, ...animation)
		},
		{ scope: cubeRef }
	)

	return (
		<div className="cube" ref={cubeRef}>
			{svg}
		</div>
	)
}

export default SingleCube
