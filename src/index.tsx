import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Graph Visualizer</a>
      <a className="github-button" href="https://github.com/awasthishubh/graph-visualizer" data-icon="octicon-star" data-size="large" aria-label="Star awasthishubh/graph-visualizer on GitHub">Star on GitHub</a>
    </nav>

    <div style={{ height: "calc(100vh - 56px)" }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
