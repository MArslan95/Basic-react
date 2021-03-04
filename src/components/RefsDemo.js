import React, { Component } from 'react'

 class RefsDemo extends Component {
     // 1st creating a refs by using a create ref fucntion
     constructor(props) {
         super(props)
         this.inputref=React.createRef()
         // 2nd method is known as call back ref which first create a property and 
         this.cbRef=null
         //create a method that assign the dom elementwe pass as a paramter 
         this.setCbRef= element=>{
             this.cbRef=element
         }
         this.state = {
              
         }
     }
     componentDidMount(){

        if(this.cbRef){
            this.cbRef.focus()
        }
        //  this.inputref.current.focus()
        //  console.log(this.inputref)

     }
     clickHandler=()=>{
         alert(this.inputref.current.value)
     }
     
    render() {
        return (
            <div>
                <input type='text' ref={this.inputref} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default RefsDemo
