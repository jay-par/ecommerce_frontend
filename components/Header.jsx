import Link from 'next/link';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';

const linkStyle = {
  marginRight: 15,
  fontWeight: 700
};

const Header = props => {
  return (
    <div className="topbar">
      <div className="left">
        <h1>Sunglasses Inc.</h1>
        <h1>Price in cart: {props.items.reduce((origPrice, product) => origPrice + product.price, 0)}</h1>
      </div>
      <div className="right">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/cart">
          <a style={linkStyle}>
            <i className="shop icon" />({props.items.length})
          </a>
        </Link>
      </div>
      <style jsx>{`
        .topbar {
          padding: 10px;
          width: inherit;
          display: flex;
          justify-content: space-between;
        }

        a {
          color: black;
          font-size: 18px;
        }

        .right {
          margin-top: auto;
          margin-bottom: auto;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = state => {
  return { items: state.items };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatching ', dispatch);
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
