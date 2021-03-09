import './App.css';
import React, { Component } from 'react';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';



//State Full Class Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* User Provider resposible for providing the value to all the decendent value provide is user name and pass in user provider */}
          <UserProvider value='Arslan'>
          <ComponentC />
          </UserProvider>
        </header>

      </div>
    );
  }
}

//Stateless Function
// function App(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Helloo Word.
//         </p>

//       </header>
//     </div>
//   );
// }

export default App;

