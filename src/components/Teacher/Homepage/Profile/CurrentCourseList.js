import React from 'react';
import TableData from './TableData';


const CurrentCourseList = ({course , downloadPDF}) => {
	const resultlist = course.map((data, i) =>{
        return <TableData key={i} course = {course[i]} downloadPDF = {downloadPDF} />
    });

	return(
        <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                    <tr className="stripe-dark">
                        <th className="f5 pa3 bg-dark-gray white">Course Code</th>
                        <th className="f5 pa3 bg-dark-gray white">Course Title</th>
                        <th className="f5 pa3 bg-dark-gray white">Total Enroll</th>
                        <th className="f5 pa3 bg-dark-gray white">Download List</th>
                    </tr>
                </thead>
                <tbody className="lh-copy">
                    {resultlist}
                </tbody>
            </table>
        </div>
		
	);
}

export default CurrentCourseList;