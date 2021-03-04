import React from 'react'

function Column() {
    const items = [];
    return (
        // we alse use <></> as the replacement of react fragment but you can not pass the id 
        // <React.Fragment>
        //     <td>Name</td>
        //     <td>Muhammad Arslan</td>
        // </React.Fragment>
        <>
         <td>Name</td>
       <td>Muhammad Arslan</td>
        </>
    )
}

export default Column
