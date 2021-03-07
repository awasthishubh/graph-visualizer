import React from 'react';

function Input({ inputString,  setinputString, parse, setInputType, inputType}: any) {
    return (
        <form>
            <div><input type="radio" checked={inputType==="edg"} name="inputTupe" value="edg" onChange={()=>setInputType("edg")}/> Edges List</div>
            <div><input type="radio" checked={inputType==="adj"}name="inputTupe"  value="adj" onChange={()=>setInputType("adj")}/> Adjacency List</div>
            <div><textarea style={{resize: "none"}} value={inputString} onChange={(e) => setinputString(e.target.value)} /></div>
            <div><button onClick={parse}>Submit</button></div>
        </form>
    );
}

export default Input;
