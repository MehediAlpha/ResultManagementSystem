import React from 'react';

class TableData extends React.Component{


    render(){
        const {c_id, c_title, count} = this.props.course;
        return(
            <tr className="stripe-dark">
                <td className="f6 pa3 b">{c_id}</td>
                <td className="f6 pa3 b">{c_title}</td>
                <td className="f6 pa3 b">{count}</td>
                <td className="f6 pa3 b">
                    <input onClick={() => this.props.downloadPDF(c_id)} className="b pa2 ba b--orange bg-orange white grow pointer f5" type="button" value="Download"/>
                </td>
            </tr>
        )
    }
}

export default TableData;