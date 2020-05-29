import React, { Component } from 'react';
import axios from 'axios'
import Form from './components/Form'
import './App.css';
import Dashboard from './components/Dashboard';
import Product from './components/Product'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addInventory = this.addInventory.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data, 
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

    addInventory(name, img_url, price){
    const body = {name, img_url, price}
    axios.post(`/api/inventory`, body)
    .then(res => {
      this.setState({
        inventory:res.data
      })
      
    })
  }

  render(){
    return (
      <div className="App">
        <Dashboard product={this.state.inventory}/>
        <Form addInventory={this.addInventory}/>
        <Product/>
      </div>
    );
  }
}


export default App;
