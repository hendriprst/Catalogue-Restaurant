import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurant-item';
import { pageLoaderTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 class="explore-title" tabindex="0">Your Favorited Restaurant</h2>
      <div id="cards" class="cards">
        ${pageLoaderTemplate()}
      </div>
    `;
  },

  async afterRender() {
    const cardsContainer = document.querySelector('#cards');
    const loadingElement = document.querySelector('#loader');
    const exploreContainer = document.querySelector('.explore-container');

    loadingElement.style.display = 'block';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();

    if (restaurants.length === 0) {
      const messageElement = document.createElement('p');
      messageElement.classList.add('empty-message');
      messageElement.innerHTML = 'You have no favorite restaurants';
      exploreContainer.appendChild(messageElement);
    } else {
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.properties = restaurant;
        cardsContainer.appendChild(restaurantItemElement);
      });
    }
    loadingElement.style.display = 'none';
  },
};

export default Favorite;
