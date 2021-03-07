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
  const [graphType, setGraphType] = useState("directed");

  const parse = () => {
    setGraph(create(inputString, inputType, graphType));
    setShowGraph(true);
  }

  if (showGraph)
    return <GraphElement
      graph={graph}
      inputString={inputString}
      graphType={graphType}
      inputType={inputType}
      isDirected={graphType === "directed"}
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
    />
  );
}

export default App;
