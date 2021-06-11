import React from 'react';
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile';
import CurrentSemester from './Current Semester/CurrentSemester';
import PreviousSemester from './Previous Semester/PreviousSemester';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Homepage.css';


const Homepage = ({onRoute}) => {
    return (
        <Router>
            <div className="hompage">
                <Navbar onRoute={onRoute}/>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/CurrentSemester' component={CurrentSemester}/>
                    <Route path='/PreviousSemester' component={PreviousSemester}/>
                    <Route path='/' > <Profile/> </Route>
                </Switch>
            </div>
        </Router>
      
    );
  
}

export default Homepage;
