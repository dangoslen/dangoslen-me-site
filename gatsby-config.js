module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false
  },
  siteMetadata: {
    title: `Dan Goslen | Team-Driven Developer`,
    author: `Dan Goslen`,
    description: `My musing on building great software though great engineering teams.`,
    siteUrl: `https://dangoslen.me`,
    social: {
      linkedin: `dangoslen`,
      devto: `dangoslen`
    },
    defaultImage: `content/assets/icon.png`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dangoslen.me`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-XZ4B4FVPLX",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {glob: "!*wip*"}}) {
            nodes {
              slug
              frontmatter {
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
        `,
        resolveSiteUrl: ({ site: { siteMetadata: { siteUrl } } }) => siteUrl,
        resolvePages: ({ allMdx: { nodes: posts } }) => {
          const entries = posts.map(post => {
            return {
              path: `/blog/${post.slug}/`,
              lastmod: post.frontmatter.date,
              changefreq: 'weekly',
              priority: 0.7,
            }
          })

          const home = {
            path: '/',
            lastmod: posts[0].lastmod,
            changefreq: 'daily',
            priority: 0.3,
          }

          const blog = {
            path: '/blog',
            lastmod: posts[0].lastmod,
            changefreq: 'daily',
            priority: 0.3,
          }

          const book = {
            path: '/book',
            lastmod: posts[0].lastmod,
            changefreq: 'monthly',
            priority: 0.3,
          }

          const talks = {
            path: '/talks',
            lastmod: posts[0].lastmod,
            changefreq: 'yearly',
            priority: 0.3,
          }

          return [home, blog, book, talks, ...entries]
        },
        serialize: ({ path, lastmod, changefreq, priority }) => {
          return {
            url: path,
            lastmod,
            changefreq,
            priority,
          }
        },
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          tokenize: 'forward'
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  tags
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'tags', 'description', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'slug', 'path', 'title', 'date', 'tags', 'description'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.posts.nodes.map((node) => ({
            id: node.id,
            slug: node.fields.slug,
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            tags: node.frontmatter.tags,
            description: node.frontmatter.description,
            body: node.rawMarkdownBody,
          })),
      },
    },
  ],
}
