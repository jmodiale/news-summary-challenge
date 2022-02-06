function displaySummary(datas){
    const summary = datas.response.results
    console.log(summary);

    const headline = document.getElementsByTagName('h4');
    summary.forEach(news => {
        // headline.forEach(item => {
        //     item.addEventListener('click', () => {
        //         console.log(item);
        //         // window.open(news.apiUrl, '_blank');
        //     });
        // })
    })
}

module.exports = displaySummary;
