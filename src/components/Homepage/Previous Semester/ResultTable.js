import React from 'react';

class ResultTable extends React.Component {
    
	render(){
	const {semester, courseNo, courseTitle, outOfThirty, midterm, final, total, grade} = this.props.result;

	return(
        <tr className="stripe-dark">
            <td className="f6 pa3 b">{semester}</td>
            <td className="f6 pa3 b">{courseNo}</td>
            <td className="f6 pa3 b">{courseTitle}</td>
            <td className="f6 pa3 b">{outOfThirty}</td>
            <td className="f6 pa3 b">{midterm}</td>
            <td className="f6 pa3 b">{final}</td>
            <td className="f6 pa3 b">{total}</td>
            <td className="f6 pa3 b">{grade}</td>
        </tr>
	);
	}
	
}

export default ResultTable;