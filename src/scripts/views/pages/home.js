import ApiSource from '../../data/api-source';
import '../../components/restaurant-item';
import { pageLoaderTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2 class="explore-title" tabindex="0">Explore Restaurants</h2>
      <div id="cards" class="cards">
        ${pageLoaderTemplate()}
      </div>
    `;
  },

  async afterRender() {
    const cardsContainer = document.querySelector('#cards');
    const loadingElement = document.querySelector('#loader');

    loadingElement.style.display = 'block';
    const restaurants = await ApiSource.exploreRestaurants();

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.properties = restaurant;
      cardsContainer.appendChild(restaurantItemElement);
    });
    loadingElement.style.display = 'none';
  },
};

export default Home;
