import React from 'react';
import Tilt from 'react-tilt';
import studentLogo from './icons8-student-center-100.png';
import './Logo.css'

const Logo = ({onRoute}) => {
	return(
		<div className='ma4 pd '>
			<Tilt className="Tilt br2 shadow-5 ba b--black" options={{ max : 100 }} >
				 <div className="Tilt-inner pa3" >
				 	<img alt='BloodLogo' src={studentLogo}/> 
				 </div>
			</Tilt>
			<div className="teacher">
		      <input className="b pa3 ph4 ba b--orange bg-orange white grow pointer f4 mt2 " onClick={()=>onRoute('teachersignin')} type="submit" value="I'm a teacher"/>
		    </div>
		</div>
	);
}

export default Logo;