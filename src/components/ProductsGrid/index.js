import React from 'react';
import { ProductGridWrapper } from './styles';
import {ProductsTile} from '../ProductTile';


export function ProductsGrid({ products }) {
  return (
    <ProductGridWrapper>
      {products.map(product => (
      <ProductsTile key={product.shopifyId} title={product.title}/>
      ))}
    </ProductGridWrapper>
  );
}
