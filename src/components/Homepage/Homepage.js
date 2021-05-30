import React from 'react';
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile';
import AllResult from './All Result/AllResult';
import CurrentSemester from './Current Semester/CurrentSemester';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Homepage.css';
import PreviousSemester from './Previous Semester/PreviousSemester';

const Homepage = ({onRoute}) => {
    return (
        <Router>
            <div className="hompage">
                <Navbar onRoute={onRoute}/>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/allresult' component={AllResult}/>
                    <Route path='/CurrentSemester' component={CurrentSemester}/>
                    <Route path='/PreviousSemester' component={PreviousSemester}/>
                </Switch>
            </div>
        </Router>
      
    );
  
}

export default Homepage;
