import React from "react";

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {change:currentchange} = this.props;
        const {change:nextChange} = nextProps;

        if(currentchange === nextChange){
            return false;
        }return true;

    }
    render(){
        const {change,local} = this.props;
        console.log("button render");
        return(
            <button type="button" onClick={()=>change(local)}>CLICK ME</button>
        )
    }
}
export default Button;