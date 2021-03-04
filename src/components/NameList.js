import React from 'react'
import Person from './Person'

function NameList() {
   const names = ['Bruce', 'Leo', 'Bunny', 'Leo']
   const person = [
      {
         id: 1,
         name: 'Bruce',
         age: 30,
         skill: 'React'
      },
      {
         id: 2,
         name: 'Bunny',
         age: 20,
         skill: 'VUE'
      }, {
         id: 3,
         name: 'Arslan',
         age: 28,
         skill: 'NODE'
      }, {
         id: 4,
         name: 'Clark',
         age: 27,
         skill: 'Express'
      }, {
         id: 5,
         name: 'Diana',
         age: 23,
         skill: 'MongoDb'
      }, {
         id: 6,
         name: 'Leo',
         age: 32,
         skill: 'React'
      },
   ]
   // const personList= person.map(person=>(<Person key={person.id} person={person}/>) )
   //for two same name in the list the arrow function takes 2 parameters
   const namelist = names.map((name, index) =>
      <h2 key={index}> {index} {name} </h2>)
   return (
      <div>
         {/* <h2> {name[0]}</h2>
            <h2> {name[1]}</h2>
            <h2> {name[2]}</h2> */}
         {/* using map method */}
         {/* {
               personList
            } */}
         {namelist}
      </div>
   )
}

export default NameList
