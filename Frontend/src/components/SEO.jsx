import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = 'My App', type = 'website' }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | My App</title>
      <meta name="description" content={description} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
