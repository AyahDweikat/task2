import React, { Component } from 'react'
import App from './App'
export default class Comp extends Component {
  render() {
    return (
        <App arr={[{name: 'Ahmad', age: 30},
        {name: 'Shatha', age: 14},
        {name: 'Rana', age: 22},
        {name: 'Osama', age: 22},
        {name: 'Ahmad', age: 38}]} />
    )
  }
}
