import React, { Component } from 'react'
import FRInput from './FRInput'

class FRparent extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
    }
    clickHandel = () => {
        this.inputref.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputref} />
                <button onClick={this.clickHandel}>Focus Input</button>
            </div>
        )
    }
}

export default FRparent
