import { LitElement, html, css } from 'lit';
import CONFIG from '../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends LitElement {
  static properties = {
    id: { type: String },
    pictureId: { type: String },
    name: { type: String },
    rating: { type: Number },
    city: { type: String },
    description: { type: String },
  };

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0px 4px 8px 0 #B0EACD;
      transition: 0.2s ease-in-out;
    }
    
    .card-item:hover {
      cursor: pointer;
    }
    
    .card-item__image {
      width: 100%;
      height: 215px;
      border-radius: 12px 12px 0 0;
    }
    
    .card-item__body {
      padding: 16px;
    }
    
    .card-item__body > .card-item__rating {
      font-size: 12px;
      color: #333;
      font-weight: 400;
    }
    
    .card-item__city {
      margin-left: 12px;
      text-transform: uppercase;
    }
    
    .card-item__title {
      font-size: 16px;
      font-weight: 700;
      padding: 1rem 0;
      transition: 0.3s opacity;
    }
    
    .card-item__title:hover {
      opacity: 0.5;
    }
    
    .card-item__title a {
      padding: 1rem 0;
      text-decoration: none;
      color: #FD5E53;
    }
    
    .card-item__description {
      font-size: 12px;
      line-height: 1.6em;
      opacity: 1;
      text-align: justify;
    }
    
    .card-item__link {
      min-width: 44px;
      min-height: 44px;
      border: none;
      background: none;
      color: #21BF73;
    }
    
    .card-item__link:hover {
      text-decoration: underline;
      color: #333;
    }

    @media screen and (max-width: 499px) {
      .card-item__title {
        padding: 14px 0;
      }

      .card-item__title a {
        padding: 14px 0;
      }
    }

    @media screen and (min-width: 375px) {
      .card-item__description {
        font-size: 16px;
      }
    }

    @media screen and (min-width: 500px) {
      .card-item__body {
        padding: 16px 32px 32px 32px;
      }
    
      .card-item__description {
        font-size: 16px;
      }
    
      .card-item__title {
        font-size: 1.25em;
      }
    }

    @media screen and (min-width: 800px) {
      .card-item__description {
        font-size: 16px;
      }
    }
  `;

  render() {
    return html`
      <article class="card-item">
        <img class="card-item__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + this.properties.pictureId}" alt="${this.properties.name || '-'}" title="${this.properties.name}">
        <div class="card-item__body">
          <p class="card-item__rating">&#11088 ${this.properties.rating || '-'}/5 <span class="card-item__city">&#128205 Kota ${this.properties.city || '-'}</span></p>
          <h3 class="card-item__title"><a href="/#/detail/${this.properties.id || '-'}" aria-label="Click to see detail ${this.properties.name || '-'}">${this.properties.name || '-'}</a></h3>
          <p class="card-item__description">${this.properties.description.substring(0, 140) || '-'}...</p>
        </div>
      </article>
    `;
  }
}
customElements.define('restaurant-item', RestaurantItem);
