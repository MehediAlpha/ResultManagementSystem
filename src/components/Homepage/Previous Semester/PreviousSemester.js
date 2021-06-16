import React, {Component} from 'react';
import ResultSearch from './Result Search/ResultSearch';
import ResultList from './ResultList'
  
class PreviousSemester extends Component {
    
    constructor(){
        super();
        fetch('http://localhost:3001/semesterresult', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            console.log(data);
            this.setState({resultList : data})
            console.log('2');
		});
        this.state = {
            resultList : [],
                 semester: '',
            courseNo: '', 
            courseTitle: ''
        }
    }
    onChangeSemester = (event) =>{
		this.setState({semester: event.target.value});
		console.log(this.state.semester);
	}
	onChangeCourseNo = (event) =>{
		this.setState({courseNo: event.target.value});
		console.log(event.target.value);
	}
    onChangeCourseTitle = (event) =>{
		this.setState({courseTitle: event.target.value});
		console.log(event.target.value);
	}

    render(){
        
        let filteredUserList = this.state.resultList.filter(resultlist =>{
            console.log('a ' + this.state.resultList);      
            return (  
                            resultlist.semester.toLowerCase().includes(this.state.semester.toLowerCase()) &&
                            resultlist.c_id.toLowerCase().includes(this.state.courseNo.toLowerCase()) &&
                            resultlist.c_title.toLowerCase().includes(this.state.courseTitle.toLowerCase())
                        );

        });

        return(
            <div className="pa3">
                <h1>All Semester</h1>
                <ResultSearch changeSemester = {this.onChangeSemester} changeCourseNo = {this.onChangeCourseNo} changeCourseTitle = {this.onChangeCourseTitle}/>
                <ResultList result = {filteredUserList} />
            </div>
        )
    }
}

export default PreviousSemester;