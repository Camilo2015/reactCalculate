import React from 'react';
import "./style.css";
class Resultats extends React.Component{
    render(){
        const { children, ...rest} = this.props; 
        return(
            <div className="resultat" {...rest}>
            {children}
            </div>
        )
    }
}
export default  Resultats; 