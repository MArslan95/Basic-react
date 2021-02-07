import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greeting';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

//State Full Class Component
class App extends Component{
render() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
      {/* <Greet name='Arslan' hero='Super man'/> */}
      {/* <Welcome name='Arslan' hero='Super man'/>
      <Welcome name='Fazian' hero='Super man'/> */}
      {/* <Hello/> */}
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

