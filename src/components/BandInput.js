import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleOnChange} value={this.state.name} ></input>
      </form>
    )
  }
}

export default BandInput

