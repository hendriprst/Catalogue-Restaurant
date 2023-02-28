import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurant-item';

const Favorite = {
  async render() {
    return `
      <h2 class="explore-title" tabindex="0">Your Favorited Restaurant</h2>
      <div id="cards" class="cards"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const cardsContainer = document.querySelector('#cards');

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.properties = restaurant;
      cardsContainer.appendChild(restaurantItemElement);
    });
  },
};

export default Favorite;
