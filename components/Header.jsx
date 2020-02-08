import Link from 'next/link';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';

const linkStyle = {
  marginRight: 15,
  fontWeight: 700
};

const Header = props => {
  console.log('header props', props.items);
  return (
    <div className="topbar">
      <div className="left">
        <h1>Sunglasses Inc.</h1>
        <h1>Items in cart: {props.items.length}</h1>
        <h1>Price in cart:</h1>
      </div>
      <div className="right">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/cart">
          <a style={linkStyle}>Cart</a>
        </Link>
      </div>
      <style jsx>{`
        .topbar {
          padding: 10px;
          width: inherit;
          display: flex;
          justify-content: space-between;
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
