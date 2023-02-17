// export function fetchCountries(name) {

//     const URL = 'https://restcountries.com/v3.1/name';
// const OPTIONS = 'name, capital, population, flags, languages';

    
//   return fetch(`${URL}/${name}?fields=${OPTIONS}`)
//         .then(response => {
//             if (!response.ok) { throw new Error(response.status) };
//             return response.json()
// });            
     
//         }

export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();    
    });
}


