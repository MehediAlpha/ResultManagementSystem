import React from 'react';
import CurrentSemester from '../Current Semester/CurrentSemester';
import './Profile.css';
//import student from '../DatabaseSample/student'

// const student = {
//         id: 18191103053,
//         name: 'S. M. Mehedi',
//         mobile: '01981788997',
//         email: '18191103053@cse.bubt.edu.bd',
//         intake: 40,
//         section: 2
// }

class Profile extends React.Component {

    constructor(){
        super();
        fetch('http://localhost:3001/studentinfo', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({info : data})
		});

        fetch('http://localhost:3001/cgpagenerate', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({cgpa : data})
		});

        fetch('http://localhost:3001/sgpagenerate', {
			method: 'get',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'}
		})
		.then(response => response.json())
		.then(data =>{
            this.setState({sgpa : data})
		});


        this.state = {
            info : '',
            cgpa: '0.00',
            sgpa: '0.00'
        }
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
                                            <h3 className="f-w-600">{this.state.info.s_name}</h3>
                                            <p className = "f4">{this.state.info.s_id}</p> 
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-block">
                                            <h2 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h2>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Email</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_mail}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Phone</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_phone}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Gender</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_gender}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Depertment</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_dept}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Intake</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_intake}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Section</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_section}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Blood Group</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_bg}</h6>
                                                </div>
                                                <div className="col-sm-12">
                                                    <p className="m-b-10 f-w-600 f4 mt3">Address</p>
                                                    <h6 className="text-muted f-w-400 f5">{this.state.info.s_address}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">CGPA</p>
                                                    <h6 className="f-w-400 f5 dark-red">{parseFloat(this.state.cgpa).toFixed(2)}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600 f4 mt3">SGPA</p>
                                                    <h6 className="f-w-400 f5 dark-red">{parseFloat(this.state.sgpa).toFixed(2)}</h6>
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
            
            {/* <div className= "tl">
                <dl className="lh-title pa4 mt0">
                    <dt className="f3 b">ID</dt>
                    <dd className="ml0 f4">{this.state.info.s_id}</dd>
                    <dt className="f3 b mt3">Name</dt>
                    <dd className="ml0 f4">{this.state.info.s_name}</dd>
                    <dt className="f3 b mt3">Intake</dt>
                    <dd className="ml0 f4">{this.state.info.s_intake}</dd>
                    <dt className="f3 b mt3">Section</dt>
                    <dd className="ml0 f4">{this.state.info.s_section}</dd>
                    <dt className="f3 b mt3">Phone</dt>
                    <dd className="ml0 f4">{this.state.info.s_phone}</dd>
                    <dt className="f3 b mt3">Email</dt>
                    <dd className="ml0 f4">{this.state.info.s_mail}</dd>
                </dl>
            </div> */}

            <CurrentSemester/>
        </div>
       
    )}
    
}

export default Profile;