import React, {useState} from 'react';
import create from './graph/createGraph'
import GraphElement from './component/graph'
import './App.css';
import Input from './component/input';

interface IGraph {nodes:{id:number, label: string}[], edges:{from:number, to: number}[]}

function App() {
  const [inputString, setinputString] = useState('[[2,3],[],[]]');
  const [graph, setGraph]             = useState<IGraph>({nodes:[], edges:[]});
  const [showGraph, setShowGraph]     = useState(false);
  const [inputType, setInputType]     = useState("edg");

  const parse=()=>{
    setGraph(create(inputString, inputType));
    setShowGraph(true);
  }

  if(showGraph){
    return (
    <div className="App" style={{height:"100vh"}}>
      <GraphElement 
        graph={graph}
        
      />
    </div>
    )
  }

  return (
    <div className="App" style={{height:"100vh"}}>
      <Input 
        setinputString={setinputString} 
        parse={parse} 
        inputString={inputString} 
        setInputType={setInputType}
        inputType={inputType}
      />
    </div>
  );
}

export default App;
