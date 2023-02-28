import ApiSource from '../../data/api-source';

const Favorite = {
  async render() {
    return `
      <h2 class="explore-title" tabindex="0">Your Favorited Restaurant</h2>
      <div id="cards" class="cards"></div>
    `;
  },

  async afterRender() {
    const restaurants = await ApiSource.favoriteRestaurants();
    console.log(restaurants);
  },
};

export default Favorite;
