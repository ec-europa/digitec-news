/**
 * Creates relationship nodes
 * Helper will used by Gatsby's sourceNodes API
 * @see https://www.gatsbyjs.org/docs/node-apis/#sourceNodes
 * @param  {function} getNode         The function to get a given node.
 * @param  {function} getNodes        The function to get a list of nodes.
 * @param  {function} createNodeField "Attach" the created node to the Gatsby's build process for content creation.
 * @return {void}
 */
module.exports = ({ getNode, getNodes, createNodeField }) => {
  const newsNewsletters = {};
  const newsletterNews = {}; // reverse index

  const getNewsByTitle = ({ newsItem }) =>
    getNodes().find(
      node => node.frontmatter && node.frontmatter.title === newsItem
    );

  getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .forEach(node => {
      if (node.frontmatter.news) {
        const newsNodes = node.frontmatter.news.map(getNewsByTitle);

        newsNodes.filter(newsItemNode => newsItemNode).forEach(newsItemNode => {
          if (!(newsItemNode.id in newsNewsletters)) {
            newsNewsletters[newsItemNode.id] = [];
          }

          newsNewsletters[newsItemNode.id].push(node.id);

          if (!(node.id in newsletterNews)) {
            newsletterNews[node.id] = [];
          }

          return newsletterNews[node.id].push(newsItemNode.id);
        });
      }
    });

  Object.entries(newsNewsletters).forEach(([newsItemNodeId, newsletters]) => {
    createNodeField({
      node: getNode(newsItemNodeId),
      name: 'newsletters',
      value: newsletters,
    });
  });

  Object.entries(newsletterNews).forEach(([newsletterNodeId, news]) => {
    createNodeField({
      node: getNode(newsletterNodeId),
      name: 'news',
      value: news,
    });
  });
};
