import React, { useState } from 'react';
import create from './graph/createGraph'
import GraphElement from './component/graph'
import './App.css';
import Input from './component/input';
import inputFormat from './inputFormat';

interface IGraph { nodes: { id: number, label: string }[], edges: { from: number, to: number }[] }

function App() {
  const [inputString, setinputString] = useState('');
  const [graph, setGraph] = useState<IGraph>({ nodes: [], edges: [] });
  const [showGraph, setShowGraph] = useState(false);
  const [inputType, setInputType] = useState("edg");
  const [graphType, setGraphType] = useState("undirected");
  const [error, setError]         = useState("");

  const parse = () => {
    setError("");
    try{
      setGraph(create(inputString, inputType, graphType));
      setShowGraph(true);
    } catch(err){
      setError(err.message.replace("JSON","Array"));
    }
  }

  if (showGraph)
    return <GraphElement
      graph={graph}
      inputString={inputString}
      graphType={graphType}
      inputType={inputType}
      isDirected={graphType === "directed"}
      setShowGraph={setShowGraph}
    />
  return (
    <Input
      setinputString={setinputString}
      parse={parse}
      inputString={inputString}
      setInputType={setInputType}
      inputType={inputType}
      setGraphType={setGraphType}
      graphType={graphType}
      format={inputFormat[inputType]}
      error={error}
    />
  );
}

export default App;
