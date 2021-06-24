import React, { Component } from 'react'

export default class Reviews extends Component {

	state={
		reviews: "",
		newReview:""
	}

	reviewChange=(event)=> {
		let newReview=event.target.value
	       this.setState({
		 review: newReview
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
		
		fetch("http://127.0.0.1:9393/reviews", configurationObject)
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
			Review:
			<form onSubmit={this.handleSubmit}>
				<input type='text' onChange={this.handleChange}  placeholder="review"/>
				<input type='Submit'></input>
				
			</form>	
			</div>
		)
	}
}
