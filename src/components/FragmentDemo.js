import React from 'react'

function FragmentDemo() {
    return (
        //if we inspect the console the new div is added to the  dom tree  so we replace with react fragement so we can 
        //replace the div b/w the app div
        <React.Fragment>
            <h1>
                Fragment Demo
        </h1>
            <p> THis Describe the Fragment Demo  Component</p>
        </React.Fragment>
    )
}

export default FragmentDemo
