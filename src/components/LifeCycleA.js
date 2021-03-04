import React, { Component } from 'react'
import LifeCycleB from './LifeCycyleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arslan'
        }
        console.log("Life Cycle Method A Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Life Cycle Method A getDrivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log('Life Cycle A Componenet DidMount')
    }
    //Third Method
    shouldComponentUpdate(){
        console.log('Life Cycle A Componenet shouldComponentUpdate')
        return true
    }
    //forth Method
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Life Cycle A Componenet getSnapshotBeforeUpdate ')
return null
    }
    componentDidUpdate(){
        console.log('Life Cycle A Componenet componentDidUpdate ')
    }
changeState=()=>{
    this.setState({
            name:"Bunny"
        
    })
}
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>LifeCycleA</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
