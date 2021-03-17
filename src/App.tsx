import React, { useState } from 'react';
import create from './graph/createGraph'
import GraphElement from './component/graph'
import './App.css';
import Input from './component/input';
import inputFormat from './inputFormat';

interface IGraph { nodes: { id: number, label: string }[], edges: { from: number, to: number }[] }

function App() {
  const [inputString, setinputString] = useState('');
  const [graph, setGraph]         = useState<IGraph>({ nodes: [], edges: [] });
  const [showGraph, setShowGraph] = useState(false);
  const [inputType, setInputType] = useState("edg");
  const [graphType, setGraphType] = useState("undirected");
  const [error, setError]         = useState("");
  const [isWeighted,setIsWeighted]= useState(false);

  const parse = () => {
    setError("");
    try {
      setGraph(create(inputString, inputType, graphType, isWeighted));
      setShowGraph(true);
    } catch (err) {
      console.error(err)
      setError(err.message.replace("JSON", "Array"));
    }
  }

  if (showGraph)
    return <GraphElement
      graph={graph}
      inputString={inputString}
      graphType={graphType}
      inputType={inputType}
      isDirected={graphType === "directed"}
      isWeighted={isWeighted}
      setShowGraph={setShowGraph}
    />
  const props={
    isWeighted, setIsWeighted,setinputString,
    parse,inputString,setInputType,
    inputType,setGraphType,graphType,error,
    format:isWeighted?inputFormat.w[inputType]:inputFormat.unw[inputType]
  }
  return  <Input {...props} /> ;
}

export default App;
