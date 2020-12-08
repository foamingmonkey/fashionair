import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { CollectionTileWrapper, CollectionTileContent,Title, Description } from './styles';


export function CollectionTile({description, title, backgroundImage }){
    
    
    
    return (

        
        <CollectionTileWrapper> 
      
            <BackgroundImage fluid={backgroundImage} />
            <CollectionTileContent> 
                <Title>  {title} </Title>
           <Description> {description} </Description>
            </CollectionTileContent>

        </CollectionTileWrapper>
    );
}