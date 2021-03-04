import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* call the  method from parent  using button in a child component as a props to the child componenet  */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* Second method is Arrow fucntion w we can also pass parameter to the greethandler */}
            <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
