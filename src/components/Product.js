import React, { Component } from 'react'

export default class Product extends Component {
 
  render() {
    // let { id, name, price, img } = props.item; // note not sure if i need this for the edit button below or not come back if needed
    return (
      <div className="item">
        <p>Product</p>
        <p>name: {this.props.name}</p>
        <img className="product-img" src={this.props.url}/>
        <p>Price:{this.props.price}</p>
        <button onClick={() => this.props.select(this.props.item)}>edit</button>
        <button onClick={() => this.props.delete(this.props.id)}>delete</button>
      </div>
    )
  }
}
