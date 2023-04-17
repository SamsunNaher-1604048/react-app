import React from "react";
import * as ReactDOMClient from 'react-dom/client';
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

class Clock extends React.Component{
  render(){
    return(
      <h1 className="heading">
        <p>{this.props.children}</p>
        <span className="text">{new Date().toLocaleTimeString(this.props.local)}</span>
      </h1>
    )
  }
}

root.render(<Clock local="bn-BD">Nishi</Clock>);
