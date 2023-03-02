import { LitElement, html, css } from 'lit';
import CONFIG from '../globals/config';
import './categories-list';
import './menus-list';
import './review-card';

class RestaurantDetail extends LitElement {
  static properties = {
    id: { type: String },
    pictureId: { type: String },
    name: { type: String },
    rating: { type: Number },
    city: { type: String },
    address: { type: String },
    description: { type: String },
    categories: { type: Array },
    menus: { type: Object },
    customerReviews: { type: Array },
  };

  constructor() {
    super();
    this.categories = [];
    this.menus = {};
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .restaurant__poster {
      width: 100%;
      max-width: 800px;
      border-radius: 12px;
    }
    
    .restaurant__poster, 
    .restaurant__info h4, 
    .restaurant__overview h3, 
    .restaurant__reviews h3,
    .review-cards {
      margin: 12px 0;
    }

    .restaurant__overview > p {
      text-align: justify;
      line-height: 1.5rem;
    }

    .review-cards {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media screen and (max-width: 499px) {
      .restaurant__title {
        text-align: center;
        color: #FD5E53;
      }
    
      .restaurant__info, .restaurant__overview, .restaurant__reviews h3 {
        text-align: left;
        margin: 12px 0;
      }

      .restaurant__overview > p {
        text-align: justify;
      }

      .review-cards {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
      }
    }

    @media screen and (min-width: 650px) {
      .restaurant__title {
        grid-column-start: 1;
        grid-column-end: 3;
        color: #FD5E53;
      }
    
      .restaurant__overview {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      
      .restaurant__overview > p, .review-cards {
        padding: 0 3em;
      }
  `;

  render() {
    return html`
      <h2 class="restaurant__title" tabindex="0">${this.properties.name}</h2>
      <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + this.properties.pictureId}" alt="${this.properties.name}">
      <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${this.properties.address}, kota ${this.properties.city}</p>
        <h4>Rating</h4>
        <p>&#11088 ${this.properties.rating}/5 Reviews</p>
        <categories-list .title="${'Categories'}" .items="${this.properties.categories}"></categories-list>
        <h3>Our Menus</h3>
        <menus-list title="Foods" .items="${this.properties.menus.foods}"></menus-list>
        <menus-list title="Drinks" .items="${this.properties.menus.drinks}"></menus-list>
        </div>
      <div class="restaurant__overview">
        <h3>Overview</h3>
        <p>${this.properties.description}</p>
      </div>
      <div class="restaurant__reviews">
        <h3>Testimonials</h3>
        <div class="review-cards">
          ${this.properties.customerReviews.map((review) => html`<review-card .review=${review}></review-card>`)}
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
