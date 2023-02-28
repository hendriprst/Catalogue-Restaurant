import { LitElement, html } from 'lit';

class RestaurantItem extends LitElement {
  static properties = {
    id: { type: String },
    pictureId: { type: String },
    name: { type: String },
    rating: { type: Number },
    city: { type: String },
    description: { type: String },
  };

  render() {
    return html`
      <article class="card-item">
        <img class="card-item__image" src="${this.pictureId}" alt="${this.name}" title="${this.name}">
        <div class="card-item__body">
          <p class="card-item__rating" tabindex="0">&#11088 ${this.rating}/5 Reviews <span class="card-item__city">&#128205 Kota ${this.city}</span></p>
          <h3 class="card-item__title"><a href="/#/detail/${this.id}">${this.name}</a></h3>
          <p class="card-item__description">${this.description.substring(0, 140)}...</p>
        </div>
      </article>
    `;
  }
}
customElements.define('restaurant-item', RestaurantItem);
