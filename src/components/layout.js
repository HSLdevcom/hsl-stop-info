import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
import styled from 'styled-components'

const LayoutFrame = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,400,700"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={title} />
        <LayoutFrame>
          {children}
        </LayoutFrame>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
