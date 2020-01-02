import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import axios from 'axios'
 import Accounts    from './Component/Accounts';
import AdProduct   from './Component/AdProduct';
import EdProduct   from './Component/EdProduct';
import Login       from './Component/Login';
import Products    from './Component/Products';



class App extends Component {
  
state = {

  loading :   true ,
  accountsPage :  null
};


async componentDidMount() {
const url ="https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json";

const response = await fetch(url);
const data = await response.json();


}
constructor(props){
  super(props);
  this.state ={
    posts:[],
    subr: 'space'
  };

}

  render() {
    return (

      
 <BrowserRouter>
 <React.Fragment>
 <Navbar/> 
 <Switch>
 <Route exact path="/" component={Home} />
 <Route path="/accounts" component={Accounts} />
 <Route path="/addProduct" component={AdProduct} />
 <Route path="/editProduct" component={EdProduct} />
 <Route path="/products" component={Products} />
 <Route path="/login" component={Login} />
  
   </Switch>      
      <Footer />            
      </React.Fragment>
  </BrowserRouter>

   
 
    )
  }
}

export default App;
