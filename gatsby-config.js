module.exports = {
  siteMetadata: {
    title: 'HSL Stop Info',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HSL Stop Info',
        short_name: 'stopinfo',
        start_url: '/',
        background_color: '#007ac9',
        theme_color: '#007ac9',
        display: 'minimal-ui',
        icon: 'src/images/hsl-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Nunito',
            variants: [ '200', '400', '700' ],
          }
        ],
      },
    },
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
    'gatsby-plugin-offline',
  ],
}
