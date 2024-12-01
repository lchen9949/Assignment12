import React, { Component, useState }from 'react';
import PropTypes from 'prop-types';
import Filters from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import ProductRow from './ProductRow';

export const productList = {
  '1': {id: 1, category: 'Funiture', price: '$100', name: 'Bean Bag'},
  '2': {id: 2, category: 'Funiture', price: '$899', name: 'Chaise Lounge'},
  '3': {id: 3, category: 'Music', price: '$459.99', name: 'Clarinet'},
  '4': {id: 4, category: 'Funiture', price: '$1300', name: 'Dining Table'},
  '5': {id: 5, category: 'Music', price: '$11,000', name: 'Fortepiano'},
  '6': {id: 6, category: 'Music', price: '$5,000', name: 'Harpsicord'}
};

  
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productList,
      filter: "",
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);

  }

  handleFilter = (searchTerm) => {
    const lowercasedFilter = Object.values(searchTerm)[0].toLowerCase();
    this.setState({filter: lowercasedFilter});
  }
  
    // Add new product to the list
  handleAddProduct (NewProduct) {
    if (!NewProduct.id) {
      NewProduct.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[NewProduct.id] = NewProduct
      return {products:products}
    });
  }

  handleDestroy(productId) {
    console.log(productId);
    this.setState((prevState) => {
         let products = prevState.products
         delete products[productId]
         return {products:products}
    });
}
  
  render () {
    return (
      <div className="ms-4 me-4" >
        <h2>My Inventory</h2>
  
        <Filters onFilter={this.handleFilter}  />
  
        <ProductTable products={this.state.products} filter={this.state.filter} onDestroy={this.handleDestroy}  />
  
        <ProductForm onSave={this.handleAddProduct}  />
  
      </div>
    );
  }

  }

  export default Products;