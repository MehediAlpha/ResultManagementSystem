import React from 'react';
import studentLogo from './icons8-student-center-100.png';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({onRoute}) => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#0">
                    <img src={studentLogo} className="w2 bg-white ml4 mr5" alt="Site Name"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/profile">
                            <li className="navbar-text br3 bg-orange ml2 pl2 grow">
                                <button className="nav-link active mr2 bg-transparent b--transparent" style={{textDecoration:"none"}} >Profile</button>
                            </li>
                        </Link>
                        {/* <Link to="/CurrentSemester"> 
                            <li className="navbar-text br3 bg-orange ml2 pl2 grow">
                                <button className="option nav-link active mr2 bg-transparent b--transparent" >Current Semester</button>
                            </li>
                        </Link> */}
                        <Link to="/markentry">
                            <li className="navbar-text br3 bg-orange ml2 pl2 grow">
                                <button className="option nav-link active mr2 bg-transparent b--transparent" >Mark Entry</button>
                            </li>
                        </Link>
                    </ul>
                    <Link to="/">
                        <div className="navbar-text ml3 pl3 grow">
                            <button className="nav-link signout grow red bg-transparent b--transparent"  onClick={()=>onRoute('teachersignin')}>Sign Out</button>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;