import React, { Component } from 'react';
import Link from 'next/link';

import Image from './Image';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';

class ProductCard extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div>
        <div className="ui card">
          <div className="image">
            <Image src={this.props.product.imageUrl} className="thumbnail" />
          </div>
          <Link href="/p/[_id]" as={`/p/${this.props.product._id}`}>
            <div className="content">
              <a className="header">{this.props.product.name}</a>
              <div className="meta">
                <span className="price">${this.props.product.price}</span>
              </div>
              <div className="description">{this.props.product.description}</div>
            </div>
          </Link>
          <div
            className="ui teal button"
            onClick={() => {
              this.handleClick(this.props.product);
            }}
          >
            <i className="shop icon"></i>Put into Cart
          </div>
        </div>

        <style jsx>{`
          a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
          }

          a:hover {
            opacity: 0.6;
          }
          .product-info {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
