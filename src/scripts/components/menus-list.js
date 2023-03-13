import { LitElement, html, css } from 'lit';

class MenusList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px 0;
      }

      h4 {
        margin: 12px 0;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 16px;
        padding: 0 4em;
        margin: 16px 0 0;
        list-style: none;
      }

      li {
        border: 2px dashed #B0EACD;
        color: #21BF73;
        border-radius: 8px;
        font-size: 1em;
        font-weight: semibold;
        padding: 12px 8px;
        text-align: center;
        cursor: pointer;
      }

      @media screen and (max-width: 499px) {
        ul {
          padding: 0;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.items = [];
  }

  render() {
    return html`
      <h4 tabindex="0">${this.title}</h4>
      <ul>
        ${this.items.map((item) => html`<li tabindex="0">${item.name}</li>`)}
      </ul>
    `;
  }
}

customElements.define('menus-list', MenusList);
