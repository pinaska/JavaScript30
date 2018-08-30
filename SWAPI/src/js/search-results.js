const searchResultsEl = document.querySelector("#searchResults");
const generateHTML = text =>`<li class="list-group-item">${text}</li>`;


export const showResults = (searchOption, results) =>{

    let html;
    if(searchOption === 'films'){
        html = results.map(result => generateHTML(`<b>title:</b> ${result.title}`));

    }
    else if(searchOption === 'people'){

        html = results.map(result =>  generateHTML(`<b>name:</b> ${result.name},<b> height: </b>${result.height}`));
    }
    else if (searchOption === 'planets') {

        html = results.map(result => generateHTML(`<b>planet:</b> ${result.name},<b> climate: </b>${result.climate}, <b>lives here:</b>${result.residents}`));
    }
    searchResultsEl.innerHTML = html.join('');
}
