import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>Sunglasses Inc.</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    </Head>
    <Header />

    {props.children}
  </div>
);

export default Layout;
