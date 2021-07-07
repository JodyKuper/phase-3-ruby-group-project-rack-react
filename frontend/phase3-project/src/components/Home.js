import React, { Component } from 'react'

export default class Username extends Component {
	state={
		name:"",
		restaurant: "",
		review: ""
	}

	userChange=(event)=> {
		let name=event.target.value
	       this.setState({
		 name: name
		 })
	       
	     }

        userSubmit=(event)=> {
		event.preventDefault()
		const configurationObject = {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		    "Accept": "application/json"
		  },
		  body: JSON.stringify(this.state)
		};
		
		fetch("http://localhost:9393/usernames", configurationObject)
		  .then(function(response) {
		    return response.json();
		  })
		  .then((object)=> {
		    console.log(object)
		    this.setState({
		    newUser: object
		    })
		    })
		  }
		  
        userDelete  = () => {
                 fetch("http://localhost:9393/usernames/"+this.state.newUser.id, {
		 method: "DELETE",
	         headers: {
                'Content-Type': 'application/json',
		  } 
		})
		.then((res)=>res.json())
		.then(data=>console.log(data)
		)   
			
	}

	restaurantChange=(event)=> {
		let name=event.target.value
	       this.setState({
		 restaurant: name
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
		
		fetch("http://localhost:9393/restaurants", configurationObject)
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
	
		  reviewChange=(event)=> {
			let review=event.target.value
		       this.setState({
			 review: review
			 })  
		     }
	
		reviewSubmit=(event)=> {
			event.preventDefault()
			const configurationObject = {
			  method: "POST",
			  headers: {
			    "Content-Type": "application/json",
			    "Accept": "application/json"
			  },
			  body: JSON.stringify(this.state)
			};
			
			fetch("http://localhost:9393/reviews", configurationObject)
			  .then(function(response) {
			    return response.json();
			  })
			  .then((object)=> {
			    console.log(object)
			    this.setState({
			    newReview: object
			    })
			    })
			  }  
		     
	
	 render() {
		 console.log(this.state)
		return (
			<div>
			Username:
			<form onSubmit={this.userSubmit} >
				<input type="text" onChange={this.userChange} placeholder="username"/>
				<input type='Submit'></input>	
			</form>
			<button name="deleteUser" onClick={this.userDelete}>Delete</button><br></br>
			Restaurant Name:
			<form onSubmit={this.restaurantSubmit}>
				<input type="text" onChange={this.restaurantChange} placeholder="restaurant"/>
				<input type='Submit'></input>	
			</form>	
			Review:
			<form onSubmit={this.reviewSubmit}>
				<input type='text' onChange={this.reviewChange}  placeholder="review"/>
				<input type='Submit'></input>
				
			</form>	

					
			</div>
		)
	}
}
