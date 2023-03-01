import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';
import '../../components/restaurant-detail';
import LoveButtonInitiator from '../../utils/love-button-initiator';
import { pageLoaderTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="explore-container">
        <div id="card" class="card">
          ${pageLoaderTemplate()}
        </div>
        <div id="loveButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cardContainer = document.querySelector('#card');
    const loadingElement = document.querySelector('#loader');

    loadingElement.style.display = 'block';
    const restaurant = await ApiSource.detailRestaurant(url.id);

    const restaurantDetailElement = document.createElement('restaurant-detail');
    restaurantDetailElement.properties = restaurant;
    cardContainer.appendChild(restaurantDetailElement);

    loadingElement.style.display = 'none';

    LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
