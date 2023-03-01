import { LitElement, html, css } from 'lit';

class CategoriesList extends LitElement {
  static properties = {
    title: { type: String },
    items: { type: Array },
  };

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .category {
      overflow-x: auto;
      white-space: nowrap;
    }

    h4 {
      margin: 12px 0;
    }

    .category__item {
      display: inline-block;
      margin: 0 10px 12px 0;
      padding: 0.75em;
      font-size: 1em;
      font-weight: bold;
      background-color: #B0EACD;
      color: #21BF73;
      border-radius: 100px;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.items = [];
  }

  render() {
    return html`
      <div class="category">
        <h4>${this.title}</h4>
          ${this.items.map((item) => html`<div class="category__item">${item.name}</div>`)}
      </div>
    `;
  }
}

customElements.define('categories-list', CategoriesList);
