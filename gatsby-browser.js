exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    /* eslint-disable global-require */
    require('intersection-observer');
    // console.log('👍 IntersectionObserver is polyfilled');
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement('img');
  if (
    typeof testImg.style.objectFit === 'undefined' ||
    typeof testImg.style.objectPosition === 'undefined'
  ) {
    /* eslint-disable global-require */
    require('object-fit-images')();
    // console.log('👍 Object-fit/Object-position are polyfilled');
  }
};
