import Layout from '../../components/MainLayout';
import Markdown from 'react-markdown';
import { getProductById } from '../../apis/backend';

function Image(props) {
  return <img {...props} style={{ maxWidth: '100%' }} />;
}

const Post = props => {
  return (
    <Layout>
      <div className="markdown">
        <Markdown
          source={`
### ${props.product.name}
${props.product.description.replace(/<[/]?[pb]>/g, '')}

![${props.product.name}](${props.product.imageUrl})
      `}
          renderers={{ image: Image }}
        />
      </div>

      <style jsx global>
        {`
          .markdown {
            margin-top: 20px;
            font-family: 'Arial';
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const data = await getProductById(id);
  return { product: data };
};

export default Post;
