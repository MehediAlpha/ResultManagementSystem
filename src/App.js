import React, {Component} from 'react';
import Signin from './components/Signin/Signin';
import SigninT from './components/Teacher/Signin/Signin'
import HomepageT from './components/Teacher/Homepage/Homepage'
import Logo from './components/Logo/Logo'
import './App.css';
import Homepage from './components/Homepage/Homepage';

class App extends Component {

  constructor(){
    super();
    this.state ={
      route : 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
  
  render () {
    return (
        <div className = "App">
          {
            this.state.route === 'signin'
            ? 
              <div>
                <Logo onRoute={this.onRouteChange}/>
                <Signin onRoute={this.onRouteChange}/>
              </div>
            : 
              this.state.route === 'teachersignin' 
              ?
                <SigninT onRoute={this.onRouteChange}/>
              :
                this.state.route === 'teacherHomepage'
                ?
                  <HomepageT onRoute={this.onRouteChange}/>
                :
                <Homepage onRoute={this.onRouteChange}/>
          }
        </div>
    );
  }
}

export default App;
