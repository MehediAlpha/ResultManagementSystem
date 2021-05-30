import React from 'react';
//import student from '../DatabaseSample/student'

const Profile = () => {

    const student = {
        id: 18191103053,
        name: 'S. M. Mehedi',
        mobile: '01981788997',
        email: '181911030453@cse.bubt.edu.bd',
        intake: 40,
        section: 2
}

    return(
        <div>
            <h1 className="b">Profile</h1>
                <dl class="lh-title pa4 mt0">
                    <dt class="f3 b">ID</dt>
                    <dd class="ml0 f4">{student.id}</dd>
                    <dt class="f3 b mt3">Name</dt>
                    <dd class="ml0 f4">{student.name}</dd>
                    <dt class="f3 b mt3">Intake</dt>
                    <dd class="ml0 f4">{student.intake}</dd>
                    <dt class="f3 b mt3">Section</dt>
                    <dd class="ml0 f4">{student.section}</dd>
                    <dt class="f3 b mt3">Phone</dt>
                    <dd class="ml0 f4">{student.mobile}</dd>
                    <dt class="f3 b mt3">Email</dt>
                    <dd class="ml0 f4">{student.email}</dd>
                </dl>
        </div>
    )
}

export default Profile;