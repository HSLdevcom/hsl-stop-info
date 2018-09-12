import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Stops</h1>
    <div>
      {data.allJoreStop.edges.map(({ node }) => (
        <div key={node.id}>
          Jore stop <Link to={node.path}>{ node.shortId }</Link>
        </div>
      ))}
    </div>
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