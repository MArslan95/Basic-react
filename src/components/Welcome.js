import React, { Component } from 'react'

class Welcome extends Component {
    //render method that return something null r some value
    
    render() {
        // const {name, hero}  = this.props
        return (
            <h1> {this.props.name} a.k.a {this.props.hero} </h1>
            // desrtuctin in class 
            // <h1> Welcome {name} a.k.a {hero} </h1>

        )
    }
}

export default Welcome;