import { useSelector } from "react-redux"
import { selectFilters } from "../filter/filter-slice"
import { selectVisiblePositions } from "./positions-slice"


export const usePositions = () => {
	const currentFitlers = useSelector(selectFilters)
	const positions = useSelector(state => selectVisiblePositions(state, currentFitlers))

	return positions
}
