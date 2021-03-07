import React, {useState} from 'react';
import create from './createGraph'
import GraphElement from './graph'
import './App.css';

interface IGraph {nodes:{id:number, label: string}[], edges:{from:number, to: number}[]}

function App() {
  const [inputString, setinputString] = useState('de');
  const [graph, setGraph] = useState<IGraph>({nodes:[], edges:[]});
  // var graph:{nodes:{id:number, label: string}[], edges:{from:number, to: number}[]}={nodes:[], edges:[]};
  var [showGraph, setShowGraph] = useState(false);
  const parse=()=>{
    setGraph(create(inputString));
    setShowGraph(true);
  }
  console.log(showGraph)
  if(showGraph){
    return (
    <div className="App" style={{height:"100vh"}}>
      <GraphElement graph={graph}/>
    </div>
    )
  }
  return (
    <div className="App" style={{height:"100vh"}}>
      <input value={inputString} onChange={(e)=>setinputString(e.target.value)}/>
      <button onClick={parse}>Submit</button>
    </div>
  );
}

export default App;
