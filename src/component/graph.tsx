import React from 'react';
import Graph from 'vis-react';

function GraphElement({ graph, isDirected }: any) {
  return (
    <div className="App" style={{height:"100vh"}}>
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
