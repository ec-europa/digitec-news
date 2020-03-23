const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createNodesRelations = require('./src/utils/createNodesRelations');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;

  return posts.forEach((edge) => {
    const { id } = edge.node;

    createPage({
      path: edge.node.fields.slug,
      context: { id },
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`
      ),
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // Make paths relative
    ['picture', 'image'].forEach((prop) => {
      if (node.frontmatter[prop]) {
        // News are 1 level upper than other content items.
        // Because site is prefixed and it's not good to have /news/news/
        if (node.frontmatter.templateKey === 'news') {
          // eslint-disable-next-line no-param-reassign
          node.frontmatter[prop] = `../static${node.frontmatter[prop]}`;
        } else {
          // eslint-disable-next-line no-param-reassign
          node.frontmatter[prop] = `../../static${node.frontmatter[prop]}`;
        }
      }
    });

    createNodeField({
      name: 'slug',
      value: createFilePath({ node, getNode }),
      node,
    });
  }
};

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  const { createNodeField } = actions;

  createNodesRelations({ getNode, getNodes, createNodeField });
};
