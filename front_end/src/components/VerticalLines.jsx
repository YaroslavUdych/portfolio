const VerticalLines = function () {
	const spaceBetweenLines = 100 / 6

	return (
		<svg className="lines" height="100%" width="100%">
			<line x1={`${spaceBetweenLines}%`} y1="0" x2={`${spaceBetweenLines}%`} y2="100%" />
			<line x1={`${2 * spaceBetweenLines}%`} y1="0" x2={`${2 * spaceBetweenLines}%`} y2="100%" />
			<line x1={`${3 * spaceBetweenLines}%`} y1="0" x2={`${3 * spaceBetweenLines}%`} y2="100%" />
			<line x1={`${4 * spaceBetweenLines}%`} y1="0" x2={`${4 * spaceBetweenLines}%`} y2="100%" />
			<line x1={`${5 * spaceBetweenLines}%`} y1="0" x2={`${5 * spaceBetweenLines}%`} y2="100%" />
		</svg>
	)
}

export default VerticalLines
