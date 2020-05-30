import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className="item">
        <p>Product</p>
        <p>name: {this.props.name}</p>
        <img src={this.props.img_url}/>
        <p>Price: {this.props.price}</p>
        <button>edit</button>
        <button>delete</button>
      
      </div>
    )
  }
}
