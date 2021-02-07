import React from 'react'
// function Greet(){
//     return <h1>Heloo Muhamamad arslan</h1>
// }
//Using eS6 Syntax
// export const Greet=()=><h1>Helooo</h1>

//Two way to distruct the function exctrating the name an dhero from props
// const Greet =({name,hero}) =>{
//     return <h1>{name} a.k.a {hero} </h1>
// }
//Second way to distruct is to function body and exctract from props object
// const Greet =(props) =>{
//     const {name,hero}=props
//     return <h1>{name} a.k.a {hero} </h1>
// }
const Greet= props =>{
    return <h1>{props.name} a.k.a {props.hero} </h1>
}

export default Greet;