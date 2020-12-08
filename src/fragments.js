import {graphql} from 'gatsby';

export const productFields = graphql`
         fragment ShopifyProductFields on ShopifyProduct {
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
           productType
         }
       `;