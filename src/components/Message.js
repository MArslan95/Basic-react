import React, { Component } from 'react'

class Message extends Component{
    //crerting a constructor
    constructor(){
        super()
        this.state={
            message:'Welcome to Visitor'
        }
    }
    changeMessage(){
        //chnge the state of method we use setState method and it accept the object
        this.setState({
            message:'Thanks You  for Subscribing'
        })
    }
//render method that return something null r some value
    render(){
    return( 
        <div>
        <h1> {this.state.message} </h1>
        <button onClick={()=> this.changeMessage()}> Subscribe</button>
        </div>
    )
}
}

export default Message;