import React from 'react';
import Graph from 'vis-react';

function GraphElement({ graph, isDirected, setShowGraph }: any) {
  return (
    <div className="App" style={{ height: "100%" }}>
      <button className="center-button btn btn-dark"><span className="reload" onClick={() => setShowGraph(false)}>&#x21bb;</span></button>
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
