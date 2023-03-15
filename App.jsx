import React, { Component } from 'react'
import User1 from './states/User1'
import JSON from "./user.json"

export default class App extends Component {
  constructor(){
    super()
    this.state={
      json:JSON
    }
  }
  render() {
    return (
      <div>
        <User1 data={this.state.json}/>
      </div>
    )
  }
}
