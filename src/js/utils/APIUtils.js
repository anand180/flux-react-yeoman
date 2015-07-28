import 'whatwg-fetch';

export function fetchTaxonomy() {
  return fetch('/taxonomy.json').then(response => {
    console.log(response);
    return response.json().then(json => {
      console.log(json);
      return json;
    })
  });
}

export function fetchProduct() {
  console.log('fetch product')
}

export function browse() {
  console.log('browse');
  return fetch('/browse.json').then(response => {
    console.log(response);
    return response.json()
  });
}
