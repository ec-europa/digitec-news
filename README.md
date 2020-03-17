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

### Troubleshooting build on linux (ubuntu)

if you run into this:

```
error while loading shared libraries: libpng12.so.0: cannot open shared object file: No such file or directory
```

it's beacuse libpng12 is not available anymore in the ubuntu repos, it has been replaced by libpng16.
You need to install it separately, then (https://launchpad.net/~ubuntu-security/+archive/ubuntu/ppa/+build/15108504) or, if you are using ubuntu > 19.0, you can use these commands to add a PPA and install with apt:

```
sudo add-apt-repository ppa:linuxuprising/libpng12
```
```
sudo apt update
```
```
sudo apt install libpng12-0
```
