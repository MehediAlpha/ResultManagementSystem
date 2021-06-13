import React from 'react';

class ResultData extends React.Component{

    gradeGenerator = (a, b, c) => {
        if (a+b+c >= 80){
            return 'A+';
        }
        else if (a+b+c >= 75){
            return 'A';
        }
        else if (a+b+c >= 70){
            return 'A-';
        }
        else if (a+b+c >= 65){
            return 'B+';
        }
        else if (a+b+c >= 60){
            return 'B+';
        }
        else if (a+b+c >= 55){
            return 'B-';
        }
        else if (a+b+c >= 50){
            return 'C+';
        }
        else if (a+b+c >= 45){
            return 'C';
        }
        else if (a+b+c >= 40){
            return 'D';
        }
        else {
            return 'F';
        }
        
    }

    render(){
        const {c_id, c_title, thirty, mid, final, t_name} = this.props.result;
        return(
            <tr className="stripe-dark">
                <td className="f6 pa3 b">{c_id}</td>
                <td className="f6 pa3 b">{c_title}</td>
                <td className="f6 pa3 b">{thirty}</td>
                <td className="f6 pa3 b">{mid}</td>
                <td className="f6 pa3 b">{final}</td>
                <td className="f6 pa3 b">{mid+thirty+final}</td>
                <td className="f6 pa3 b">{this.gradeGenerator(thirty, mid, final)}</td>
                <td className="f6 pa3 b">{t_name}</td>
            </tr>
        )
    }
}

export default ResultData;