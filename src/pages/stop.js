import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const StopPage = ({data}) => (
  <Layout title={data.joreStop.shortId}>
    <div>
      <pre><code>
        { JSON.stringify(data.joreStop, null, 2) }
      </code></pre>
    </div>
  </Layout>
)

export const query = graphql`
  query joreStop {
    joreStop {
      id
      stopId
      lat
      lon
      nameFi
      nameSe
      addressFi
      addressSe
      shortId
      modes {
        nodes
      }
      departuresGrouped {
        nodes {
          routeId
          dayType
          hours
          minutes
        }
      }
    }
  }
`

export default StopPage
