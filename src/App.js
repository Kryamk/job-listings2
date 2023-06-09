import React from 'react';
import Header from './components/Header';
import FilterPanel from './features/filter/FilterPanel';
import JobList from './features/positions/JobList';

function App() {


	return (
		<>
			<Header />
			<div className='container'>
				<FilterPanel />
				<JobList />
			</div>
		</>
	);
}

export default App;
