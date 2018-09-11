import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { createStopPath } from '../helpers/createStopPath'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Stops</h1>
    <div>
      {data.allJoreStop.edges.map(({ node }) => (
        <div key={node.id}>
          Jore stop <Link to={createStopPath(node)}>{ node.shortId }</Link>
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
