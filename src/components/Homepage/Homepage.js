import React from 'react';
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile';
import AllResult from './All Result/AllResult';
import IndividualResult from './Individual Result/IndividualResult';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Homepage.css';

const Homepage = ({onRoute}) => {
    return (
        <Router>
            <div className="hompage">
                <Navbar onRoute={onRoute}/>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/allresult' component={AllResult}/>
                    <Route path='/individualresult' component={IndividualResult}/>
                </Switch>
            </div>
        </Router>
      
    );
  
}

export default Homepage;
