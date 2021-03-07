import React from 'react';

function Input({ inputString, setinputString, parse, setInputType, inputType, setGraphType, graphType }: any) {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <form>
        <div><input type="radio" checked={inputType === "edg"} name="inputType" value="edg" onChange={() => setInputType("edg")} /> Edges List</div>
        <div><input type="radio" checked={inputType === "adj"} name="inputType" value="adj" onChange={() => setInputType("adj")} /> Adjacency List</div>

        <div><textarea style={{ resize: "none" }} value={inputString} onChange={(e) => setinputString(e.target.value)} /></div>

        <div><input type="radio" checked={graphType === "directed"} name="graphType" value="edg" onChange={() => setGraphType("directed")} /> Directed List</div>
        <div><input type="radio" checked={graphType === "undirected"} name="graphType" value="adj" onChange={() => setGraphType("undirected")} /> Undirected List</div>
        <div><button onClick={parse}>Submit</button></div>
      </form>
    </div>
  );
}

export default Input;
