import React, { Component, useState }from 'react';
import PropTypes from 'prop-types';
import { productList } from './Product';
import ProductRow from './ProductRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



  class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleDestroy(id) {
        this.props.onDestroy(id);
    }

    render () {
        const products = this.props.products;

        const rows = [];
        Object.keys(products).forEach((key) => {
            const product = products[key];
            if (product.name.toLowerCase().includes(this.props.filter)) {
                rows.push(
                    <ProductRow product={product} onDestroy={this.handleDestroy} />
                );
            }
        });
    
        return (
        <div>
            <table class="table table-striped">
            <thead>
                <tr className="table-dark">
                <th>name</th>
                <th>Category</th>
                <th>price</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            </table>
        </div>
        );
            
        }

  }

  export default ProductTable;