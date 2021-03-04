import React from 'react'
import './myStyles.css';

function StyleSheet(props) {
    let val= props.primary?'primary':''
    return (
        <div>
            <h1 className={`${val} font-xl`}>Style Sheet</h1>
        </div>
    )
}

export default StyleSheet
