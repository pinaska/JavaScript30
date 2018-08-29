import axios from 'axios'; 
import {showResults} from './js/search-results';
import './scss/style.scss';

const searchFormEl = document.querySelector('#searchForm');
const searchInputEl = document.querySelector('#searchInput');
const searchOptionEl = document.querySelector('#searchOption');


const apiBaseURL = "https://swapi.co/api";

let searchOption = 'films';
searchOptionEl.addEventListener('change', function(e){
    searchOption = this.value;
});

searchFormEl.addEventListener('submit', function(e){
    e.preventDefault();
    const searchValue = searchInputEl.value;
    // searchInputEl = '';
    //https://swapi.co/api/people/?search=r2
    const apiURL = `${apiBaseURL}/${searchOption}/?search=${searchValue}`;
    axios.get(apiURL)
        .then(res => res.data)
        .then(data =>{
            console.log(data.results);
            showResults(searchOption, data.results)
    })
        .catch(err => console.log(err));
});
