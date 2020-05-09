import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'



class BandsContainer extends Component {

  
  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })


const mapStateToProps = state =>{
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
