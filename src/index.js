import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import JSONservice from "./JSONservice.js"

function getUsers() {
  let promise = JSONservice.getJSON();
  promise.then((response) => {
    displayUsers(response)
  }, (error) => {
    displayError(error)
  });
}

function displayUsers(response) {
  let userList =  document.getElementById("userList");
  response.forEach((user) => {
    let li = document.createElement("li");
    li.innerText = user.username;
    userList.append(li);
    })
  }
  

function displayError(error) {
  let p = document.querySelector("p")
  p.append(error.message);
}

window.addEventListener("load", getUsers());