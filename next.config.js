module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    //BACKEND_URL: 'http://localhost:3010/api/v1',
    BACKEND_URL: 'https://jayp-ecommerce.herokuapp.com/api/v1',
    BACKEND_APIKEY: 'g7se8ytgh3w89hg9a7f63asjkhfda32'
  }
};
