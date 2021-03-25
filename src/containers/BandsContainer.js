import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  renderBands = () => {
   return this.props.bands.map(band => <li>{band.name}</li>) // can be its own component
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
