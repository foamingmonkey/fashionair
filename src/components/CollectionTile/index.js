import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { CollectionTileWrapper, CollectionTileContent,Title, Description } from './styles';
import {StyledLink} from '../StyledLink';

export function CollectionTile({
    destination,description, title, backgroundImage,sale }){
    
    return (

        
        <CollectionTileWrapper> 
     
            <BackgroundImage fluid={backgroundImage} to={destination} />
            <CollectionTileContent> 
            
            <div> 
                <Title sale={sale}>  {title} </Title>
           <Description sale={sale}> {description} </Description>
           <StyledLink to={destination}> Shop now </StyledLink>
           </div>
            </CollectionTileContent>

        </CollectionTileWrapper>
      
    );
}