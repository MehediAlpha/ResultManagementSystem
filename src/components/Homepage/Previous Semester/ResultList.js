import React from 'react';
import ResultTable from './ResultTable';


const ResultList = ({result}) => {
	const resultlist = result.map((user, i) =>{
        return <ResultTable key={i} result = {result[i]}  />
    });

	return(
        <div className="overflow-auto br3">
            <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                    <tr className="stripe-dark">
                        <th className="f5 pa3 bg-dark-gray white">Semester</th>
                        <th className="f5 pa3 bg-dark-gray white">Course No</th>
                        <th className="f5 pa3 bg-dark-gray white">Course Title</th>
                        <th className="f5 pa3 bg-dark-gray white">Out of 30</th>
                        <th className="f5 pa3 bg-dark-gray white">Midterm</th>
                        <th className="f5 pa3 bg-dark-gray white">Final</th>
                        <th className="f5 pa3 bg-dark-gray white">Total</th>
                        <th className="f5 pa3 bg-dark-gray white">Grade</th>
                        <th className="f5 pa3 bg-dark-gray white">Course Teacher</th>
                    </tr>
                </thead>
                <tbody className="lh-copy">
                    {resultlist}
                </tbody>
            </table>
        </div>
		
	);
}

export default ResultList;