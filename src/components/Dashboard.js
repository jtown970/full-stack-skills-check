import React, { Component } from 'react'
// import axios from 'axios'
import Product from './Product'
// import {Link} from 'react-router-dom'

export default class Dashboard extends Component {




  render() {
    const productMap = this.props.product.map((product, i) => (
      <Product key={i} name={product.name} url={product.img_url} price={product.price} />
    ))
    return (
      <div>
        <p>Dashboard</p>
        {productMap}
      </div>
    )
  }
}
