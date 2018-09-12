import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const StopPage = ({data}) => (
  <Layout>
    <div>
      <pre><code>
        { JSON.stringify(data, null, 2) }
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
      shortId
    }
  }
`

export default StopPage
