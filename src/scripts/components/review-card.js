import { LitElement, html, css } from 'lit';

class ReviewCard extends LitElement {
  static properties = {
    review: { type: Object },
  };

  static styles = css`
    .review {
      border-radius: 8px;
      height: 128px;
      box-shadow: 0px 4px 8px 0 #B0EACD;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .review__body {
      padding: 1rem;
      flex: 1;
    }

    .review__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem;
      background-color: #B0EACD;
      color: #333;
      font-weight: bold;
      font-size: 1em;
    }

    .review__text {
      color: #333;
      font-size: 1em;
      line-height: 1.2;
      text-align: left;
    }

    .review__date {
      color: #333;
      font-size: 0.75em;
      font-weight: inherit;
    }
  `;

  render() {
    const { name, review, date } = this.review;
    return html`
      <div class="review">
        <div class="review__header">
          <div>@${name}</div>
          <div class="review__date">${date}</div>
        </div>
        <div class="review__body">
          <div class="review__text">${review}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('review-card', ReviewCard);
