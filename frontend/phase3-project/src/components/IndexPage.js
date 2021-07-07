import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default class IndexPage extends Component {
	state = {
		
		restaurants: [],
		userName: [],
		reviews: []
		
	}

	fetchRestaurants = () => {
		fetch("http://localhost:9393/restaurants")
		  .then((res) => res.json())
		  .then((data) => {
		    console.log(data.map(restaurants=>restaurants.name))
		    this.setState({
		      restaurants: data
		    });
		  });
	      };
  

	      fetchUserName = () => {
		fetch("http://localhost:9393/usernames")
		  .then((res) => res.json())
		  .then((data) => {
		    console.log(data.map(username=>username.name))
		    this.setState({
		      userName: data
		    });
		  });
	      };

	      fetchReviews = () => {
		fetch("http://localhost:9393/reviews")
		  .then((res) => res.json())
		  .then((data) => {
		    console.log(data.map(reviews=>reviews.text))
		    this.setState({
		      reviews: data
		    });
		  });
	      };
  
	      componentDidMount() {
		this.fetchRestaurants()
		this.fetchUserName()
		this.fetchReviews()
	      }

	      RestaurantList=()=>{     
		const list=this.state.restaurants.map((name)=>{
		    return  <li>{name.name}<br></br></li>
		})
		
		      return <ul>{list}</ul>
		}
	 




	render() {
		console.log(this.state)
		return (
			<div>
				{this.RestaurantList()}	

			</div>
		)
	}
}


