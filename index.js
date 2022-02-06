const displaySummary = require('./displaySummary');

const api_key = config.SECRET_API_KEY;
const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${api_key}`

function getHeadlines(){
   fetch(url)
   .then(response => {
       return response.json();
    })
    .then(data => {
        console.log(data.response.results)

        const info = data.response.results
        const root = document.getElementById('root');

        info.forEach(result => {
            const title = document.createElement('h4');
            title.className = "title";
            title.innerHTML = result.fields.headline;

            const image = document.createElement('img');
            image.className = "images";
            image.src = result.fields.thumbnail;

            root.append(title, image)
        })
    
    displaySummary(data)
    });
}

getHeadlines();
module.exports = getHeadlines();

