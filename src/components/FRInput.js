import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text' />
//         </div>
//     )
// }
//we create the new arrow function instead of triditional function 
//in this arrow function is pass as parameter to the forward ref function

const FRInput= React.forwardRef(
    (props,ref)=>{
        return (
                     <div>
                         <input type='text' ref={ref} />
                     </div>
            )
    }

) 

export default FRInput
