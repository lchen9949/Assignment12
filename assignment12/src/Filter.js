import React, { Component, useState }from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value =e.target.value;
        const name =e.target.name;
        this.props.onFilter({ [name]: value});
      }
      render() {
        return (
            <div>
              <form >
                <input className="form-control w-100" type="text" name="searchTerm" placeholder="Search..." onChange={this.handleChange} />
              </form>
              <br />
            </div>
          );
      }
}

  export default Filters;