import React from 'react';
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
        this.state = {
            info : ''
        }
    }

    render(){
        return(
        <div>
            <h1 className="b">Profile</h1>
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
        </div>
    )
    }
    
}

export default Profile;