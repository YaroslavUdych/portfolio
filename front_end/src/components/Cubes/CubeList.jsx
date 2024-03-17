import Cubes from './Cubes'
import SingleCube from './SingleCube'

const CubeList = function () {
	return (
		<>
			{Cubes.map((cube, index) => (
				<SingleCube key={index} svg={cube.svg} animation={cube.animation} />
			))}
		</>
	)
}

export default CubeList
