module.exports = {
  siteMetadata: {
    // edit below
    title: `DanGoslen.me`,
    author: `Dan Goslen`,
    description: `Personal Site for Dan Goslen`,
    siteUrl: `https://dangoslen.me`,
    social: {
      twitter: `@dangoslen`,
      linkedin: `dangoslen`,
      devto: `dangoslen`
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          }],
      },
    },
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Goslen`,
        short_name: `dangoslen`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#fd863f`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dangoslen.me`,
      },
    }
  ],
}
