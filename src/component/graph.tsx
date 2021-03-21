import React from 'react';
import Graph from 'vis-react';

function GraphElement({ inputString, graph, inputFormat, isDirected, setShowGraph, isWeighted, is0 }: any) {
  return (
    <div className="App" style={{ height: "100%" }}>
      <div style={{ textAlign: "center", height: 55 }}>
        <b>Input Type:</b> {inputFormat === "edg" ? "Edges List" : "Adjacency List"}&emsp;&emsp;
        <b>Graph Type:</b> {isDirected ? "Directed" : "Undirected"}&emsp;&emsp;
        <b>isWeighted:</b>{isWeighted ? "True" : "False"}&emsp;&emsp;
        <b>Start Index:</b>{is0 ? "0" : "1"} <br />
        <b>Input</b> {inputString}
      </div>
      {/* <div> */}
      <div style={{height: "calc(100% - 105px)"}}>
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
      <div style={{ textAlign: "center", height: 20 }}>
        <button className="center-button btn btn-primary" onClick={() => setShowGraph(false)}><span className="reload">&#x21bb;</span></button>
      </div>
    </div>
  );
}

export default GraphElement;
