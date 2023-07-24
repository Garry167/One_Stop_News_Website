import React, { Component } from 'react'
import loading_1 from './loading_1.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading_1} alt="loading" />
      </div>
    )
  }
}
export default Spinner
