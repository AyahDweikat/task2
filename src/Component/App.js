import './App.css';
// import Comp from './Comp';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    Names: [],
    Ages: []
  }
  constructor(props){
    super(props);
    const arr = props.arr;
    let filtArrN= arr.map(function(item){
      return item.name;
    })
    var uniqNames=[];
    for(let i=0; i<filtArrN.length; i++){
      if(!(uniqNames.includes(filtArrN[i]))){
        uniqNames.push(filtArrN[i]);
        this.state.Names=uniqNames;
      }
    }
    ////////////////////////////////
    let filtArrA= arr.map(function(item){
      return item.age;
    })
    var uniqAges=[];
    for(let i=0; i<filtArrA.length; i++){
      if(!(uniqAges.includes(filtArrA[i]))){
        uniqAges.push(filtArrA[i]);
        this.state.Ages=uniqAges;
      }
    } 
  }
  deleteList() {
    this.setState({
      Names:this.state.Names.slice(0, this.state.Names.length-1),
      Ages:this.state.Ages.slice(0, this.state.Ages.length-1)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.deleteList.bind(this)}>Delete Items</button>
        <div className='lists'>
          <div><ul>{this.state.Names.map((item, idx)=> {return <li key={idx}>{item}</li>})}</ul></div>
          <div><ul>{this.state.Ages.map((item, idx)=> {return <li key={idx}>{item}</li>})}</ul></div>
        </div>
      </div>
    )
  }
}
