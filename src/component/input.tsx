import React from 'react';

function Input({ inputString, setinputString, parse, setInputType, inputType, setGraphType, graphType, format }: any) {
  return (
    <div className="input-container">
      <form>
        <div className="card container" style={{ margin: "auto" }}>
          <div>
            <h2 style={{ textAlign: "center", margin: 10 }}> Input Graph </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 input-item" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
              <div className="row">
                <div className="col-sm-5">
                  <h5>Input Type</h5>
                  <div><input type="radio" checked={inputType === "edg"} name="inputType" value="edg" onChange={() => setInputType("edg")} /> Edges List</div>
                  <div><input type="radio" checked={inputType === "adj"} name="inputType" value="adj" onChange={() => setInputType("adj")} /> Adjacency List</div>
                </div>
                <div className="col-sm-5">
                  <h5>Graph Type</h5>
                  <div><input type="radio" checked={graphType === "directed"} name="graphType" value="edg" onChange={() => setGraphType("directed")} /> Directed List</div>
                  <div><input type="radio" checked={graphType === "undirected"} name="graphType" value="adj" onChange={() => setGraphType("undirected")} /> Undirected List</div>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <h5>Input Array</h5>
                <textarea placeholder={format.ex} rows={5} style={{ padding: 10, resize: "none", width: "100%" }} value={inputString} onChange={(e) => setinputString(e.target.value)} />
              </div>
            </div>


            <div className="col-lg-6 col-sm-12 input-item">
              <h5>Input Format</h5>
              <p>
                {format.text}
              </p>
              <p>
                <b>Example:</b> <pre>{format.ex}</pre>
                {format.exp}
              </p>
            </div>
          </div>
          <div className="row">

          </div>
          <hr />
          {/* <div className="card-body input-items"> */}
          {/* <div className="row">
              <div className="col-lg-6 col-sm-12 input-item" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
                One of three columns
              </div>
              <div className="col-lg-6 col-sm-12 input-item">
                One of three columns
              </div>
            </div> */}
          {/* <div className="input-item" style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}>
              <div style={{ width: "100%" }}>
                <div>
                  <h5>Input Type</h5>
                  <div><input type="radio" checked={inputType === "edg"} name="inputType" value="edg" onChange={() => setInputType("edg")} /> Edges List</div>
                  <div><input type="radio" checked={inputType === "adj"} name="inputType" value="adj" onChange={() => setInputType("adj")} /> Adjacency List</div>
                </div>
                <hr />
                <div style={{ width: "100%" }}>
                  <h5>Input Array</h5>
                  <textarea rows={5} style={{ resize: "none", width: "100%" }} value={inputString} onChange={(e) => setinputString(e.target.value)} /></div>
                <hr />

                <div>
                  <h5>Graph Type</h5>
                  <div><input type="radio" checked={graphType === "directed"} name="graphType" value="edg" onChange={() => setGraphType("directed")} /> Directed List</div>
                  <div><input type="radio" checked={graphType === "undirected"} name="graphType" value="adj" onChange={() => setGraphType("undirected")} /> Undirected List</div>
                </div>
              </div>
            </div> */}
          {/* <div className="input-item">
              This is some text within a card body.
          </div> */}
          {/* </div> */}
          <div><button className="input-submit" onClick={parse}>Submit</button></div>
        </div>

      </form>
    </div>
  );
}

export default Input;
