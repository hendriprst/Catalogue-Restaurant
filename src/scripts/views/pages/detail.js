import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';
import '../../components/restaurant-detail';
import LoveButtonInitiator from '../../utils/love-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="explore-container">
        <div id="card" class="card"></div>
        <div id="loveButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await ApiSource.detailRestaurant(url.id);
    const cardContainer = document.querySelector('.card');

    const restaurantDetailElement = document.createElement('restaurant-detail');
    restaurantDetailElement.properties = restaurant;
    cardContainer.appendChild(restaurantDetailElement);

    LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurants: {
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
