import React from 'react';
import AlgoLinks from '../algoLinks'
function Input({ inputString, setinputString, parse,
  setinputFormat, inputFormat, setGraphType, graphType, format, error,
  isWeighted, setIsWeighted, setIs0, is0, inputType, setInputType
}: any) {
  return (
    // <div>
    <div className="input-container">
      {/* <form> */}
      <div className="card container">
        <div>
          <h2 style={{ textAlign: "center", margin: 10 }}> Input Graph </h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 input-item" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
            <div className="row">
              <div className="col-sm-6">
                <h5>Input Type</h5>
                <div><input type="radio" checked={inputType === "plain"} name="inputType" value="plain" onChange={() => {setinputFormat("edg");setInputType("plain")}} /> Plain Text</div>
                <div><input type="radio" checked={inputType === "array"} name="inputType" value="array" onChange={() => setInputType("array")} /> Array</div>
              </div>
              <div className="col-sm-6">
                <h5>Input Format</h5>
                <div><input type="radio" checked={inputFormat === "edg"} name="inputFormat" value="edg" onChange={() => setinputFormat("edg")} /> Edges List</div>
                {inputType==="plain"?<div/>:<div><input type="radio" checked={inputFormat === "adj"} name="inputFormat" value="adj" onChange={() => setinputFormat("adj")} /> Adjacency List</div>}
              </div>
              <div className="col-sm-6">
                <h5>Graph Type</h5>
                <div><input type="radio" checked={graphType === "undirected"} name="graphType" onChange={() => setGraphType("undirected")} /> Undirected List</div>
                <div><input type="radio" checked={graphType === "directed"} name="graphType" onChange={() => setGraphType("directed")} /> Directed List</div>
              </div>
              <div className="col-sm-6">
                <h5>Start Index</h5>
                <div><input type="radio" checked={is0 === false} name="is0" value="1" onChange={() => setIs0(false)} /> 1</div>
                <div><input type="radio" checked={is0 === true} name="is0" value="0" onChange={() => setIs0(true)} /> 0</div>
              </div>
            </div>
            <div style={{ width: "100%", margin: "10px 0px" }}>
              <input type="checkbox" onChange={(e) => { setIsWeighted(e.target.checked) }} checked={isWeighted} />    Is Graph Weighted?
            </div>
            <div style={{ width: "100%" }}>
              <h5>Input</h5>
              <textarea placeholder={format.ex} rows={5} style={{ padding: 10, resize: "none", width: "100%" }} value={inputString} onChange={(e) => setinputString(e.target.value)} />
            </div>
          </div>


          <div className="col-lg-6 col-sm-12 input-item">
            <h5>Input Format</h5>
            <pre style={{whiteSpace: "break-spaces"}}>
              {format.text}
            </pre>
            <b>Example:</b> <pre>{format.ex}</pre>
            <p>
              {format.exp}
            </p>
          </div>
        </div>
        <div className="row">

        </div>
        <hr />
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
        <div style={{ margin: "0 -15px", width: "calc(100% + 30px)" }}>
          <button style={{ borderRadius: "0px 0px 0.25rem 0.25rem" }} className="input-submit btn btn-primary" onClick={parse}>Submit</button></div>
      </div>
      <div>

      </div>

      {/* </form> */}
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-body">
          <h5 className="card-title">Useful Algorithms</h5>
          <h6 className="card-subtitle mb-2 text-muted">Links</h6>
          <div className="card-text">
            <ol>
              {(() => {
                return AlgoLinks.map((e,i) => <li key={i}> <a rel="noopener noreferrer" target="_blank" href={e.link} > {e.name}</a></li>)
              })()}
            </ol>
          </div>
          {/* <a href="#" className="card-link">Card link</a> */}
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </div>

  );
}

export default Input;
