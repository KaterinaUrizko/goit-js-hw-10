
// const URL = `https://restcountries.com/v3.1/name/`;
// const OPTIONS = 'name,capital,population,flags,languages';
// // const OPTIONS = {
// //   headers: {
// //     option: 'name,flags,capital,population,languages',
// //   },
// // };

// //*=========== повертає проміс і передаємо далі для обробки =============
// export function fetchCountries(name) {
//   return fetch(`${URL}/${name}?fields=${OPTIONS}`).then(res => {
//     if (!res.ok) {
//       throw new Error('Oops, there is no country with that name');
//     }
//     return res.json();
//     // console.log(res.json());
//   });
// }



// // if (inputValue.length === 0) return; // onFetchError();

//   fetchCountries(inputValue)
//     .then(countri => markupSelectionCountries(countri))
//     .catch(onFetchError);
// }
// //*================= логіка присвоєння розмітки ======================
// function markupSelectionCountries(data) {
//   console.log(data);
//   if (data.length === 1) {
//     createMarkupCountriInfo(data);
//   } else if (data.length > 1 && data.length <= 10) {
//     createMarkupCountries(data);
//   } else {
//     onFetchInfo();
//   }
// }
// //*================= виводимо помилки ================================
// function onFetchInfo() {
//   Notify.info('Too many matches found. Please enter a more specific name.');
// }

// function onFetchError() {
//   Notify.failure('Oops, there is no country with that name');
// }

// //*==================== розмітка для одної або 10 країн ==============
// function createMarkupCountriInfo(arr) {
//   const markup = arr
//     .map(({ name, flags, capital, population, languages }) => {
//       // console.log(el);
//       return `<li>
//       <h2>Name: ${name.official}</h2>
//     <img src="${flags.svg}" alt="${flags.alt}" width="70" heigth="50">
//     <p><span class="style">Capital:</span> ${capital}</p>
//     <p><span class="style">Population:</span> ${population}</p>
//     <p><span class="style">Languages:</span> ${Object.values(languages).join(
//       '',
//       ''
//     )}</p>
//     </li>`;
//     })
//     .join('');

//   countryInfo.innerHTML = markup;
// }

// function createMarkupCountries(arr) {
//   const markup = arr
//     .map(({ name, flags }) => {
//       // console.log(el);
//       return `<li>
//       <h2>Name: ${name.official}</h2>
//     <img src="${flags.svg}" alt="${flags.alt}" width="70" heigth="50">
//     </li>`;
//     })
//     .join('');

//   countryList.innerHTML = markup;
// }
