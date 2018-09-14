module.exports = {
  siteMetadata: {
    title: 'HSL Stop Info',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hsl-stop-info',
        short_name: 'stopinfo',
        start_url: '/',
        background_color: '#007ac9',
        theme_color: '#007ac9',
        display: 'minimal-ui',
        icon: 'src/images/hsl-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    "gatsby-source-stops",
  ],
}
