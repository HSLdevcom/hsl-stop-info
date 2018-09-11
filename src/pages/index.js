import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Stops</h1>
    <div>
      { data.allJoreStop.edges.map(({ node }) => (
        <div key={node.id}>
          Jore stop { node.stopId }
        </div>
      )) }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allJoreStop {
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
