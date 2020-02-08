import Layout from '../components/MainLayout';

import { getProducts } from '../apis/backend';

import ProductCard from '../components/ProductCard';
import Image from '../components/Image';

const Index = props => {
  return (
    <Layout>
      <div className="hero">
        <Image src="https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU2Mjk4fQ" />
      </div>
      <div className="catalog">
        {props.products.map(product => (
          <div key={product.name}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .catalog {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 0 10px;
          grid-row-gap: 15px;
        }

        .product-card {
          width: 250px;
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
