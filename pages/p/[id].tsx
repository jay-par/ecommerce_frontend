import Layout from '../../components/MyLayout';
import Markdown from 'react-markdown';
import { getProductById } from '../../apis/backend';

function Image(props) {
  return <img {...props} style={{ maxWidth: '100%' }} />;
}

const Post = props => {
  console.log('props', props);
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
  console.log('id', id);
  const data = await getProductById(id);
  console.log(`Fetched producat: ${data}`);

  return { product: data };
};
// Post.getInitialProps = async function(context) {
//   console.log('contrext', context);
//   const { data } = await getProductById(context.query);

//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.image.medium}`);

//   return { show };
// };

export default Post;
