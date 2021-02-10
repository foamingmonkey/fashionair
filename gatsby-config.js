require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `FIORI DI LUSSO`,
    description: `mens wear made in Italy and sold in west LA  .`,
    author: `Anthony Morlett`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:400`,
          'montserrat:400i',
          `montserrat\:700`,
          'montserrat:700i',
          `montserrat\:800`,
          'montserrat:800i',
          `neuton\:400`,
          'neuton:400i',
          `neuton\:700`,
          'neuton:700i',
          `neuton\:800`,
          'neuton:800i',
         
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
