import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //forth apparoch if wewant  to rander one statement  so we use && operator it check the left hand side 
        //if it is true then  check the right side  if fale it render nothing 
       return this.state.isLoggedIn && <div>Welcome Bunny</div>

        // return (
        //     //approch three the first operator is avulated to either ture or false
        //     this.state.isLoggedIn ? (<div>Welcome bunny</div>) : (<div>Welcome Guest</div>)
        // )
        // Veraible approch
        // let msg // message is a variable the elemet  to be rendered
        // if(this.state.isLoggedIn){msg   = <div>Welcome Bunny</div>}
        // else{msg=<div>Welcome Guest</div>}
        // return(<div> {msg} </div>)
        // if (this.state.isLoggedIn) {return (<div>Welcome Bunny</div>)}
        // else {return <div>Welcome Guest</div>}
        // return (
        //     <div>
        //         <div>Welcome Bunny</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
