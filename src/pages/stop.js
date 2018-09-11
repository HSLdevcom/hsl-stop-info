import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

const StopPage = ({ data }) => (
  <Layout>
    <div>
      { JSON.stringify(data, null, 2) }
    </div>
  </Layout>
)

export const query = graphql`
  query joreStop($id: joreStopIdQueryString_2 ) {
    joreStop(id: $id) {
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
