import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('click the button');
    }
    render() {
        return (
            <div>

                {/* Event Handling in class component we add this key word */}
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
