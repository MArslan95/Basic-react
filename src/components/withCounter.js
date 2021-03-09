import React from 'react'

//UpdatedComponent is a fucntion which accpet a component  and returna new component
const UpdatedComponent= (OriginalComponent,incrementNumber) => {
class NewComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+ incrementNumber}
        })
    }
    
    render(){
        return <OriginalComponent  count={this.state.count} incrementCount={this.incrementCount} />
    }
}
return NewComponent

}

export default UpdatedComponent