import ApiSource from '../../data/api-source';
import '../../components/restaurant-item';

const Home = {
  async render() {
    return `
      <h2 class="explore-title" tabindex="0">Explore Restaurants</h2>
      <div id="cards" class="cards"></div>
    `;
  },

  async afterRender() {
    const restaurants = await ApiSource.exploreRestaurants();
    const cardsContainer = this.querySelector('#cards');

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.properties = restaurant;
      cardsContainer.appendChild(restaurantItemElement);
    });
  },
};

export default Home;
