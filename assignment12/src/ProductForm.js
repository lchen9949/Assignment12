import React, { Component, useState }from 'react';
import PropTypes from 'prop-types';


const RESET_VALUES = { id: '', category: '', price: '', name: ''};

class ProductForm extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSave = (e) => {
            this.props.onSave(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            });   
            e.preventDefault();
        }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        });
    }

    render () {
        const { product } = this.state;
        return (
            <section>
            <h3>Add a new product</h3>
            <form onSubmit={this.handleSave}>
            <div>
                <label>Name<br />
                <input type="text" value={this.state.product.name} name='name' onChange={this.handleChange} required /><br />
                </label>
                <br /><br />
            </div>
            <div>
                <label>Category<br />
                <input type="text" value={this.state.product.category} name='category' onChange={this.handleChange} required /><br />
                </label>
                <br /><br />
            </div>
            <div>
                <label>Price<br />
                <input type="text" value={this.state.product.price} name='price' onChange={this.handleChange} required /><br />
                </label>
                <br /><br />
            </div>
            <div>
                <button type="submit" class="btn btn-success" onClick= {this.handleSave}>Save</button>
            </div>
            </form>
        </section>

        );
}

}

  export default ProductForm;