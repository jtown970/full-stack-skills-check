import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: false,
      name: '',
      imgUrl: '',
      price: 0
    }
    
  }



  // toggleAdd(){
  //   this.setState({
  //     isAdding: !this.state.isAdding
  //   })
  // }

  addInventory(name, img_url, price){
    const body = {name, img_url, price}
    axios.post(`/api/inventory`, body)
    .then(res => {
      this.setState({
        inventory:res.data
      })
    this.props.getAllProducts();

    })
  }

  handleName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleImgUrl(e){
    this.setState({
      imgUrl: e.target.value
    })
  }

  handlePrice(e){
    this.setState({
      price: e.target.value
    })
  }

  handleSaveAdd(){ // note add destuc
    this.addInventory( this.state.name, this.state.imgUrl, this.state.price)
    this.toggleAdd()
  }

  render() {
    return (
      <div className="form">
        {/* {!this.state.isAdding ? (
          <button onClick={() => this.toggleAdd()}>Add Product</button>
        ) : ( */}
          <div>
            <p>Product Name:</p>
            <input placeholder="Product Name" onChange={(e) => this.handleName(e)} />
            <p>Image URL:</p>
            <input placeholder="Image Url" onChange={(e) => this.handleImgUrl(e)} />
            <p>Price:</p>
            <input placeholder="Price" onChange={(e) => this.handlePrice(e)} />
            <br></br>
            <button onClick={() => this.handleSaveAdd()} >Add</button>
            <button onClick={() => this.toggleAdd() } >Cancel</button>
          </div>
        {/* )} */}
      </div>
    )
  }
}
