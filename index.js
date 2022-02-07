const api_key = config.SECRET_API_KEY;
const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${api_key}`

function getNews(){
   fetch(url)
   .then(response => {
       return response.json();
    })
    .then(data => {
        console.log(data.response.results)

        const info = data.response.results
        const root = document.getElementById('root');

        info.forEach(result => {
            const article = document.createElement('article');
            article.className = "articles"

            const linebreak = document.createElement("br");

            const title = document.createElement('a');
            title.className = "title";
            title.href = result.webUrl
            title.innerText = result.fields.headline;

            const image = document.createElement('img');
            image.className = "images";
            image.src = result.fields.thumbnail;

            root.append(article)
            article.append(title, image)
            title.appendChild(linebreak);
        })
    });
}

function search(){
    const inputSearch = document.createElement('input');
    inputSearch.setAttribute("type", "search");
    inputSearch.placeholder = "Search...";

    const root = document.getElementById('root');

    const titles = document.getElementsByClassName('title');
    console.log(titles)

    root.append(inputSearch);

    inputSearch.addEventListener('keyup', (e) => {
        const searchString = e.target.value;
          for(i=0; i<titles.length; i++){
            titles[i].innerText = searchString.toLowerCase().includes(searchString) ? titles[i].style.display = "": titles[i].style.display = "none"
          }
    });
}

search();
getNews();
module.exports = getNews();

