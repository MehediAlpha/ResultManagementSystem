import React from 'react';

const Homepage = ({onRoute}) => {
    return (
        <div>
            <div className="">
		      <input className="b pa3 ph4 ba b--orange bg-orange white grow pointer f4 mt2" onClick={()=>onRoute('teachersignin')} type="submit" value="Go Back"/>
		    </div>
            <h1>Hello, Teacher</h1>
            <p>Page under Construction</p>
        </div>
      
    );
  
}

export default Homepage;
