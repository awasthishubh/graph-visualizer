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
  const [is0,setIs0]= useState(false);

  const parse = () => {
    setError("");
    try {
      setGraph(create(inputString, inputType, graphType, isWeighted,is0));
      setShowGraph(true);
    } catch (err) {
      console.error(err)
      setError(err.message.replace("JSON", "Array"));
    }
  }
  console.log(is0)

  if (showGraph)
    return <GraphElement
      graph={graph}
      inputString={inputString}
      graphType={graphType}
      inputType={inputType}
      isDirected={graphType === "directed"}
      isWeighted={isWeighted}
      setShowGraph={setShowGraph}
      is0={is0}
    />
  let f=isWeighted?inputFormat.w[inputType]:inputFormat.unw[inputType]
  if(is0){
    f=JSON.parse(JSON.stringify(f).split('').map((e:any)=> (e!==' ' && !isNaN(e))? parseInt(e)-1: e).join(""))
  }
  const props={
    isWeighted, setIsWeighted,setinputString,
    parse,inputString,setInputType, is0,setIs0,
    inputType,setGraphType,graphType,error,
    format:f
  }
  return  <Input {...props} /> ;
}

export default App;
