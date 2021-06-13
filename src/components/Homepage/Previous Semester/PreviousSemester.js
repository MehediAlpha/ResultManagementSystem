import React, {Component} from 'react';
import ResultSearch from './Result Search/ResultSearch';
import ResultList from './ResultList'

const SampleData = [
    {
        semester : 'Spring 2020',
        courseNo: 'CSE 101',
        courseTitle: 'Computer Fundamentals',
        outOfThirty: 28,
        midterm: 28,
        final: 38,
        total: 94,
        grade: 'A+'
    },
    {
        semester : 'Spring 2020',
        courseNo: 'CSE 102',
        courseTitle: 'Computer Fundamentals Lab',
        outOfThirty: 25,
        midterm: 25,
        final: 30,
        total: 80,
        grade: 'A+'
    },
    {
        semester : 'Summer 2020',
        courseNo: 'CSE 201',
        courseTitle: 'Computer Programming',
        outOfThirty: 28,
        midterm: 28,
        final: 38,
        total: 94,
        grade: 'A+'
    },
    {
        semester : 'Summer 2020',
        courseNo: 'CSE 202',
        courseTitle: 'Computer Programming Lab',
        outOfThirty: 25,
        midterm: 25,
        final: 30,
        total: 80,
        grade: 'A+'
    }
]
  
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
            this.setState({resultList : data})
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
            return ( resultlist.semester.toLowerCase().includes(this.state.semester.toLowerCase()) &&
                resultlist.c_id.toLowerCase().includes(this.state.courseNo.toLowerCase()) &&
                resultlist.c_title.toLowerCase().includes(this.state.courseTitle.toLowerCase())
            );
        });
        return(
            <div>
                <h1>All Semester</h1>
                <ResultSearch changeSemester = {this.onChangeSemester} changeCourseNo = {this.onChangeCourseNo} changeCourseTitle = {this.onChangeCourseTitle}/>
                <ResultList result = {filteredUserList} />
            </div>
        )
    }
}

export default PreviousSemester;