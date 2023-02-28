const createFavoriteButtonTemplate = () => `
  <button aria-label="love this Restaurant" id="loveButton" class="love">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlove this movie" id="loveButton" class="love">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };
