import React from 'react';
import Navbar from './NavbarTeacher/Navbar';
import Profile from './Profile/Profile';
import MarkEntry from './MarkEntry/MarkEntry';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Homepage = ({onRoute}) => {
    return (
        <Router>
            <div className="hompage">
                <Navbar onRoute={onRoute}/>
                <Switch>
                    <Route path='/profile' component={Profile} />
                    {/* <Route path='/CurrentSemester' component={CurrentSemester}/> */}
                    <Route path='/markentry' component={MarkEntry}/>
                    <Route path='/' > <Profile/> </Route>
                </Switch>
            </div>
        </Router>
    );
  
}

export default Homepage;
