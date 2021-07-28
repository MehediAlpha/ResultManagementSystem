import React from 'react';
import MediaQuery from 'react-responsive';
import Particles from 'react-particles-js';
import './Signin.css';
import Popup from 'reactjs-popup';


class SignIn extends React.Component {

	constructor(){
		super();
		this.state = {
			signInID: "",
			signInPassword: "",
			passChangeId: "",
			passChangeOldPass: "",
			passChangeNewPass: "",
			passChangeRetNewPass: ""
		}
	}

	onIDChange = (event) => {
		this.setState({signInID: event.target.value})
	}
	
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}
	

	onSubmitChange = (event) =>{
		// console.log(this.state.signInID + this.state.signInPassword);

		fetch('http://localhost:3001/signin', {
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
				this.props.onRoute('home');
			}
		})
		//this.props.onRoute('home');
	}

	onChangeId = (event) =>{
		this.setState({passChangeId : event.target.value});
	}
	onChangeOldPassword = (event) =>{
		this.setState({passChangeOldPass : event.target.value});
	}
	onChangeNewPassword = (event) =>{
		this.setState({passChangeNewPass : event.target.value});
	}
	onChangeRetNewPassword = (event) =>{
		this.setState({passChangeRetNewPass : event.target.value});
	}


	onResetPassword = () =>{
		if(this.state.passChangeId.length === 0 || 
			this.state.passChangeOldPass.length === 0 || 
			this.state.passChangeNewPass.length === 0 || 
			this.state.passChangeRetNewPass.length === 0){
			console.log(this.state.passChangeId.length);
			alert('Must fill up the form!');
			return 'not done';
		} else {
			if (this.state.passChangeNewPass === this.state.passChangeRetNewPass) {
				fetch('http://localhost:3001/studentPasswordChange', {
					method: 'post',
					headers: {'content-type' : 'application/json',
								'Accept': 'application/json'},
					body: JSON.stringify({
						id: this.state.passChangeId,
						oldPassword :this.state.passChangeOldPass,
						newPassword : this.state.passChangeNewPass
					})
				})
				.then(response => response.json())
				.then(data =>{
					if(data === 'Wrong ID'){ 
						alert('ID not found');
					}else if(data === 'Error Verifying'){
						alert('ID and Password does not matched !');
					}else if(data === 'Error Database'){
						alert('Server Error. Try Again');
					}
					else{
						this.setState({passChangeId : ""});
						this.setState({passChangeOldPass : ""});
						this.setState({passChangeNewPass : ""});
						this.setState({passChangeRetNewPass : ""});
						alert('Password Changed Sucessfully');
						return 'done';
					}
				})
			} else {
				alert('New Password and Old PAssword does not match!');
			}
		}
	}

	render(){
		return(
			<main className="pa5 ba b--black dib br4 ma shadow-5 bg-white css">
			  <div className="measure center">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				  <legend className="f1-l fw6 ph0 mh0 ttu black" style={{fontFamily: "Agency FB"}}>Sign In</legend>
				  <div className="mt3">
					<label className="tl db fw6 lh-copy f3-l black" htmlFor="id">ID</label>
					<input onChange = {this.onIDChange} className="pa2 input-reset ba bg-white black hover-bg-black w-100 f4" type="text" name="id"  id="id"/>
				  </div>
				  <div className="mv3">
					<label className="tl db fw6 lh-copy f3-l black" htmlFor="password">Password</label>
					<input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-white black w-100 f4" type="password" name="password"  id="password"/>
				  </div>
				</fieldset>
				<div className="">
				  <input onClick={this.onSubmitChange}  className="b pa3 ph4 ba b--orange bg-orange white grow pointer f4 mt2" type="submit" value="Sign in"/>
				</div>


				<Popup trigger={<button className="f4-l bg-transparent b--transparent hover-black pointer mt3 grow b" > Change Password !</button> } modal nested>
				
					{close => (
						<div>
							
							<div className=" bg-white ma measure center ba pa5 b--black br4 shadow-5">
								<button className="close f3" onClick={close}>
								X
								</button>
								<fieldset id="passwordchange" className="ba b--transparent ph0 mh0">
									<legend className="f2-l fw6 ph0 mh0 black pt4" style={{fontFamily: "Agency FB"}}>Change Password</legend>
									<div className="mt3">
										<label className="tl db fw6 lh-copy f4-l black" htmlFor="id">ID</label>
										<input value ={this.state.passChangeId} onChange = {this.onChangeId} className="pa2 input-reset ba bg-white black hover-bg-black w-100 f4" type="text" name="id"  />
									</div>
									<div className="mv3">
										<label className="tl db fw6 lh-copy f4-l black" htmlFor="password">Old Password</label>
										<input value ={this.state.passChangeOldPass} onChange = {this.onChangeOldPassword} className="b pa2 input-reset ba bg-white black w-100 f4" type="password" name="password"/>
									</div>
									<div className="mv3">
										<label className="tl db fw6 lh-copy f4-l black" htmlFor="password">New Password</label>
										<input value ={this.state.passChangeNewPass} onChange = {this.onChangeNewPassword} className="b pa2 input-reset ba bg-white black w-100 f4" type="password" name="password" />
									</div>
									<div className="mv3">
										<label className="tl db fw6 lh-copy f4-l black" htmlFor="password">Re-type New Password</label>
										<input value ={this.state.passChangeRetNewPass} onChange = {this.onChangeRetNewPassword} className="b pa2 input-reset ba bg-white black w-100 f4" type="password" name="password"/>
									</div>
								</fieldset>
								{/* <button className="button red" onClick={() => { console.log('modal closed '); close(); }} > */}
								<div className="row pt4">
									<button className="buttonb pa2 pv3 ba b--green bg-green white grow pointer f4 mt2 col-md-6" onClick= { ()=> 
										{ 	
											let status  = this.onResetPassword();
											if (status === 'done')
												close();
										}}>
										Change
									</button>
									<button className="buttonb pa2 pv3 ba b--red bg-red white grow pointer f4 mt2 col-md-6" onClick={close} >
										Close
									</button>
								</div>
								
							</div>
							
						</div>
					)}
				</Popup>
	
	
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