import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
    this.deleteProduct = this.deleteProduct.bind(this)
  }


deleteProduct(id){
  axios.delete(`/api/inventory/${id}`)
  .then(() => {
    this.props.getAllProducts();
  })
}

toggleEdit(){
  this.setState({
    isEditing: !this.isEditing
  })
}
  
  render() {
    const productMap = this.props.product.map((product, i) => (
      <Product key={i} name={product.name} url={product.img_url} price={product.price}  id={product.product_id} delete={this.deleteProduct} />
    ))
    return (
      <div>
        <p>Dashboard</p>
        {productMap}
      </div>
    )
  }
}
