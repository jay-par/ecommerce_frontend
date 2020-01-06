import Header from './Header';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>Sunglasses Inc.</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    </Head>
    <div className="site">
      <Header />

      {props.children}
    </div>
    <style jsx>
      {`
        max-width: 1500px;
        margin: auto;
        .site {
          margin-left: 20px;
          margin-right: 20px;
        }
      `}
    </style>
  </div>
);

export default Layout;
