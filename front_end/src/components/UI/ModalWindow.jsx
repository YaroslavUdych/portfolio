import { Modal, Box, Typography } from '@mui/material'
import './ModalWindow.css'

const ModalWindow = ({ open, onClose, title, message }) => {
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box className="box-container">
				<Typography id="modal-modal-title" variant="h7" component="h3" className="modal-title">
					{title}
				</Typography>
				<Typography id="modal-modal-description" sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
					{message}
				</Typography>
			</Box>
		</Modal>
	)
}

export default ModalWindow
