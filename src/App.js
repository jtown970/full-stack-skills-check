import React, { Component } from 'react';
import axios from 'axios'
import Form from './components/Form'
import './App.css';
import Dashboard from './components/Dashboard';
import Product from './components/Product'
import Header from './components/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.getAllProducts = this.getAllProducts.bind(this)
  }

  componentDidMount(){
    this.getAllProducts();
    
  }

  getAllProducts(){
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data, 
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="body">
          <Dashboard product={this.state.inventory}/>
          <Form getAllProducts={this.getAllProducts}/>
          {/* <Product/> */}
        </div>
      </div>
    );
  }
}


export default App;
