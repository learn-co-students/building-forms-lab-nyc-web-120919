// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <p>
            <label>Band Input</label>
            <input onChange={this.handleChange} type='text' value={this.state.text}/>
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}


export default BandInput;
