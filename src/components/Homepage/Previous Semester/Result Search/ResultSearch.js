import React from 'react';
import './resultsearch.css';

const ResultSearch = ({changeSemester, changeCourseNo, changeCourseTitle}) => {
	return(
		<div className="flexSystem pa3 shabow-5 white bg-dark-gray w-100 tc br3">
			<input className='box1 pa3 ba b--black bg-white br-3 black b ma2 tc' type ='search' 
				placeholder= 'Search Semester' onChange = {changeSemester} />
			<input className='box2 pa3 ba b--black bg-white br-3 black b ma2 tc' type ='Search' 
			placeholder= 'Search Course No' onChange = {changeCourseNo} />
			<input className='box3 pa3 ba b--black bg-white br-3 black b ma2 tc' type ='Search' 
			placeholder= 'Search Course Title' onChange = {changeCourseTitle} />
		</div>
	);
}

export default ResultSearch;