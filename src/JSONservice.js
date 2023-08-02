export default class JSONservice {
  static getJSON() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      const url = `${process.env.API_URL}`;
      request.open("GET", url, true);
      request.send();
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject({message: "no good!", code: 404});
        }
      })
    })
  }}
  