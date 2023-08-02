export default class JSONservice {
  static getJSON() {
    return fetch(`${process.env.API_URL}`)
      .then((response) =>{
        if(!response) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
    })
    .catch((error) => {return error});
  }}
  