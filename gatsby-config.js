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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Andrew_Guo_Resume`,
        path: `${__dirname}/static/pdf/Andrew_Guo_Resume.pdf`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdowns/`,
      }, 
    },
  ],
}
