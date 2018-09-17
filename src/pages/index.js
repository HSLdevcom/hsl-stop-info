import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import PageContent from '../components/PageContent'

const IndexPage = ({ data }) => (
  <Layout>
    <Header siteTitle="Stops" />
    <PageContent>
      {data.allJoreStop.edges.map(({ node }) => (
        <div key={node.id}>
          Jore stop <Link to={node.path}>{ node.shortId }</Link>
        </div>
      ))}
    </PageContent>
  </Layout>
)

export const query = graphql`
  query {
    allJoreStop(limit: 100) {
      edges {
        node {
          path
          id
          stopId
          lat
          lon
          nameFi
          shortId
        }
      }
    }
  }
`

export default IndexPage
