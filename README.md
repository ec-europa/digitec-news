# DIGITEC News

Deploys for digitec: https://app.netlify.com/sites/digitec-news/deploys

## Getting Started (Recommended)

### Access Locally

```
yarn
yarn develop
```

Check the local website at: http://localhost:8000/
Or GraphiQL: http://localhost:8000/___graphql

To test Netlify CMS locally, you'll need run a production build of the site:

```
yarn build
yarn serve
```

### Build a release

Delete the cache and previous build:

```
rm -rf .cache public
```

Build the website with the prefixes:

```
gatsby build --prefix-paths
```
