import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';

class ApiSource {
  static async showErrorAlert(errorMessage) {
    await swal({
      icon: 'error',
      title: errorMessage,
      text: 'Something went wrong. Please try again later.',
    });
  }

  static async exploreRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
      ApiSource.showErrorAlert('Oops!');
      return error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.log(error);
      ApiSource.showErrorAlert('Oops!');
      return error;
    }
  }
}

export default ApiSource;
