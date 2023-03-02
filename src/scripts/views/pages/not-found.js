const PageNotFound = {
  async render() {
    return `
      <div class="page-not-found">
        <h2>404</h2>
        <p>The requested page could not be found.</p>
        <a href="/" aria-label="Click to go back to home">Go back to Home</a>
      </div>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
  },
};

export default PageNotFound;
