import React from 'react';
import ReactDom from 'react-dom';
import "./style.css";
import Case from './Touches'; 
import Resultats from './Resultats'; 

class Calculette extends React.Component {
    constructor(props){
        super(props); 
        this.state={
            resultat: 0, 
            operations:[]
        }
        this.calculate = this.calculate.bind(this); 
        this.addOperation = this.addOperation.bind(this); 
    }
    calculate(){
        const { operations } = this.state; 
        console.log('calculated = ' + eval(operations.join('')));
        this.setState({
            operations:[Math.fround(eval(operations.join('')))]
        })
        this.setState({
            resultat: eval(operations.join(''))
        })
    }
    
    addOperation(op){
        this.setState({
            operations: this.state.operations.concat(op),
            resultat: this.state.operations.concat(op)
        });
        console.log('numéro à adtionner '+ op); 
    }
    renewInfo(){
        this.setState({
            operations:[], 
            resultat:0
        })
    }
    render() {
        return ( <div className = "calculette" >
            <h1 className="titleCalc"> Ma calculette </h1>
                 <Resultats>{this.state.resultat}</Resultats>
                <div className="laTouche">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9,  0, '.'].map((c) => <Case key={c} onClick={() =>this.addOperation(c)}> {c}</Case>)}
                <Case className="result" onClick={this.calculate}>= </Case>
                </div>
                <div className="operateurs">
                {['/', '*', '-', '+'].map((c)=><Case key={c} onClick={()=> this.addOperation(c)}>{c}</Case>)}
                <div className="renew" onClick={()=> this.renewInfo()}>CE</div></div>
                
                
            </div>
        );
    }
}
ReactDom.render( <Calculette /> ,
    document.getElementById('app')
);