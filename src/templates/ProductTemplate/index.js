/*eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery, ProductQuantityAdder } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 905) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function ProductTemplate(props) {
  const { getProductById } = React.useContext(CartContext);
  const [product, SetProduct] = React.useState(null);
  const [selectedVariant, SetSelectedVariant] = React.useState(null);

  const { search, origin, pathname } = useLocation();
  console.log(search, origin, pathname);
  const variantId = queryString.parse(search).variant;

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      SetProduct(result);
      SetSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    SetProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    SetSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?vairant=${encodeURIComponent(
        newVariant.id
      )}, replace:true`
    );
  };

  return (
    <Layout>
      <Grid>
        <div>
          <h1> {props.data.shopifyProduct.title}</h1>{' '}
          <p> {props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              <SelectWrapper>
                <strong> Size:</strong>

                <select
                  value={selectedVariant.id}
                  onChange={handleVariantChange}
                >
                  {product?.variants.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.title}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
              {!!selectedVariant && (
                <>
                  <Price>${selectedVariant.price}</Price>
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
      </Grid>
    </Layout>
  );
}
