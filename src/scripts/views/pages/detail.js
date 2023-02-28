import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';

const Detail = {
  async render() {
    return `
      <div id="card" class="card"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await ApiSource.detailRestaurant(url.id);
    console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
