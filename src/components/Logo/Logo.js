import React from 'react';
import Tilt from 'react-tilt';
import studentLogo from './icons8-student-center-100.png';
import './Logo.css'

const Logo = () => {
	return(
		<div className='ma4 pd '>
			<Tilt className="Tilt br2 shadow-5 ba b--black" options={{ max : 100 }} >
				 <div className="Tilt-inner pa3" >
				 	<img alt='BloodLogo' src={studentLogo}/> 
				 </div>
			</Tilt>
		</div>
	);
}

export default Logo;