import { NavLink } from 'react-router-dom'
import './Button.css'
import { forwardRef } from 'react'

const Button = forwardRef(({ text, icon, type, path, onClick, ...rest }, ref) => {
	return (
		<NavLink className="button-elem" to={path} ref={ref} {...rest}>
			<button className="button" onClick={onClick} type={type}>
				<span>{icon}</span> {text}
			</button>
		</NavLink>
	)
})

export default Button
