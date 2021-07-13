import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom"

export default class IndexPage extends Component {
	state = {
		
		restaurants: [],
		userName: [],
		reviews: [],
		


		
	}

	fetchRestaurants = () => {
		fetch("http://localhost:9393/restaurants/")
		  .then((res) => res.json())
		  .then((data) => {
		//     console.log(data.map(restaurants=>restaurants.name))
		    this.setState({
		      restaurants: data
		    });
		  });
	      };
	     
	      
	      fetchReviews = () => {
		      fetch("http://localhost:9393/reviews")
		      .then((res) => res.json())
		      .then((data) => {
			      // debugger     
			      this.setState({
				      reviews: data
				});
			});
		};
		
		fetchUserName = (id) => {
			fetch("http://localhost:9393/usernames"   )
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					userName: data
				});
			});
		};
		
		componentDidMount() {
		  this.fetchReviews()
		  this.fetchRestaurants()
		  this.fetchUserName()
		}
    
  

	      RestaurantList=()=>{     
		const list=this.state.reviews.map((review)=>{
			console.log(review.username_id)	
		    return  <li>{review.text}<br></br></li>
		})
		      return <ul>{list}</ul>
		}

		  
		reviewDelete  = () => {
			fetch("http://localhost:9393/reviews/"+this.state.reviews[0].id, {
			method: "DELETE",
			headers: {
		       'Content-Type': 'application/json',
			 } 
		       })
		       .then((res)=>res.json())
		       .then(data=>console.log(data)
		       )   
			       
	       }	


	render() {
			
		return (
			<div>
				<NavLink to="/">HOME</NavLink><br></br>
				<br></br>
				<button name="deleteUser" onClick={this.reviewDelete}>Delete</button><br></br>
				{this.RestaurantList()}	

			</div>
		)
	}
}


