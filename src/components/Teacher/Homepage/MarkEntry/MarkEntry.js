import React from 'react';
import './markentry.css';

const IDListStudent = ({idList, changeStudentID}) => {
	const list = idList.map((data, i) =>{
        return [<option key={i}>{data}</option>]
    });

	return(
            <select onChange={changeStudentID} className="f6 f5 bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l">
                <option key="Select" >Select Student ID</option>
                {list}
            </select>
	);
};

const IDListCourse = ({idList, changeCourseId}) => {
	const list = idList.map((data, i) =>{
        return [<option key={i} value={data} >{data}</option>]
    });

	return(
            <select onChange={changeCourseId} className="f6 f5 bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l">
                <option key="Select">Select Course ID</option>
                {list}
            </select>
	);
};


class MarkEntry extends React.Component {
    
    constructor(){
        super();
        this.state = {
            S_ID: ['Select Course ID First', 'Select Course ID First', 'Select Course ID First', '. . .'],
            C_ID: ['Course-1 LOADING', 'Course-2 LOADING', 'Course-3 LOADING', '. . .'],
            name : 'name',
            intake : 'intake',
            section : 'section',
            c_id: 'Course Code',
            c_title: 'Course Title',
            OOT: 'Out of Thirty',
            MID: 'Midterm',
            FINAL: 'Final',
            CT:'',
            Assgn: '',
            Attdn: '',
            MidQ1: '',
            MidQ2: '',
            MidQ3: '',
            FinalQ1: '',
            FinalQ2: '',
            FinalQ3: '',
            FinalQ4: '',

            
            CTU: '',
            AssgnU: '',
            AttdnU: '',
            MidQ1U: '',
            MidQ2U: '',
            MidQ3U: '',
            FinalQ1U: '',
            FinalQ2U: '',
            FinalQ3U: '',
            FinalQ4U: '',
            course_id: ' ',
            student_id: ' '
        }
        

        fetch('http://localhost:3001/teacherCourseID', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({C_ID : data})
		});
        
    }

    onChangeCourseID = (event) =>{
        console.log(event.target.value);
        this.setState({course_id: event.target.value});
        fetch('http://localhost:3001/teacherStudentID', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				c_id : event.target.value
			})
		})
		.then(response => response.json())
		.then(data =>{
            if(data.length === 0){
                this.setState({S_ID: ['Select Course ID First', 'Select Course ID First', 'Select Course ID First', '. . .']});
            } else {
                this.setState({S_ID : data})
            }
			
		})
    }

    onChangeStudentID = (event) =>{
        console.log(event.target.value);
        this.setState({student_id: event.target.value});
        fetch('http://localhost:3001/teacherStudentInfo', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				c_id : this.state.course_id,
                s_id: event.target.value
			})
		})
		.then(response => response.json())
		.then(data =>{
            if(data === 'Error'){
                this.setState({name: 'Error Retriving Data'});
                this.setState({intake: 'Error Retriving Data'});
                this.setState({section: 'Error Retriving Data'});
                this.setState({OOT: 'Error Retriving Data'});
                this.setState({MID: 'Error Retriving Data'});
                this.setState({FINAL: 'Error Retriving Data'});
                this.setState({c_id: 'Error Retriving Data'});
                this.setState({c_title: 'Error Retriving Data'});
                this.setState({CT: 'Error Retriving Data'});
                this.setState({Assgn: 'Error Retriving Data'});
                this.setState({Attdn: 'Error Retriving Data'});
                this.setState({MidQ1: 'Error Retriving Data'});
                this.setState({MidQ2: 'Error Retriving Data'});
                this.setState({MidQ3: 'Error Retriving Data'});
                this.setState({FinalQ1: 'Error Retriving Data'});
                this.setState({FinalQ2: 'Error Retriving Data'});
                this.setState({FinalQ3: 'Error Retriving Data'});
                this.setState({FinalQ4: 'Error Retriving Data'});
            } else {
                //console.log(data);
                this.setState({name: data.s_name});
                this.setState({intake: data.s_intake});
                this.setState({section: data.s_section});
                this.setState({OOT: (data.ct + data.assgn + data.attdn)});
                this.setState({MID: (data.mid_q1 + data.mid_q2 + data.mid_q3)});
                this.setState({FINAL: (data.final_q1 + data.final_q2 + data.final_q3 + data.final_q4)});
                this.setState({CT: data.ct});
                this.setState({Assgn: data.assgn});
                this.setState({Attdn: data.attdn});
                this.setState({MidQ1: data.mid_q1});
                this.setState({MidQ2: data.mid_q2});
                this.setState({MidQ3: data.mid_q3});
                this.setState({FinalQ1: data.final_q1});
                this.setState({FinalQ2: data.final_q2});
                this.setState({FinalQ3: data.final_q3});
                this.setState({FinalQ4: data.final_q4});

                this.setState({CTU: data.ct});
                this.setState({AssgnU: data.assgn});
                this.setState({AttdnU: data.attdn});
                this.setState({MidQ1U: data.mid_q1});
                this.setState({MidQ2U: data.mid_q2});
                this.setState({MidQ3U: data.mid_q3});
                this.setState({FinalQ1U: data.final_q1});
                this.setState({FinalQ2U: data.final_q2});
                this.setState({FinalQ3U: data.final_q3});
                this.setState({FinalQ4U: data.final_q4});
                this.setState({c_id: data.c_id});
                this.setState({c_title: data.c_title});
            }
		})
    }

    onChangeCT = (event) => {
        this.setState({CTU: event.target.value});
    }
    onChangeAssignment = (event) => {
        this.setState({AssgnU: event.target.value});
    }
    onChangeAttendace = (event) => {
        this.setState({AttdnU: event.target.value});
    }
    onChangeMidtermOne = (event) => {
        this.setState({MidQ1U: event.target.value});
    }
    onChangeMidtermTwo = (event) => {
        this.setState({MidQ2U: event.target.value});
    }
    onChangeMidtermThree = (event) => {
        this.setState({MidQ3U: event.target.value});
    }
    onChangeFinalOne = (event) => {
        this.setState({FinalQ1U: event.target.value});
    }
    onChangeFinalTwo = (event) => {
        this.setState({FinalQ2U: event.target.value});
    }
    onChangeFinalThree = (event) => {
        this.setState({FinalQ3U: event.target.value});
    }
    onChangeFinalFour = (event) => {
        this.setState({FinalQ4U: event.target.value});
    }

    onSubmit = (event) => {
        console.log("Button Clicked");


        if (this.state.course_id === ' ') {
            alert("No Course Detected");
        }else if (this.state.student_id === ' ') {
            alert("No Student Detected");
        } else if (this.state.CTU.length === 0 ||
                    this.state.AssgnU.length === 0 ||
                    this.state.AttdnU.length === 0 ||
                    this.state.MidQ1U.length === 0 ||
                    this.state.MidQ2U.length === 0 ||
                    this.state.MidQ3U.length === 0 ||
                    this.state.FinalQ1U.length === 0 ||
                    this.state.FinalQ2U.length === 0 ||
                    this.state.FinalQ3U.length === 0 ||
                    this.state.FinalQ4U.length === 0 ){
            alert("Marks field cannot be empty");
        } else {

            fetch('http://localhost:3001/markUpdate', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				course_id : this.state.course_id,
                student_id : this.state.student_id,
                ct: this.state.CTU,
                assgn: this.state.AssgnU,
                attdn: this.state.AttdnU,
                mid_q1: this.state.MidQ1U,
                mid_q2: this.state.MidQ2U,
                mid_q3: this.state.MidQ3U,
                final_q1: this.state.FinalQ1U,
                final_q2: this.state.FinalQ2U,
                final_q3: this.state.FinalQ3U,
                final_q4: this.state.FinalQ4U
			})
		})
		.then(response => response.json())
		.then(data =>{
            if(data === 'Error'){
                alert("NOT Succed")
            } else {
                //console.log(data);
                alert("Successfully Done");
                //this.setState({S_ID: ['Select Course ID First', 'Select Course ID First', 'Select Course ID First', '. . .']});
                this.setState({name: 'name'});
                this.setState({intake: 'intake'});
                this.setState({section: 'section'});
                this.setState({OOT: 'Out of Thirty'});
                this.setState({MID: 'Midterm'});
                this.setState({FINAL: 'Final'});
                this.setState({CT: ''});
                this.setState({Assgn: ''});
                this.setState({Attdn: ''});
                this.setState({MidQ1: ''});
                this.setState({MidQ2: ''});
                this.setState({MidQ3: ''});
                this.setState({FinalQ1: ''});
                this.setState({FinalQ2: ''});
                this.setState({FinalQ3: ''});
                this.setState({FinalQ4: ''});
                this.setState({c_id: 'Course Code'});
                this.setState({c_title: 'Course Title'});


                this.setState({CTU: ''});
                this.setState({AssgnU: ''});
                this.setState({AttdnU: ''});
                this.setState({MidQ1U: ''});
                this.setState({MidQ2U: ''});
                this.setState({MidQ3U: ''});
                this.setState({FinalQ1U: ''});
                this.setState({FinalQ2U: ''});
                this.setState({FinalQ3U: ''});
                this.setState({FinalQ4U: ''});
            }
		})

        }
    }

    

    render(){
        const lineStyle = {
            height: '5px',
            backgroundColor: 'white'
        };

        return (

            // <div>
            //     <legend className="f1-l b">Marks Entry</legend>
            //     <p className="f4-l b dark-red">Page Under Construction</p>
            // </div>
            
            <div className="pa4-l body bg-light-gray">
                <form className="bg-light-red mw7 center pa4 br2-l ba b--black-10">
                    <fieldset className="cf bn ma0 pa0">
                        <legend className="pa0 f2-l b bg-black white">Marks Entry</legend>

                        <div>
                            <label className="tl b white fl f4-l  mt3">Course ID</label>
                            <IDListCourse idList = {this.state.C_ID} changeCourseId ={this.onChangeCourseID} /> 
                        </div>

                        <div>
                            <label className="tl b white fl f4-l  mt3">Student ID</label>
                            <IDListStudent idList = {this.state.S_ID} changeStudentID = {this.onChangeStudentID}/> 
                        </div>

                        <div className="row mt4 white">
                            <div className="col-sm-4">
                                <h5 className="underline f4-l  b">Name</h5>
                                <p className="f5-l b black">{this.state.name}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l  b">Intake</h5>
                                <p className="f5-l b black">{this.state.intake}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l  b">Section</h5>
                                <p className="f5-l b black">{this.state.section}</p>
                            </div>
                        </div>

                        <div className="row mt4 white">
                            <div className="col-sm-6">
                                <h5 className="underline f4-l  b">Course Code</h5>
                                <p className="f5-l b black">{this.state.c_id}</p>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="underline f4-l  b">Course Title</h5>
                                <p className="f5-l b black">{this.state.c_title}</p>
                            </div>
                        </div>

                        <hr style={lineStyle} />
                        <legend className="f2-l b white">Out of Thirty</legend>
                        <p className="f5-l b black">{this.state.OOT}</p>
                        <div className="row mt1 white">
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Class Test</h5>
                                <p className="f5-l b black">{this.state.CT}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Assignment</h5>
                                <p className="f5-l b black">{this.state.Assgn}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Attendance</h5>
                                <p className="f5-l b black">{this.state.Attdn}</p>
                            </div>
                        </div>

                        <hr style={lineStyle} />
                        <legend className="f2-l b white">Mid-Term</legend>
                        <p className="f5-l b black">{this.state.MID}</p>
                        <div className="row mt1 white">
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Set 1</h5>
                                <p className="f5-l b black">{this.state.MidQ1}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Set 2</h5>
                                <p className="f5-l b black">{this.state.MidQ2}</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="underline f4-l b">Set 3</h5>
                                <p className="f5-l b black">{this.state.MidQ3}</p>
                            </div>
                        </div>

                        <hr style={lineStyle} />
                        <legend className="f2-l b white">Final</legend>
                        <p className="f5-l b black">{this.state.FINAL}</p>
                        <div className="row mt1 white">
                            <div className="col-sm-3">
                                <h5 className="underline f4-l b">Set 1</h5>
                                <p className="f5-l b black">{this.state.FinalQ1}</p>
                            </div>
                            <div className="col-sm-3">
                                <h5 className="underline f4-l b">Set 2</h5>
                                <p className="f5-l b black">{this.state.FinalQ2}</p>
                            </div>
                            <div className="col-sm-3">
                                <h5 className="underline f4-l b">Set 3</h5>
                                <p className="f5-l b black">{this.state.FinalQ3}</p>
                            </div>
                            <div className="col-sm-3">
                                <h5 className="underline f4-l b">Set 4</h5>
                                <p className="f5-l b black">{this.state.FinalQ4}</p>
                            </div>
                        </div>
                        <hr style={lineStyle} />

                        <div className="cf">

                            <div className="row">
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Class Test</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Class Test" type="text" value={this.state.CTU} onChange = {this.onChangeCT} />
                                </div>
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Assignment</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Assignment" type="text" value={this.state.AssgnU} onChange = {this.onChangeAssignment} />
                                </div>
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Attendance</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Attendance" type="text" value={this.state.AttdnU} onChange = {this.onChangeAttendace} />
                                </div>
                            </div>

                            <div className="row mt3">
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Midterm Set-1</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Midterm Set-1" type="text" value={this.state.MidQ1U} onChange = {this.onChangeMidtermOne} />
                                </div>
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Midterm Set-2</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Midterm Set-2" type="text" value={this.state.MidQ2U} onChange = {this.onChangeMidtermTwo} />
                                </div>
                                <div className='col-md-4'>
                                    <label className="tl b white fl f4-l mt3">Midterm Set-3</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Midterm Set-3" type="text" value={this.state.MidQ3U} onChange = {this.onChangeMidtermThree} />
                                </div>
                            </div>

                            <div className="row mt3">
                                <div className='col-md-3'>
                                    <label className="tl b white fl f4-l mt3">Final Set-1</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Final Set-1" type="text" value={this.state.FinalQ1U} onChange = {this.onChangeFinalOne} />
                                </div>
                                <div className='col-md-3'>
                                    <label className="tl b white fl f4-l mt3">Final Set-2</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Final Set-2" type="text" value={this.state.FinalQ2U} onChange = {this.onChangeFinalTwo} />
                                </div>
                                <div className='col-md-3'>
                                    <label className="tl b white fl f4-l mt3">Final Set-3</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Final Set-3" type="text" value={this.state.FinalQ3U} onChange = {this.onChangeFinalThree} />
                                </div>
                                <div className='col-md-3'>
                                    <label className="tl b white fl f4-l mt3">Final Set-4</label>
                                    <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                                    placeholder="Final Set-4" type="text" value={this.state.FinalQ4U} onChange = {this.onChangeFinalFour} />
                                </div>
                            </div>
                            <hr style={lineStyle} className="mt4"/>

                            

                            {/* <label className="tl b white fl f4-l mt3">Out of Thirty</label>
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                            placeholder="Out of Thirty" type="text" value={this.state.OOTU} onChange = {this.onChangeThirty} />

                            <label className="tl b white fl f4-ns mt3">Midterm</label>
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                            placeholder="Midterm" type="text" value={this.state.MIDU} onChange = {this.onChangeMid} />

                            <label className="tl b white fl f4-ns mt3">Final</label>
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br--left-ns" 
                            placeholder="Final" type="text" value={this.state.FINALU} onChange = {this.onChangeFinal} /> */}
                            
                            <input onClick = {this.onSubmit} className="mt3 f4-l fl pv3 bg-animate bg-black hover-bg-white hover-black b white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                            type="button" value="Update"/>
                        </div>
                    </fieldset>
                </form>
            </div>
          
        );
    }
  
}

export default MarkEntry;
