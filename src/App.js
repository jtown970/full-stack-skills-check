import React, { Component } from 'react';
import axios from 'axios'
import Form from './components/Form'
import './App.css';
import Dashboard from './components/Dashboard';
// import Product from './components/Product'
import Header from './components/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      selected: {}
      
    }
    this.getAllProducts = this.getAllProducts.bind(this)
    this.editSelect = this.editSelect.bind(this)
    
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

  editSelect(product) {
    this.setState({
      selected: product
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="body">
          <Dashboard select={this.editSelect} product={this.state.inventory} getAllProducts={this.getAllProducts}/>
          <Form getAllProducts={this.getAllProducts}  select={this.editSelect} current={this.state.selected}/>
          {/* <Product/> */}
        </div>
      </div>
    );
  }
}


export default App;
