import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import './Signin.css';

class SignIn extends React.Component  {
	

	constructor(){
		super();
		this.state = {
			signInID: "",
			signInPassword: ""
		}
	}

	onIDChange = (event) => {
		this.setState({signInID: event.target.value})
	}
	
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitChange = (event) =>{
		fetch('http://localhost:3001/signinTeacher', {
			method: 'post',
			headers: {'content-type' : 'application/json',
						'Accept': 'application/json'},
			body: JSON.stringify({
				id : this.state.signInID,
				password : this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data =>{
			if(data === 'Wrong ID'){
				alert('ID not found');
			}else if(data === 'Error Login in'){
				alert('Password does not matched !');
			}
			else{
				this.props.onRoute('teacherHomepage');
			}
		})
		//this.props.onRoute('teacherHomepage');
	}



	render(){
		return(
			<main className="pa5 ba b--black dib br4 ma shadow-5 bg-white css">
			  <div className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				  <legend className=" fw6 ph0 mh0 ttu black">Sign In as Teacher</legend>
				  <div className="mt3">
					<label className="tl db fw6 lh-copy f3 black" htmlFor="id">ID</label>
					<input onChange = {this.onIDChange} className="pa2 input-reset ba bg-white black hover-bg-black w-100 f4" type="text" name="id"  id="id"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f3 black" htmlFor="password">Password</label>
					<input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-white black w-100 f4" type="password" name="password"  id="password"/>
				  </div>
				</fieldset>
				<div className="">
				  <input onClick={this.onSubmitChange} className="b pa3 ph4 ba b--orange bg-orange white grow pointer f4 mt2" type="submit" value="Sign in"/>
				</div>
				<div className="lh-copy mt3 grow">
				  <a href="#0" className="f4 black black hover-black " onClick={()=>this.props.onRoute('signin')}>Go Back!</a>
				</div>
				{/* <div className="lh-copy mt3 grow">
				  <a href="#0" className="f4 black black hover-black">Reset your password?</a>
				</div> */}
				
	
				<div>
					<MediaQuery maxDeviceWidth={1000} >
						<Particles className='prticle' params={prticleMobile} />
					</MediaQuery>
					<MediaQuery minDeviceWidth={1000} maxDeviceWidth={1600}>
						<Particles className='prticle' params={prticleTab} />
					</MediaQuery>
					<MediaQuery minDeviceWidth={1600}>
						<Particles className='prticle' params={prticlePC} />
					</MediaQuery>
				</div>
	
			  </div>
			</main>
	
		);
	}
	
}

const prticlePC ={
	"particles": {
		"number": {
		  "value": 100,
		  "density": {
			"enable": true,
			"value_area": 1100
		  }
		},
		"color": {
		  "value": "#ff0000"
		},
		"size": {
		  "value": 6,
		  "random": true,
		  "anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 150,
		  "color": "#ff0000",
		  "opacity": 0.4,
		  "width": 3
		},
		"move": {
		  "enable": true,
		  "speed": 4,
		  "direction": "none",
		  "random": false,
		  "straight": false,
		  "out_mode": "out",
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		
		"modes": {
		  "grab": {
			"distance": 400,
			"line_linked": {
			  "opacity": 1
			}
		  },
		  "bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 200
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true,
	  "config_demo": {
		"hide_card": false,
		"background_image": "",
		"background_position": "50% 50%",
		"background_repeat": "no-repeat",
		"background_size": "cover"
	  }
  }
  
  const prticleTab ={
	"particles": {
		"number": {
		  "value": 100,
		  "density": {
			"enable": true,
			"value_area": 1200
		  }
		},
		"color": {
		  "value": "#ff0000"
		},
		"size": {
		  "value": 5,
		  "random": true,
		  "anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 150,
		  "color": "#ff0000",
		  "opacity": 0.4,
		  "width": 2
		},
		"move": {
		  "enable": true,
		  "speed": 6,
		  "direction": "none",
		  "random": false,
		  "straight": false,
		  "out_mode": "out",
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		
		"modes": {
		  "grab": {
			"distance": 400,
			"line_linked": {
			  "opacity": 1
			}
		  },
		  "bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 200
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true,
	  "config_demo": {
		"hide_card": false,
		"background_image": "",
		"background_position": "50% 50%",
		"background_repeat": "no-repeat",
		"background_size": "cover"
	  }
  }
  
  const prticleMobile ={
	"particles": {
		"number": {
		  "value": 70,
		  "density": {
			"enable": true,
			"value_area": 700
		  }
		},
		"color": {
		  "value": "#ff0000"
		},
		"size": {
		  "value": 5,
		  "random": true,
		  "anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 150,
		  "color": "#ff0000",
		  "opacity": 0.4,
		  "width": 2
		},
		"move": {
		  "enable": true,
		  "speed": 6,
		  "direction": "none",
		  "random": false,
		  "straight": false,
		  "out_mode": "out",
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		
		"modes": {
		  "grab": {
			"distance": 400,
			"line_linked": {
			  "opacity": 1
			}
		  },
		  "bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 200
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true,
	  "config_demo": {
		"hide_card": false,
		"background_image": "",
		"background_position": "50% 50%",
		"background_repeat": "no-repeat",
		"background_size": "cover"
	  }
  }

export default SignIn;