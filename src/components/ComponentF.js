import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentF extends Component {
    render() {
        return (
            // to consume the vale from app component we use userconsumer
           //b/w the opening and closing tag of a cosumer we have provide  a function 
           <UserConsumer>
               {/* Here we are passing a function as a consumer child here which spacifies a parameter name as username */}
{
    (username)=>{
return <div>Helloo {username} </div>
    }
}
            </UserConsumer>
        )
    }
}

export default ComponentF
