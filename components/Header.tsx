import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontWeight: 700
};

const Header = () => (
  <div className="topbar">
    <div className="left">
      <h1>Sunglasses Inc.</h1>
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
      .left {
      }
      .right {
        margin-top: auto;
        margin-bottom: auto;
      }
    `}</style>
  </div>
);

export default Header;
