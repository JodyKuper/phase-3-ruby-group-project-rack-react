import React, { Component } from 'react'
import UserName from "./compontents/Username.js"
import Restaurants from "./compontents/Restaurants"
import Reviews from "./compontents/Reviews"
import "./App.css"

export default class App extends Component {

  state= {
    newUserName: "",
    newRestaurant: "",
    // newReview: "",
    reviews: []
  }

  fetchReviews=() => {
    fetch("http://127.0.0.1:9393/reviews")
    .then((res)=>res.json())
    .then(data=>
    
      console.log(data)
    //   this.setState({
    //   reviews: data

    // }))
    ) 
  }

  componentDidMount() {
    this.fetchReviews()
  }

  // handleSubmit=(event)=> {
  //   event.preventDefault()
  //   const configurationObject = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(this.state)
  //   };
    
  //   fetch("http://127.0.0.1:9393/reviews", configurationObject)
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then((object)=> {
  //       console.log(object)
  //       this.setState({
  //       newReview: object
  //       })
  //       })
  //     }
  
  render() {
    console.log(this.state)
    return (
      <div>
      <h1>ZELP</h1>
       <UserName/>
       <Restaurants/>
       <Reviews/>

      </div>
    )
  }
}
