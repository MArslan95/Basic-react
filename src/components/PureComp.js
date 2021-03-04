import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure Comp Render")
        return (
            <div>
                Pure Components {this.props.name}          
            </div>
        )
    }
}

export default PureComp
