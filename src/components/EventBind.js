import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'Heloo'
         }
        //  this.clickHander=this.clickHander.bind(this)
     }
    //  clickHander(){
    //      this.setState({
    //          message:'Good Bye'
    //      })
    //  }
    clickHander=()=>{
        this.setState({
            message:'Good Bye'
        })
    }
     
    render() {
        return (
            <div>
                {this.state.message}
                {/* one method is to bind  is write the bind within the render method */}
                {/* <button onClick={this.clickHander.bind(this)}>Click</button> */}
                {/* Sencod approch is use arrow fucntion just call the function in arrowfunctions */}
                {/* <button onClick={()=> this.clickHander()}>Click</button> */}

                {/* thrid approch dealwith binding the event handler in the cosntructor
                 as the post  bindig the rrender method */}
                  <button onClick={ this.clickHander}>Click</button>
                  {/* use the arrow fucntion as a class property change the way to 
                  define the method in the class     */}
            </div>
        )
    }
}

export default EventBind
