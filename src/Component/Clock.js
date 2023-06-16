import React from "react";
import Button from "./Button";

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            date: new Date(),
            local:'bn-BD'
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.trick()
        },1000)
    }

    trick(){
        this.setState({
            date: new Date()
        })
    }
     
    hendelOnClick=(local)=>{
      this.setState({
        local:local,
      })
    }

  render(){
    const {date,local} = this.state
    console.log(local);

    return(
      <div>
          <h1 className="heading">
            <p>{this.props.children}</p>
            <span className="text">{date.toLocaleTimeString(local)}</span>
          </h1>
          {
            local === "bn-BD"?(<Button change={this.hendelOnClick} local="em-US"/>):(<Button change={this.hendelOnClick} local="bn-BD"/>)
          }
      </div>
    )
  }
}

export default Clock;