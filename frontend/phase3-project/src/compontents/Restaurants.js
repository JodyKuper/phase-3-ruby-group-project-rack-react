import React, { Component } from 'react'

export default class Restaurants extends Component {
	state={
		restaurants: "",
		newRestaurant: ""
	}

	restaurantChange=(event)=> {
		let newRestaurant=event.target.value
	       this.setState({
		 restaurants: newRestaurant
		 })  
	     }

	restaurantSubmit=(event)=> {
		event.preventDefault()
		const configurationObject = {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		    "Accept": "application/json"
		  },
		  body: JSON.stringify(this.state)
		};
		
		fetch("http://127.0.0.1:9393/restaurants", configurationObject)
		  .then(function(response) {
		    return response.json();
		  })
		  .then((object)=> {
		    console.log(object)
		    this.setState({
		    newRestaurant: object
		    })
		    })
		  }
	
	  render() {

		
		return (
			<div>
			Restaurant Name:
			<form onSubmit={this.restaurantSubmit}>
				<input type="text" onChange={this.restaurantChange} placeholder="restaurant"/>
				<input type='Submit'></input>	
			</form>	
			</div>
		)
	}
}
