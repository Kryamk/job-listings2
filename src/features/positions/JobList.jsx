import React from 'react'
import { useDispatch } from 'react-redux'
import { addFilter } from '../filter/filter-slice'
import JobPosition from './JobPosition'
import { useFetchPositions } from './use-fetch-positions'
import { usePositions } from './use-positions'

function JobList() {
	useFetchPositions()

	const dispatch = useDispatch()
	const positions = usePositions()

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter))
	}


	return (
		<div className='job-list'>
			{positions.map(item => (
				<JobPosition
					key={item.id}
					handleAddFilter={handleAddFilter}
					{...item}
				/>
			))}
		</div>
	)
}

export default JobList
