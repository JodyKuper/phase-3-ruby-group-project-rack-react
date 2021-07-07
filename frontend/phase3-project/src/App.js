import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import UserName from "./components/Home"
// import Restaurants from "./components/Restaurants"
// import Reviews from "./components/Reviews"
import Home from "./components/Home"
import IndexPage from "./components/IndexPage"
import "./App.css"


export default class App extends Component {

  
  
  
  render() {
    
    
    return (
      <Router>
      <div>
      <h1>ZELP</h1>
       <Switch>
       {/* <Route path="/username" component={UserName}/>
       <Route path="/restaurants" component={Restaurants}/>
       <Route path="/reviews" component={Reviews}/> */}
        <Route exact  path="/" component={Home}/>
        <Route exact path="/indexpage" component={IndexPage}/>
        </Switch>
        
    
   
      </div>

      </Router>
    )
  }
}
 
 
 