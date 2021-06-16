import React from 'react';

class ResultData extends React.Component{

    gradeGenerator = (grade) => {
        if (parseFloat(grade) === 4.00){
            return 'A+';
        }
        else if (parseFloat(grade) === 3.75){
            return 'A';
        }
        else if (parseFloat(grade) === 3.50){
            return 'A-';
        }
        else if (parseFloat(grade) === 3.25){
            return 'B+';
        }
        else if (parseFloat(grade) === 3.00){
            return 'B+';
        }
        else if (parseFloat(grade) === 2.75){
            return 'B-';
        }
        else if (parseFloat(grade) === 2.50){
            return 'C+';
        }
        else if (parseFloat(grade) === 2.25){
            return 'C';
        }
        else if (parseFloat(grade) === 2.00){
            return 'D';
        }
        else {
            return 'F';
        }
    }

    render(){
        const {c_id, c_title, thirty, mid, final, t_name, totalmark, grade} = this.props.result;
        return(
            <tr className="stripe-dark">
                <td className="f6 pa3 b">{c_id}</td>
                <td className="f6 pa3 b">{c_title}</td>
                <td className="f6 pa3 b">{thirty}</td>
                <td className="f6 pa3 b">{mid}</td>
                <td className="f6 pa3 b">{final}</td>
                <td className="f6 pa3 b">{totalmark}</td>
                <td className="f6 pa3 b">{this.gradeGenerator(grade)}</td>
                <td className="f6 pa3 b">{t_name}</td>
            </tr>
        )
    }
}

export default ResultData;