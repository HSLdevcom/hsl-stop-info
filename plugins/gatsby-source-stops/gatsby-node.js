const crypto = require('crypto')
const { request } = require('graphql-request')
const { get } = require('lodash')
const path = require('path')

require("dotenv").config({
  path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
})

const createStopPath = stop =>
  '/' + encodeURIComponent(get(stop, 'shortId', '').replace(/\s/, ''))

exports.sourceNodes = async ({ actions, createNodeId }) => {
  const { createNode } = actions

  const createGatsbyNode = stop => {
    const nodePath = createStopPath(stop)

    if (nodePath) {
      const content = JSON.stringify(stop)
      const contentDigest = crypto
        .createHash('md5')
        .update(content)
        .digest('hex')

      createNode({
        ...stop,
        path: nodePath,
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

  const query = `{
    allStops(condition: { posterCount: 1 }) {
      nodes {
        nodeId
        stopId
        lat
        lon
        nameFi
        nameSe
        addressFi
        addressSe
        shortId
        heading
        posterCount
        modes {
          nodes
        }
      }
    }
  }`

  const stops = await request(process.env.JORE_GRAPHQL_URL, query)
  get(stops, 'allStops.nodes', []).forEach(createGatsbyNode)
}
