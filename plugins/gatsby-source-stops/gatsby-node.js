const crypto = require('crypto')
const { request } = require('graphql-request')
const { get } = require('lodash')

const createStopPath = stop =>
  '/' + encodeURIComponent(get(stop, 'shortId', '').replace(/\s/, '_'))

const createGatsbyNode = (createNode, createNodeId) => stop => {
  const path = createStopPath(stop)

  if (path) {
    const content = JSON.stringify(stop)
    const contentDigest = crypto
      .createHash('md5')
      .update(content)
      .digest('hex')

    createNode({
      ...stop,
      path,
      id: createNodeId(`jore-stop-${stop.stopId}`),
      parent: null,
      children: [],
      internal: {
        type: 'JoreStop',
        content,
        contentDigest,
      },
    })
  }
}

exports.sourceNodes = async ({ actions, createNodeId }) => {
  const { createNode } = actions

  const query = `{
    allStops {
      nodes {
        stopId
        lat
        lon
        nameFi
        nameSe
        shortId
        stopAreaId
      }
    }
  }`

  const stops = await request('http://dev-kartat.hsldev.com/jore/graphql', query)
  get(stops, 'allStops.nodes', []).forEach(
    createGatsbyNode(createNode, createNodeId)
  )
}
