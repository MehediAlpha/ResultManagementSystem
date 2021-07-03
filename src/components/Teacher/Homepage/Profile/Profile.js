import React from 'react';
import './Profile.css';
import CurrentCourseList from './CurrentCourseList';

class Profile extends React.Component {

    constructor(){
        super();
        fetch('http://localhost:3001/teacherInfo', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({info : data})
		});

        fetch('http://localhost:3001/teacherCourse', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({course : data})
		});

        this.state = {
            info :{
                t_name: 'Teacher Name',
                t_id : 'Teacher ID',
                t_mail : 'Teacher@email.com',
                t_phone : '0121212121212',
                t_gender : 'Male',
                t_dept : 'CSE',
                t_bg : 'Blood',
                t_address : 'Omuk Jaiga, Tomuk Road, Oi District, Shei Division'
            },
            course : [{
                c_id : 'CSE 131',
                c_title : 'TEST FUNDAMENTAL',
                count : '40'
            },
            {
                c_id : 'CSE 132',
                c_title : 'TEST FUNDAMENTAL LAB',
                count : '37'
            }
        ]
        }
    }

    downloadPDF = (course_id, event) => {
        console.log('Working '+ course_id);

        fetch('http://localhost:3001/enrollList', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				courseID : course_id
			})
		})
		.then(response => response.json())
		


    }

    render(){
        return(
        <div className="padding">  
            <h1 className="b f2">Profile</h1>
            <div className="page-content page-container" id="page-content">
                <div >
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-12 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-md-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> 
                                                <img src="https://image.flaticon.com/icons/png/512/64/64572.png" width="150px" alt="User-Profile"/> 
                                            </div>
                                            <h3 className="f-w-600">{this.state.info.t_name}</h3>
                                            <p className = "f4">{this.state.info.t_id}</p> 
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h2>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Email</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_mail}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Phone</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_phone}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Gender</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_gender}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Depertment</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_dept}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Blood Group</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_bg}</h6>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Address</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.t_address}</h6>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="b f2">Current Semester Course</h1>
                <h3 className="b">Summer 2021</h3>
                    <div className="pa2">
                        <CurrentCourseList course = {this.state.course} downloadPDF = {this.downloadPDF}/>
                    </div>
            </div>


        </div>
       
    )}
  
}

export default Profile;
