import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/api.js';

const DEBOUNCE_DELAY = 300;

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

// Notiflix.Notify.warning("Too many matches found. Please enter a more specific name.")

// https://restcountries.com/v2/all?fields=name,capital,currencies,population,flags.svg,languages

const formInput = document.querySelector('#search-box');
const countryListWrapper = document.querySelector('.country-list');
const countryInfoWrapper = document.querySelector('.country-info');

formInput.addEventListener('input', debounce(onformInput, DEBOUNCE_DELAY));

function onformInput(e) {

    countryInfoWrapper.innerHTML = '';
    countryListWrapper.innerHTML = '';

    const countrySearch = e.target.value.trim();
    console.log(countrySearch);
     
    if (countrySearch === '') {
        return;
    };
    
    fetchCountries(countrySearch).then(countryInfo).catch(onError);
}
  
    
    function countryInfo(countries) { 

        if (countries.length > 10 ) {
        return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    }
    
    if (countries.length >= 2 && countries.length <= 10) {
        return createMarkupList(countries);
        }
    
        if (countries.length === 1) {
        
            return createMarkupCountry(countries);
      
        // const markup = countries
        // .map(({ flags, name, capital, population, languages }) => {
        // return `<img src="${flags.svg}" alt="${name.official}" width="130px" height="70px">
        // <h1 class="country-name">${name.official}</h1>
        // <ul class="country-list">
        //     <li><b>Capital:</b> ${capital}</li>
        //     <li><b>Population:</b> ${population}</li>
        //     <li><b>Languages:</b> ${Object.values(languages)}</li>
        // </ul>`
        // })
        // .join('')

        // countryInfoWrapper.innerHTML = markup;  
    }
    }




function createMarkupList(countries) {
    const markup = countries.map(({ name, flags }) => {
        return `<li class = country_list-item ><img src="${flags.svg}" class = "country_flag" width = "30px" height="20px"></img> <p>${name.official}</p> </li>`
    }).join('')

    countryListWrapper.innerHTML = markup;
}
    
 

function createMarkupCountry(country) {
    const markup = country.map(({ name, capital, population, flags, languages }) => {
        return `<div class = "country_info"> <img src="${flags.svg}" class= "country_flag style: width="30px"
   height="20px"> 
        <h2>${name.official}</h2> </div>
    <ul class = "country_list-description">
    <li class= country_list-info><b>Capital: </b>${capital}</li>
    <li class= country_list-info><b>Population: </b>${population}</li>
    <li class= country_list-info><b>Languages: </b>${Object.values(languages).join(' , ')}</li>
    </ul>`
    }).join('')

     countryInfoWrapper.innerHTML = markup;
}


function onError() {
    return Notiflix.Notify.failure("Oops, there is no country with that name"); 
}



