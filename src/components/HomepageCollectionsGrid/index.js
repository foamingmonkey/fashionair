import React from 'react';
import {CollectionTile} from '../CollectionTile';
import { RemainingCollections} from './styles';


export function HomepageCollectionsGrid ({ collections}) {
  const bigCollection = collections.find (collection => collection.title === 'Kiton');
  const remainingCollections = collections.filter(collection => collection.title !== 'Kiton');


  return(
  <div> 
{!!bigCollection && (
  <CollectionTile
  title={bigCollection.title}
        description={bigCollection.description}
      backgroundImage={bigCollection.image.localFile.childImageSharp.fluid}
     /> 
 )}
 <RemainingCollections> 
    {remainingCollections.map(collection => (
      <CollectionTile
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

