import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div>
        <p>Product</p>
    <p>name: {this.props.name}</p>
    <img src={this.props.img_url}/>
    <p>Price: {this.props.price}</p>
      </div>
    )
  }
}
