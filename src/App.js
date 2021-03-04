import './App.css';
import React,{Component} from 'react';
import FRparent from './components/FRparent';



//State Full Class Component
class App extends Component{
render() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <FocusInput/> */}
       <FRparent/>
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

