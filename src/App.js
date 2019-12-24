import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
 



class App extends Component {
 
  render() {
    return (

      
 <BrowserRouter>
 <React.Fragment>

 <Switch>
             
      </Switch> 
      
      <div>      
      <Navbar/>    
      <Home/> 
 
       <Footer />
      </div>
     
      </React.Fragment>
  </BrowserRouter>

   
 
    )
  }
}

export default App;
