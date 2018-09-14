import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { get } from 'lodash'

const ModeIcons = styled.div`
  margin: 1rem 0;
`

const ModeIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

const modesToIcons = {
  BUS: require('../images/icon_bus.svg'),
  TRAM: require('../images/icon_tram.svg'),
  TRUNK: require('../images/icon_trunk.svg'),
  RAIL: require('../images/icon_rail.svg'),
  FERRY: require('../images/icon_ferry.svg'),
}

const StopPage = ({ data }) => (
  <Layout title={data.joreStop.shortId}>
    <ModeIcons>
      {data.joreStop.modes.nodes.map(modeId => (
        <ModeIcon key={`mode_icon_${modeId}`} src={get(modesToIcons, modeId)} alt={modeId} />
      ))}
    </ModeIcons>
    <div>
      <pre>
        <code>{JSON.stringify(data.joreStop, null, 2)}</code>
      </pre>
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
    }
  }
`

export default StopPage
