import { LitElement, html, css } from 'lit';
import CONFIG from '../globals/config';
import './categories-list';
import './menus-list';

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
    this.customerReviews = [];
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
    .restaurant__reviews h3 {
      margin: 12px 0;
    }

    .restaurant__overview > p {
      text-align: justify;
      line-height: 1.5rem;
    }

    .restaurant__reviews ul li {
      text-align: justify;
      margin-bottom: 12px;
    }

    .restaurant__reviews ul li span {
      margin-left: 8px;
      font-size: 10px;
      font-weight: inherit;
    }

    ul .box {
      background-color: #B0EACD;
      color: #21BF73;
      padding: 12px;
    }

    ul li {
      list-style: none;
    }

    @media screen and (max-width: 499px) {
      .restaurant__title {
        text-align: center;
        color: #FD5E53;
      }
    
      .restaurant__info, .restaurant__overview {
        text-align: left;
        margin: 12px 0;
      }

      .restaurant__overview > p {
        text-align: justify;
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
      
      .restaurant__overview > p, .restaurant__reviews ul li {
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
        <ul>
          ${this.properties.customerReviews.map((review) => html`<li>@${review.name}<span>${review.date}</span> </br>&#10075;${review.review}&#10076;</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
