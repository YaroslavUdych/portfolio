import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = function () {
	return (
		<footer>
			<IconButton href="https://github.com/YaroslavUdych" target="_blank" rel="noopener noreferrer" color="primary">
				<GitHubIcon className="social-link" sx={{ width: '28px', height: '28px' }} />
			</IconButton>
			<IconButton
				href="https://www.linkedin.com/in/udych-yaroslav/"
				target="_blank"
				rel="noopener noreferrer"
				color="primary"
			>
				<LinkedInIcon className="social-link" sx={{ width: '28px', height: '28px' }} />
			</IconButton>
			<IconButton
				href="https://www.facebook.com/yaroslav.udych/"
				target="_blank"
				rel="noopener noreferrer"
				color="primary"
			>
				<FacebookIcon className="social-link" sx={{ width: '28px', height: '28px' }} />
			</IconButton>
			<IconButton
				href="https://www.instagram.com/yaroslav_div/"
				target="_blank"
				rel="noopener noreferrer"
				color="primary"
			>
				<InstagramIcon className="social-link" sx={{ width: '28px', height: '28px' }} />
			</IconButton>
		</footer>
	)
}

export default Footer
