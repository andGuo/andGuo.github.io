module.exports = {
  siteMetadata: {
    title: `Andrew Guo`,
    author: '@andGuo',
    description:
      "Personal website for Andrew Guo",
    siteUrl: `https://andguo.github.io/`,
    keywords: 'Ottawa, Canada, Carleton, CS, resume, personal website, react, gatsby, tailwind, guo, andrew, student'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    `gatsby-plugin-mdx`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `andrew_resume`,
        path: `${__dirname}/static/pdf/andrew-guo-resume.pdf`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdowns/`,
      }, 
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CWP1CZX05T", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          // cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
  ],
}
