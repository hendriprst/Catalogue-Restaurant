import swal from 'sweetalert';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const sweetalert = (message) => {
  swal({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const LoveButtonInitiator = {
  async init({ loveButtonContainer, restaurant }) {
    this._loveButtonContainer = loveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLoved();
    } else {
      this._renderLove();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLove() {
    this._loveButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const loveButton = document.querySelector('#loveButton');
    loveButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      sweetalert('Restaurant has been added');
      this._renderButton();
    });
  },

  _renderLoved() {
    this._loveButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const loveButton = document.querySelector('#loveButton');
    loveButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      sweetalert('Restaurant has been removed');
      this._renderButton();
    });
  },
};

export default LoveButtonInitiator;
