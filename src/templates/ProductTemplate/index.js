/*eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery, ProductQuantityAdder, Button, SEO} from 'components';
import { Grid, SelectWrapper, Price, RetailPrice, FullPriceColumn } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';



export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
  ...ShopifyProductFields
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

  const handleVariantChange = (e) => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    SetSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?vairant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
     <SEO
     description = {props.data.shopifyProduct.description}
     title = {props.data.shopifyProduct.title}/>

      <Button onClick={()=> navigate(-1)} > Back to Product </Button>
      <Grid>
        <div>
          <h1> {props.data.shopifyProduct.title}</h1>

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
                <FullPriceColumn> 
                  <RetailPrice> ${selectedVariant.compareAtPrice}</RetailPrice>

                  <Price><span> Price: &nbsp;</span>${selectedVariant.price}</Price>
                  <div className="discount">
                    <span> Save </span>
                    {(selectedVariant.price / selectedVariant.compareAtPrice)  *
                      100} 
                      {' '}
                    %
                  </div>
                  </FullPriceColumn>
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}

          <div>
            <h5>General Info </h5>
            <p> {props.data.shopifyProduct.description}</p>
            
          </div>
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
