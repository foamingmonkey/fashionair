import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <HomepageCollectionsGrid
        collection={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
    </Layout>
  );
};
export default IndexPage;
