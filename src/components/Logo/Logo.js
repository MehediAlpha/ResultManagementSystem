import React from 'react';
import Tilt from 'react-tilt';
import studentLogo from './icons8-student-center-100.png';
import './Logo.css'

const Logo = ({onRoute}) => {
	return(
		<div className='ma4 pd flex justify-between'>
			<Tilt className="Tilt br2 shadow-5 ba b--black" options={{ max : 100 }} >
				 <div className="Tilt-inner pa3" >
				 	<img alt='BloodLogo' src={studentLogo}/> 
				 </div>
			</Tilt>
			<div className="teacher">
		      <input className="b pa2 ph4 b--dark-gray bg-dark-gray white grow pointer f5 mt2 " onClick={()=>onRoute('teachersignin')} type="submit" value="I'm a TEACHER"/>
		    </div>
		</div>
	);
}

export default Logo;