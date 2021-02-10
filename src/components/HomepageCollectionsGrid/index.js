import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections, WideSection,OrangeBar } from './styles';


export function HomepageCollectionsGrid({ collections }) {
  const saleCollection = collections?.find(
    collection => collection.title === 'Coats'
  );
  const remainingCollections = collections?.filter(
    collection => collection.title !== 'Coats'
  );



  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        />
      )}
    <WideSection> <h3>  BEST SELECTION OF MADE FROM 
 ITALTY DESIGNED MENS WEAR 
IN THE WORLD FOR LESS </h3>
<OrangeBar> &nbsp;</OrangeBar>
 </WideSection>
      <RemainingCollections>
        {remainingCollections.map(collection => (
          <CollectionTile
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollections>
    </div>
  );
}