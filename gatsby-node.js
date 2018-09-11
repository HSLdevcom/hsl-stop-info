const { createStopPath} = require('./src/helpers/createStopPath')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const stopPageComponent = path.resolve(`src/pages/stop.js`)
  const stops = await graphql(`
    {
      allJoreStop(limit: 100) {
        edges {
          node {
            id
            stopId
            shortId
          }
        }
      }
    }
  `)
  
  if( stops.errors ) {
    throw new Error(JSON.stringify(stops.errors))
  }
  
  // Create pages for each markdown file.
  stops.data.allJoreStop.edges.forEach(({ node }) => {
    const path = createStopPath(node)
    
    createPage({
      path,
      component: stopPageComponent,
      context: {
        id: node.id,
        shortId: node.shortId,
        stopId: node.stopId
      },
    })
  })
}
