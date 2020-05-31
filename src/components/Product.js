import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    
    return (
      <div className="item">
        <p>Product</p>
        <p>name: {this.props.name}</p>
        <img className="product-img" src={this.props.url}/>
        <p>Price:{this.props.price}</p>
        <button>edit</button>
        <button onClick={() => this.props.delete(this.props.id)}>delete</button>
      
      </div>
    )
  }
}
