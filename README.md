# HSL stop info

A lightweight mobile-first application that provides information about the stop you are standing at. Will replace the old app at [http://tag.hsl.fi/tag/16669?a](http://tag.hsl.fi/tag/16669?a) and provide more features.

This project is built with Gatsby, which is a static site generator. Thus, all API requests to Jore-Graphql and any other API that is used is made during the build stage and baked into the resulting static website. Gatsby also provides many features that the Progressive Web App (PWA) spec describes, including a service worker that enables offline usage.

## Install

Install dependencies with Yarn (or npm, but there's only a `yarn.lock` for now):
```sh
yarn
```

Also install the dependencies of the local `gatsby-source-stops` plugin, which is responsible for fetching stops from JORE:
```bash
cd plugins/gatsby-source-stops
yarn
```

## Develop

Run the `develop` command to work on the site:
```sh
yarn run develop
```

After the initial build has finished you can visit the site on [http://localhost:8000](http://localhost:8000). Gatsby's data structure uses Graphql, and the internal Graphql endpoint can be found at [http://localhost:8000/__graphql](http://localhost:8000/__graphql).

## Build

To build the site for production, run:
```bash
yarn run build
```

The build results in a self-contained deployable website in `public/`. At this point you can use the `yarn start` command to serve the built website.

## Production

A hosting plan has not yet been made for this project, but it basically involves uploading the built static site in `public/`. If Docker is used, run `build` followed by `start` in the Docker container. 
