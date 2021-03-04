import React, { Component} from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arslan'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Arslan"
            })
        },2000)
    }


    render() {
        console.log("!!!!!!!!!!!!!!!!!parent Comp Render!!!!!!!!!!!!!!!!!!!!")
        return (
            <div>
                parent Component
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <Memo name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
