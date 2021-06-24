import React, { Component } from 'react'

export default class Username extends Component {
	state={
		name:"",
		newUser: ""
	}

	userChange=(event)=> {
		let newName=event.target.value
	       this.setState({
		 name: newName
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
		
		fetch("http://127.0.0.1:9393/usernames", configurationObject)
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
	render() {
		return (
			<div>
			Username:
			<form onSubmit={this.userSubmit} >
				<input type="text" onChange={this.userChange} placeholder="username"/>
				<input type='Submit'></input>
				
			</form>		
			</div>
		)
	}
}
