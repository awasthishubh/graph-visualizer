import React from 'react';
import Graph from 'vis-react';

function GraphElement({graph}:any) {
  return (
    // @ts-ignore
      <Graph
        graph={graph}
        />
    // <div>vrvr</div>
  );
}

export default GraphElement;
