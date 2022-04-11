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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/static/pdf/`,
      },
    },
  ],
}
