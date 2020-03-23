# DIGITEC News

Deploys logs: https://app.netlify.com/sites/digitec-news2020/overview

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
yarn clean
```

Build the website with the prefixes:

```
gatsby build:prefixed
```

## Troubleshooting

### libpng12

```
error while loading shared libraries: libpng12.so.0: cannot open shared object file: No such file or directory
```

This error means that libpng12 is not available at the host machine and it needs to be added manually.For Ubuntu, follow (https://launchpad.net/~ubuntu-security/+archive/ubuntu/ppa/+build/15108504) or add a PPA and install with apt:

```bash
sudo add-apt-repository ppa:linuxuprising/libpng12
sudo apt update
sudo apt install libpng12-0
```
