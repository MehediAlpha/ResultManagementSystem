import React from 'react';
import CurrentResultList from './CurrentResultList';

class CurrentSemester extends React.Component {
    
    constructor(){
        super();
        fetch('http://localhost:3001/currentsemesterresult', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({info : data})
		});
        
        this.state = {
            info : []
        }
        
    }
    
    render(){
        return(
            <div>
                <h1 className="b f2">Current Semester</h1>
                <h3 className="b">Spring 2021</h3>
                    <div className="pa2">
                         <CurrentResultList result = {this.state.info}/>
                    </div>
            </div>
        )
    }
    
}

export default CurrentSemester;