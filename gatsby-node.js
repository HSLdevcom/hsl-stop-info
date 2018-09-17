const path = require('path')
const got = require('got')
const { get } = require('lodash')

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'JoreStop') {
    const pointLat = node.lat
    const pointLon = node.lon
    let mapillaryImages
    let imageUrl = ''

    try {
      mapillaryImages = await got(`https://a.mapillary.com/v3/images`, {
        query: {
          closeto: `${pointLon},${pointLat}`,
          lookat: `${pointLon},${pointLat}`,
          radius: 100,
          per_page: 1,
          client_id: 'TG1sUUxGQlBiYWx2V05NM0pQNUVMQTo2NTU3NTBiNTk1NzM1Y2U2',
        },
        json: true,
      })
    } catch (err) {
      console.log(err)
    }

    const featureCollection = mapillaryImages.body

    if (featureCollection.features.length !== 0) {
      const firstImageKey = get(featureCollection, 'features[0].properties.key', '')

      if (firstImageKey) {
        imageUrl = `https://d1cuyjsrcm0gby.cloudfront.net/${firstImageKey}/thumb-2048.jpg`
      }
    }
  
    createNodeField({
      node,
      name: 'mapillaryImage',
      value: imageUrl
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const stopPageComponent = path.resolve(`src/pages/Stop.js`)
  const stops = await graphql(`
    {
      allJoreStop {
        edges {
          node {
            path
            id
            stopId
            shortId
          }
        }
      }
    }
  `)

  if (stops.errors) {
    throw new Error(JSON.stringify(stops.errors))
  }

  stops.data.allJoreStop.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: stopPageComponent,
      context: {
        id: node.id,
        shortId: node.shortId,
        stopId: node.stopId,
      },
    })
  })
}
