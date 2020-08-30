require('dotenv').config()
/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'sohafidz',
    titleTemplate: '%s | Portfolio Page',
    description: 'A Gatsby starter for portfolio pages that uses Google Sheets as CMS',
    author: 'sohafidz',
    url: 'https://fidz.dev', // No trailing slash allowed!
    image: '/app-banner.png', // Path to your image you placed in the 'static' folder
    twitterUsername: 'sohafidz',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
        spreadsheetUrl: process.env.GATSBY_SHEET_URL,
        tabName: 'projects',
        cellRange: 'A1:D1000',
        majorDimension: 'ROWS',
      },
    },
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
        spreadsheetUrl: process.env.GATSBY_SHEET_URL,
        tabName: 'milestones',
        cellRange: 'A1:D1000',
        majorDimension: 'ROWS',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Page`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#F7FAFC`,
        theme_color: `#2B6CB0`,
        display: `standalone`,
        icon: `static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
