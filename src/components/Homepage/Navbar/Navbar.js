import React from 'react';
import studentLogo from './icons8-student-center-100.png';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({onRoute}) => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="#0">
                    <img src={studentLogo} className="w2 bg-white ml4 mr5" alt="Site Name"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <Link to="/profile">
                            <li className="nav-item white">
                                <button className="nav-link active grow mr3 bg-transparent b--transparent" style={{textDecoration:"none"}} >Profile</button>
                            </li>
                        </Link>
                        <Link to="/allresult">
                            <li className="nav-item">
                                <button className="nav-link active grow mr3 bg-transparent b--transparent" >All Result</button>
                            </li>
                        </Link>
                        <Link to="/individualresult">
                            <li className="nav-item">
                                <button className="option nav-link active grow mr3 bg-transparent b--transparent" >Individual Result</button>
                            </li>
                        </Link>
                    </ul>
                    <div className="navbar-text ">
                        <button className="nav-link signout grow bg-transparent b--transparent"  onClick={()=>onRoute('signin')}>Sign Out</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;