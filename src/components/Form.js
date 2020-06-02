import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      // isAdding: false,
      // resetForm: '',
      id: null,
      name: '',
      // imgUrl: '',
      img: '',
      price: 0,
      // edit: false
    } 
  }


  componentDidUpdate(replace) {
    let { id, name, price, img } = this.props.select;
    if (replace.select.id !== this.props.select.id) {
      this.setState({ id, name, price, img, edit: true });
    }
  }

  handleSend(){
    let {name, price, img } = this.state;
    if(name){
      let body ={
        name,
        price,
        img
      }
      axios.post(`/api/inventory`, body)
      .then(res => {
        this.props.getAllProducts()
        this.clearInput()
      })
    }
  }

  handleEdit() {
    let { id, name, price, img} = this.state
    if(name){
      let body = {
        name, 
        price,
        img
      }
      axios.put(`/api/inventory/${id}`, body)
      .then(res => {
        this.props.getAllProducts()
        this.clearInput()
      })
    }
  }

  clearInput(){
    if(this.state.id){
      this.props.select({})
    }
    this.setState({
      id: null,
      name: '',
      price: 0,
      img: ''
    })
  }
  imageInput(url) {
    var img = new Image();
    img.onload = _ => this.setState({ img: url });
    img.onerror = _ => this.setState({ img: '' });
    img.src = url;
  }

  // Validates name length
  nameInput(text) {
    if (text.length <= 20) {
      this.setState({ name: text })
    }
  }
    // Validates the number input for the price field
    numberInput(val) {
      // Automatically adds a zero to the dollars postition if '.' is the first thing in the input
      if (val[0] === '.') {
        val = '0' + val
      }
      // Only allows number input
      if (isNaN(Number(val))) {
        return;
      }
      // Splits dollars and cents apart for individual testing
      let chop = val.split('.');
      let dollars = chop[0];
      let cents = chop[1];
      // Doesn't allow for dollar amounts to be entered that have unnecessary zeros in the dollar amount
      if (dollars[0] === '0') {
        dollars = '0'
      }
      // Allows user to enter a '.' to begin adding cents
      if (val.indexOf('.') !== -1) {
        dollars += '.'
      }
      // Limits cent input to two decimal places
      if (cents && cents[1]) {
        cents = cents[0] + cents[1];
        val = dollars + cents;
      } else if (!cents) {
        val = dollars;
      }
      // Limits input size so price fits in db
      if (Number(val) * 100 >= 2147483647) {
        return;
      }
      // Updates state once input is validated
      this.setState({ price: val })
    }

  numberSubmit(num) {
    num ? num = Number(num) : num = 0
    return Math.round(num * 100)
  }


  // toggleAdd(){
  //   this.setState({
  //     isAdding: !this.state.isAdding,
  //     // resetForm: this.state.resetForm.reset()
  //   })
  // }

  // addInventory(name, img_url, price){
  //   const body = {name, img_url, price}
  //   axios.post(`/api/inventory`, body)
  //   .then(res => {
  //     this.setState({
  //       inventory:res.data
  //     })
  //   this.props.getAllProducts();

  //   })
  // }

  // editInventory(id, name, img_url, price){
  //   const body = {id, name, img_url, price}
  //   axios.put(`/api/inventory/:${id}`, body)
  //   .then(res => {
  //     this.setState({
  //       inventory: res.data
  //     })
  //   }).catch(err => window.alert(`sh*t happens when editing`, err))
  // }

  // handleName(e){
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  // handleImgUrl(e){
  //   this.setState({
  //     imgUrl: e.target.value
  //   })
  // }

  // handlePrice(e){
  //   this.setState({
  //     price: e.target.value
  //   })
  // }

  // handleSaveAdd(){ // note add destuc
  //   this.addInventory( this.state.name, this.state.imgUrl, this.state.price)
  //   this.toggleAdd()
  // }

  render() {
    return (
      <div className="form">
        {this.state.img
        ? <div className='form_img_preview' style={{ backgroundImage: `url('${this.state.img}')` }}></div>
        : <div className='form_img_preview' style={{ backgroundImage: `url('Placeholder-img goes here')` }}></div>}
        <p>Image URL:</p>
        <input type='text' value={this.state.img} onChange={e => this.imageInput(e.target.value)} />
        <p>Product Name:</p>
        <input type='text' value={this.state.name} onChange={e => this.nameInput(e.target.value)} />
        <p>Price:</p>
        <input type='text' pattern="[0-9]*" value={this.state.price} onChange={e => this.numberInput(e.target.value)} />
        <div className='form_button_box'>
        <button onClick={_ => this.clearInputs()}>Cancel</button>
          {this.state.id
            ? <button onClick={_ => this.handleEdit()}>Save Changes</button>
            : <button onClick={_ => this.handleSend()}>Add to Inventory</button>
          }
        </div>


        {/* {!this.state.isAdding ? (
          <button onClick={() => this.toggleAdd()}>Add Product</button>
        ) : (
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
         )}  */}
      </div>
    )
  }
}
