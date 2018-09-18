import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { get } from 'lodash'
import Header from '../components/Header'
import PageContent from '../components/PageContent'

const ModeIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ModeIcon = styled.img`
  flex: none;
  margin-bottom: 0;
  margin-right: 0.25rem;
  width: 28px;
  heigth: 28px;

  &:last-child {
    margin-right: 0;
  }
`

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`

const modesToIcons = {
  BUS: require('../images/icon_bus.svg'),
  TRAM: require('../images/icon_tram.svg'),
  TRUNK: require('../images/icon_trunk.svg'),
  RAIL: require('../images/icon_rail.svg'),
  FERRY: require('../images/icon_ferry.svg'),
}

const StopPage = ({ data }) => (
  <Layout>
    {data.joreStop.fields.mapillaryImage && (
      <BackgroundImage src={data.joreStop.fields.mapillaryImage} />
    )}
    <Header siteTitle={data.joreStop.shortId}>
      <ModeIcons>
        {data.joreStop.modes.nodes.map(modeId => (
          <ModeIcon
            key={`mode_icon_${modeId}`}
            src={get(modesToIcons, modeId)}
            alt={modeId}
          />
        ))}
      </ModeIcons>
    </Header>
    <PageContent>
      <pre style={{ color: '#fff', background: 'hsla(0, 0%, 0%, 0.25)' }}>
        <code>{JSON.stringify(data.joreStop, null, 2)}</code>
      </pre>
    </PageContent>
  </Layout>
)

export const query = graphql`
  query joreStop($id: String) {
    joreStop(id: { eq: $id }) {
      fields {
        mapillaryImage
      }
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
