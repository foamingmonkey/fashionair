import React from 'react';
import {CollectionTile} from '../CollectionTile';

export function HomepagecollectionsGrid ({ collections }) {
    return(
  <div> 
    {collections.map(collection => (
      <CollectionTile
        title={collection.title}
        description={collection.description}
        backgroundImage={collection.image.localFile.ChildImageSharp.fluid}
        key={collection.shopifyId} />

))} 
</div>
    );
}

