import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from'clarifai';

const app = new Clarifai.App({
 apiKey: ''
});

const particlesOptions = {
                particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 200
                    }
                  }
                }
              }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log('click');
  app.models
.predict(
Clarifai.COLOR_MODEL,
    // URL
    "https://samples.clarifai.com/metro-north.jpg"
)
.then(function(response) {
   console.log(response);
    },
    function(err) {
      console.log('click');
    }
);
}

render(){
  return (
    <div className="App">
    <Particles className = 'particles'
              params={particlesOptions}
          
            />
    <Navigation/>
    <Logo/>
     <Rank/>
    <ImageLinkForm  onInputChange= {this.onInputChange} 
    onButtonSubmit = {this.onButtonSubmit}/>
   
   { 
   	/*
    
    <FaceRecognition/>*/} 
      
    </div>
  );
}
}

export default App;
