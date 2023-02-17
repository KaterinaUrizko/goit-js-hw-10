// export function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
//         .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();    
//     });
// }


// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import { fetchCountries } from './fetchCountries';

// const DEBOUNCE_DELAY = 300;

// const inputRef = document.querySelector('#search-box');
// const countryInfoContainer = document.querySelector('.country-info');
// const countryList = document.querySelector('.country-list');

// inputRef.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

// function onInputSearch(event) {
//     countryInfoContainer.innerHTML = '';
//     countryList.innerHTML = '';
//     const countryToSearch = event.target.value.trim();
//     if (countryToSearch === '') {
//         return
//     }
    
//     fetchCountries(countryToSearch).then(showCountryInfo).catch(showError);
// }

// function showCountryInfo(country) {
//     if (country.length > 10 ) {
//         return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     }
    
//     if (country.length >= 2 && country.length <= 10) {
//         return showCountryInfoList(country);
//     }
    
//     if (country.length === 1) {
//         const markup = country
//         .map(({ flags, name, capital, population, languages }) => {
//         return `<img src="${flags.svg}" alt="${name.official}" width="130px" height="70px">
//         <h1 class="country-name">${name.official}</h1>
//         <ul class="country-list">
//             <li><b>Capital:</b> ${capital}</li>
//             <li><b>Population:</b> ${population}</li>
//             <li><b>Languages:</b> ${Object.values(languages)}</li>
//         </ul>`
//         })
//         .join('')

//         countryInfoContainer.innerHTML = markup;  
//     }
// }
      
// function showCountryInfoList(country) {
//     const markup = country
//         .map(({ flags, name }) => {
//             return `
//          <li class="country-list__item">
//             <img src="${flags.svg}" alt="${name.official}" width="30px" height="30px">
//             <p class="country-list__text">${name.official}</p>
//         </li>`
//         })
//         .join('')
    
//     countryList.innerHTML = markup;
// };

// function showError() {
//     return Notiflix.Notify.failure("Oops, there is no country with that name"); 
// }




// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }