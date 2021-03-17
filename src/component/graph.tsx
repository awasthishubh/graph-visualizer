import React from 'react';
import Graph from 'vis-react';

function GraphElement({ inputString, graph, inputType, isDirected, setShowGraph,isWeighted,is0 }: any) {
  return (
    <div className="App" style={{ height: "100%" }}>
      <button className="center-button btn btn-dark"><span className="reload" onClick={() => setShowGraph(false)}>&#x21bb;</span></button>
      <div style={{textAlign: "center"}}>
      <b>Input Type:</b> {inputType==="edg"?"Edges List":"Adjacency List"}&emsp;&emsp;
      <b>Graph Type:</b> {isDirected?"Directed":"Undirected"}&emsp;&emsp;
      <b>isWeighted:</b>{isWeighted?"True":"False"}&emsp;&emsp;
      <b>Start Index:</b>{is0?"0":"1"} <br/>
      <b>Input Array</b> {inputString}
      </div>
      {/* @ts-ignore */}
      <Graph
        options={{
          edges: {
            arrows: {
              to: {
                enabled: isDirected,
              }
            }
          }
        }}
        graph={graph}
      />
    </div>
  );
}

export default GraphElement;
