import React from 'react'

function FunctionClick() {
    function clickHandeler(){
        console.log('button click')
    }
    return (
        <div>
            {/* Event handling in fucntion */}
            <button onClick={clickHandeler}>Click</button>
        </div>
    )
}

export default FunctionClick
