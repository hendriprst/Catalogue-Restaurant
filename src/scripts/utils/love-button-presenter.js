import swal from 'sweetalert';
import { createLoveRestaurantButtonTemplate, createUnloveRestaurantButtonTemplate } from '../views/templates/template-creator';

const sweetalert = (message) => {
  swal({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const LoveButtonPresenter = {
  async init({ loveButtonContainer, favoriteRestaurants, restaurant }) {
    this._loveButtonContainer = loveButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLove() {
    this._loveButtonContainer.innerHTML = createLoveRestaurantButtonTemplate();

    const loveButton = document.querySelector('#loveButton');
    loveButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      sweetalert('Restaurant has been added');
      this._renderButton();
    });
  },

  _renderLoved() {
    this._loveButtonContainer.innerHTML = createUnloveRestaurantButtonTemplate();

    const loveButton = document.querySelector('#loveButton');
    loveButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      sweetalert('Restaurant has been removed');
      this._renderButton();
    });
  },
};

export default LoveButtonPresenter;
