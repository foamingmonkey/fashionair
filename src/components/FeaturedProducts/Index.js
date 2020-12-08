import React from 'react';
import ProductContext from 'context/ProductContext';
import {ProductsGrid} from '../ProductsGrid';
 
export function FeaturedProducts(){
const {collections} = React.useContext (ProductContext);

const FeaturedCollection = collections.find( 
    collection => collection.title === 'Kiton'); 


return (
    <section>
        <h1> Featured hats</h1>
        <ProductsGrid products={FeaturedCollection.products}/>
    </section>
)

}