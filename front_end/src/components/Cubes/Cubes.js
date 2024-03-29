const Cubes = [
	{
		svg: (
			<svg className="cube-1" viewBox="0 0 181.3 149.5">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path fill="url(#grad1)" d="M124.3 0l57 72.4-53 75.1-57-72.4 53-75.1z"></path>
				<path fill="url(#grad2)" d="M128.3 147.5l-71.4 2.1-57-72.4 71.4-2.1 57 72.4z"></path>
				<path fill="url(#grad3)" d="M71.3 75.1L-.1 77.2l53-75.1L124.3 0l-53 75.1z"></path>
			</svg>
		),
		animation: [
			{
				bottom: '5%',
				right: '5%',
			},
			{
				bottom: '50%',
				right: '55%',
				duration: 50,
				repeat: -1,
				yoyo: true,
			},
		],
	},
	{
		svg: (
			<svg className="cube-2" viewBox="0 0 34.85 32.07">
				<defs>
					<linearGradient id="grad1-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad2-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad3-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path fill="url(#grad1-2)" d="M8.78.24,28.9,0l6,19.18-20.12.24Z"></path>
				<path fill="url(#grad2-2)" d="M34.85,19.18,25.72,31.83l-20.13.24,9.14-12.65Z"></path>
				<path fill="url(#grad3-2)" d="M14.73,19.42,5.94,31.71,0,12.53,8.78.24Z"></path>
			</svg>
		),
		animation: [
			{
				top: '3%',
				left: '3%',
			},
			{
				top: '90%',
				left: '8%',
				duration: 25,
				repeat: -1,
				yoyo: true,
				ease: 'power4.inOut',
			},
		],
	},
	{
		svg: (
			<svg className="cube-3" viewBox="0 0 22 25" fill="none">
				<path
					d="M8.89 0C9.1664 0.0889045 9.43417 0.202701 9.69 0.339996L11.92 1.42L20.01 5.42H20.1V5.64C20.58 8.44 21.1 11.64 21.7 15.1V15.22L21.62 15.31L12.93 24.31L12.8 24.45L12.63 24.37L1.63 18.72L1.52 18.66V18.54C0.960004 15.06 0.45 11.87 0 9.06V8.96L0.0700073 8.89L6.46001 2.34L8.24001 0.580002C8.43232 0.361 8.65059 0.166231 8.89 0C8.71764 0.234636 8.52705 0.455315 8.32001 0.659996L6.62001 2.5L0.330002 9.1L0.389999 8.93C0.859999 11.73 1.39001 14.93 1.99001 18.39L1.86 18.22L12.86 23.83H12.56L21.27 14.88C21.27 14.95 21.27 15.03 21.21 15.09L19.72 5.64L19.82 5.78L11.82 1.59L9.63 0.409996C9.3738 0.291305 9.12648 0.154287 8.89 0Z"
					fill="#8786EB"
				></path>
				<path
					d="M1.75 18.43C2.38962 17.5577 3.0986 16.7383 3.87001 15.98C5.23001 14.51 7.13 12.51 9.25 10.32L10.25 9.32001C10.2327 9.39512 10.2093 9.4687 10.18 9.54001C9.75001 6.87001 9.39001 4.54001 9.18001 2.79001C9.00021 1.88422 8.90646 0.963451 8.90001 0.0400085C9.18186 0.91767 9.38926 1.81751 9.52 2.73C9.84 4.42 10.26 6.73001 10.71 9.46001V9.59L10.62 9.68001L9.62001 10.68C7.49001 12.87 5.55 14.84 4.13 16.24C3.39651 17.0325 2.60062 17.7648 1.75 18.43Z"
					fill="#8786EB"
				></path>
				<path
					d="M10.46 9.46002C12.4063 10.1631 14.2897 11.0295 16.09 12.05C17.9694 12.8998 19.7756 13.9032 21.49 15.05C19.5399 14.3482 17.6531 13.4817 15.85 12.46C13.9708 11.6161 12.1675 10.6124 10.46 9.46002Z"
					fill="#8786EB"
				></path>
			</svg>
		),
		animation: [
			{
				top: '5%',
				right: '5%',
			},
			{
				top: '90%',
				right: '5%',
				duration: 28,
				repeat: -1,
				yoyo: true,
				ease: 'back.inOut(1.7)',
			},
		],
	},
	{
		svg: (
			<svg className="cube-4" viewBox="0 0 22.7 21">
				<path
					d="M17.84,0a4.38,4.38,0,0,1,.37.79l1,2.28,3.45,8.33.07.06-.14.17c-1.49,2.42-3.2,5.17-5,8.17l-.08.09-.12,0L4.86,21l-.19,0-.07-.18L0,9.33l0-.12.08-.09L5.18,1,5.25.91h.09L14.47.18,17,0a3.7,3.7,0,0,1,.88,0A4.34,4.34,0,0,1,17,.14L14.48.41,5.4,1.23l.16-.09c-1.49,2.42-3.2,5.18-5,8.18l0-.22L5.13,20.57l-.23-.2,12.45-1c-.05.06-.1.12-.18.12l5.1-8.09,0,.17L19,3.15,18.12.82a5.84,5.84,0,0,1-.28-.8Z"
					fill="#8786eb"
				></path>
				<path
					d="M.32,9.19a19.38,19.38,0,0,1,3.21-.45c2-.21,4.74-.46,7.78-.71l1.41-.1a.82.82,0,0,1-.2.12c1.44-2.29,2.7-4.28,3.7-5.74A14.13,14.13,0,0,1,17.82.06a16.7,16.7,0,0,1-1.31,2.43C15.64,4,14.43,6,13,8.34l-.08.1h-.13l-1.41.09c-3,.24-5.8.45-7.79.57a20.63,20.63,0,0,1-3.24.08Z"
					fill="#8786eb"
				></path>
				<path
					d="M12.79,8.17a38.19,38.19,0,0,1,2.53,5.66,37.33,37.33,0,0,1,2.08,5.82A36.86,36.86,0,0,1,14.87,14,35,35,0,0,1,12.79,8.17Z"
					fill="#8786eb"
				></path>
			</svg>
		),
		animation: [
			{
				top: '2%',
				left: '7%',
			},
			{
				top: '70%',
				left: '15%',
				duration: 20,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
			},
		],
	},
	{
		svg: (
			<svg className="cube-5" viewBox="0 0 22 25" fill="none">
				<path
					d="M8.89 0C9.1664 0.0889045 9.43417 0.202701 9.69 0.339996L11.92 1.42L20.01 5.42H20.1V5.64C20.58 8.44 21.1 11.64 21.7 15.1V15.22L21.62 15.31L12.93 24.31L12.8 24.45L12.63 24.37L1.63 18.72L1.52 18.66V18.54C0.960004 15.06 0.45 11.87 0 9.06V8.96L0.0700073 8.89L6.46001 2.34L8.24001 0.580002C8.43232 0.361 8.65059 0.166231 8.89 0C8.71764 0.234636 8.52705 0.455315 8.32001 0.659996L6.62001 2.5L0.330002 9.1L0.389999 8.93C0.859999 11.73 1.39001 14.93 1.99001 18.39L1.86 18.22L12.86 23.83H12.56L21.27 14.88C21.27 14.95 21.27 15.03 21.21 15.09L19.72 5.64L19.82 5.78L11.82 1.59L9.63 0.409996C9.3738 0.291305 9.12648 0.154287 8.89 0Z"
					fill="#8786EB"
				></path>
				<path
					d="M1.75 18.43C2.38962 17.5577 3.0986 16.7383 3.87001 15.98C5.23001 14.51 7.13 12.51 9.25 10.32L10.25 9.32001C10.2327 9.39512 10.2093 9.4687 10.18 9.54001C9.75001 6.87001 9.39001 4.54001 9.18001 2.79001C9.00021 1.88422 8.90646 0.963451 8.90001 0.0400085C9.18186 0.91767 9.38926 1.81751 9.52 2.73C9.84 4.42 10.26 6.73001 10.71 9.46001V9.59L10.62 9.68001L9.62001 10.68C7.49001 12.87 5.55 14.84 4.13 16.24C3.39651 17.0325 2.60062 17.7648 1.75 18.43Z"
					fill="#8786EB"
				></path>
				<path
					d="M10.46 9.46002C12.4063 10.1631 14.2897 11.0295 16.09 12.05C17.9694 12.8998 19.7756 13.9032 21.49 15.05C19.5399 14.3482 17.6531 13.4817 15.85 12.46C13.9708 11.6161 12.1675 10.6124 10.46 9.46002Z"
					fill="#8786EB"
				></path>
			</svg>
		),
		animation: [
			{
				top: '85%',
				left: '20%',
			},
			{
				top: '5%',
				left: '10%',
				duration: 30,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut',
			},
		],
	},
	{
		svg: (
			<svg className="cube-6" viewBox="0 0 22 25" fill="none">
				<path
					d="M8.89 0C9.1664 0.0889045 9.43417 0.202701 9.69 0.339996L11.92 1.42L20.01 5.42H20.1V5.64C20.58 8.44 21.1 11.64 21.7 15.1V15.22L21.62 15.31L12.93 24.31L12.8 24.45L12.63 24.37L1.63 18.72L1.52 18.66V18.54C0.960004 15.06 0.45 11.87 0 9.06V8.96L0.0700073 8.89L6.46001 2.34L8.24001 0.580002C8.43232 0.361 8.65059 0.166231 8.89 0C8.71764 0.234636 8.52705 0.455315 8.32001 0.659996L6.62001 2.5L0.330002 9.1L0.389999 8.93C0.859999 11.73 1.39001 14.93 1.99001 18.39L1.86 18.22L12.86 23.83H12.56L21.27 14.88C21.27 14.95 21.27 15.03 21.21 15.09L19.72 5.64L19.82 5.78L11.82 1.59L9.63 0.409996C9.3738 0.291305 9.12648 0.154287 8.89 0Z"
					fill="#8786EB"
				></path>
				<path
					d="M1.75 18.43C2.38962 17.5577 3.0986 16.7383 3.87001 15.98C5.23001 14.51 7.13 12.51 9.25 10.32L10.25 9.32001C10.2327 9.39512 10.2093 9.4687 10.18 9.54001C9.75001 6.87001 9.39001 4.54001 9.18001 2.79001C9.00021 1.88422 8.90646 0.963451 8.90001 0.0400085C9.18186 0.91767 9.38926 1.81751 9.52 2.73C9.84 4.42 10.26 6.73001 10.71 9.46001V9.59L10.62 9.68001L9.62001 10.68C7.49001 12.87 5.55 14.84 4.13 16.24C3.39651 17.0325 2.60062 17.7648 1.75 18.43Z"
					fill="#8786EB"
				></path>
				<path
					d="M10.46 9.46002C12.4063 10.1631 14.2897 11.0295 16.09 12.05C17.9694 12.8998 19.7756 13.9032 21.49 15.05C19.5399 14.3482 17.6531 13.4817 15.85 12.46C13.9708 11.6161 12.1675 10.6124 10.46 9.46002Z"
					fill="#8786EB"
				></path>
			</svg>
		),
		animation: [
			{
				top: '15%',
				left: '18%',
			},
			{
				top: '85%',
				left: '30%',
				duration: 14,
				repeat: -1,
				yoyo: true,
				ease: 'sine.out',
			},
		],
	},
	{
		svg: (
			<svg className="cube-7" viewBox="0 0 34.85 32.07">
				<defs>
					<linearGradient id="grad1-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad2-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#3d6aa0', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="grad3-2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: '#61aad6', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#82d2f9', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path fill="url(#grad1-2)" d="M8.78.24,28.9,0l6,19.18-20.12.24Z"></path>
				<path fill="url(#grad2-2)" d="M34.85,19.18,25.72,31.83l-20.13.24,9.14-12.65Z"></path>
				<path fill="url(#grad3-2)" d="M14.73,19.42,5.94,31.71,0,12.53,8.78.24Z"></path>
			</svg>
		),
		animation: [
			{
				top: '15%',
				right: '30%',
			},
			{
				top: '30%',
				right: '10%',
				duration: 20,
				repeat: -1,
				yoyo: true,
			},
		],
	},
]

export default Cubes
