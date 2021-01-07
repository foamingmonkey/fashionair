import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="Fiori di lusso mens wear from Italy"title ="Home page" />
      <HomepageCollectionsGrid collections={collections.filter(collection => collection.title !== 'Featured') ||
          []
        }
      />

      <FeaturedProducts />
    </Layout>
  );
};
export default IndexPage;
