import React from 'react';

function Input({ inputString,  setinputString, parse}: any) {
    return (
        <div>
            <input value={inputString} onChange={(e) => setinputString(e.target.value)} />
            <button onClick={parse}>Submit</button>
        </div>
    );
}

export default Input;
