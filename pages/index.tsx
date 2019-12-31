import Layout from '../components/MainLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import { getProducts } from '../apis/backend';

const PostLink = ({ product }) => (
  <li>
    <Link href="/p/[_id]" as={`/p/${product._id}`}>
      <a>{product.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Image = props => {
  return <img {...props} style={{ maxWidth: '100%' }} />;
};

const Index = props => {
  console.log('props', props);
  return (
    <Layout>
      <Image src="https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU2Mjk4fQ" />
      <ul>
        {props.products.map(product => (
          <li key={product.name}>
            <PostLink product={product} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const { data } = await getProducts();

  console.log(`Product data fetched. Count: ${data.length}`);

  return {
    products: data
  };
};

export default Index;
