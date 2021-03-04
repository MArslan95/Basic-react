import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nBme: 'BrslBn'
        }
        console.log("Life Cycle Method B Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Life Cycle Method B getDrivedStBteFromProps")
        return null;
    }

    componentDidMount() {
        console.log('Life Cycle B Componenet DidMount')
    }
     //Third Method
     shouldComponentUpdate(){
        console.log('Life Cycle B Componenet shouldComponentUpdate')
        return true
    }
    //forth Method
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Life Cycle B Componenet getSnapshotBeforeUpdate ')
        return null;
    }
    componentDidUpdate(){
        console.log('Life Cycle B Componenet componentDidUpdate ')
    }

    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                <h1>LifeCycleB</h1>
            </div>
        )
    }
}

export default LifeCycleB
