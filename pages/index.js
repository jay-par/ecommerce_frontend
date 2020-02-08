import Layout from '../components/MainLayout';

import { getProducts } from '../apis/backend';

import ProductCard from '../components/ProductCard';
import Image from '../components/Image';

const Index = props => {
  return (
    <Layout>
      <div className="hero"></div>
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

        .hero {
          background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=edges&fit=crop&h=500&w=1500');
          height: 500px;
          margin-bottom: 20px;
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
