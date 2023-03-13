const createLoveRestaurantButtonTemplate = () => `
  <button aria-label="love this restaurant" id="loveButton" class="love">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnloveRestaurantButtonTemplate = () => `
  <button aria-label="unlove this restaurant" id="loveButton" class="love">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const pageLoaderTemplate = () => `
  <div id="loader" class="loader"></div>
`;

const pageNotFoundTemplate = () => `
  <div class="page-not-found">
    <h2>404</h2>
    <p>The requested page could not be found.</p>
    <a href="/" aria-label="Click to go back to home">Go back to Home</a>
  </div>
`;

export {
  createLoveRestaurantButtonTemplate,
  createUnloveRestaurantButtonTemplate,
  pageLoaderTemplate,
  pageNotFoundTemplate,
};
