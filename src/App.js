import React, {Component} from 'react';
import Signin from './components/Signin/Signin';
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
                <Logo/>
                <Signin onRoute={this.onRouteChange}/>
              </div>
            : <Homepage onRoute={this.onRouteChange}/>
          }
        </div>
    );
  }
}

export default App;
