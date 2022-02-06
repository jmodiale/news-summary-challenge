(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // displaySummary.js
  var require_displaySummary = __commonJS({
    "displaySummary.js"(exports, module) {
      function displaySummary(datas) {
        const summary = datas.response.results;
        console.log(summary);
        const headline = document.getElementsByTagName("h4");
        summary.forEach((news) => {
        });
      }
      module.exports = displaySummary;
    }
  });

  // index.js
  var require_news_summary = __commonJS({
    "index.js"(exports, module) {
      var displaySummary = require_displaySummary();
      var api_key = config.SECRET_API_KEY;
      var url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${api_key}`;
      function getHeadlines() {
        fetch(url).then((response) => {
          return response.json();
        }).then((data) => {
          console.log(data.response.results);
          const info = data.response.results;
          const root = document.getElementById("root");
          info.forEach((result) => {
            const title = document.createElement("h4");
            title.className = "title";
            title.innerHTML = result.fields.headline;
            const image = document.createElement("img");
            image.className = "images";
            image.src = result.fields.thumbnail;
            root.append(title, image);
          });
          displaySummary(data);
        });
      }
      getHeadlines();
      module.exports = getHeadlines();
    }
  });
  require_news_summary();
})();
