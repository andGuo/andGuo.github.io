module.exports = {
  siteMetadata: {
    title: `Andrew Guo`,
    description:
      "Personal website for Andrew Guo, student at Carleton University",
    siteUrl: `https://andguo.github.io/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/public/static/pdf/`,
      },
    },
  ],
}
