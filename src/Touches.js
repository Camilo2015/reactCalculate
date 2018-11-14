import React from 'react';
import "./style.css";
class Case extends React.Component {
    render() {
        const { children, ...rest } = this.props;
        return ( 
        < div className = "lesTouches" { ...rest
        } >
        {children} </div>
        )
    }
}
export default Case; 