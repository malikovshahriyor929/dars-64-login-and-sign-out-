let sign = document.querySelector(".btn");
let profile2 = document.querySelector(".profile2");

sign.addEventListener("click", (e) => {
  window.location.href = "./login.html";
  localStorage.removeItem("access_token");
});
function iff() {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "./login.html";
  }
}
iff();
let api = "https://fakestoreapi.com/products";

let cards_container = document.querySelector(".cards_container");
let rate = document.querySelector(".rate");
let form = document.querySelector("#form");

function fetchFunc() {
  fetch(api)
    .then((data) => data.json())
    .then((data) => {
      getData(data);
      rate_i(data);
      searchData(data);
      userimg(data)
    })
    .catch((error) => console.log("error"));
}
//search
function searchData(data) {
  form.addEventListener("keyup", (e) => {
    e.preventDefault();

    let search = document.getElementById("search");

    const newData = data.filter((value) => {
      let newstr = value.title
        .toLowerCase()
        .toString()
        .includes(search.value.toLowerCase());
      return newstr;
    });
    getData(newData);
  });
}

//CARD MAKER
function getData(data) {
  cards_container.innerHTML = "";
  data.forEach((value) => {
    let cards = document.createElement("div");
    cards.classList.add("cards");
    cards.innerHTML = `
 <div class="card">
        <img class="imgs" src="${value.image}"/>
    <div class="card_info">
        <h2 class="title">${value.title}</h2>
        <p class="description"> ${value.description}</p>
        <div class="rating">
        <p class="rate">

${rate_i(Math.round(value.rating.rate))} ${Math.round(value.rating.rate)}
                </p>
                <p class="count">${value.rating.count}</p>
                </div>
              <div class="price_and_button">
                <h3 class="price">${value.price} $</h3>
                <button>add to cart</button>
              </div>
              
              </div>
              </div>
              `;
    cards_container.append(cards);
  });
}

//Star
function rate_i(value) {
  let i = `<i class="fa-solid rate_i fa-star"></i>`;
  let igray = `<i class="fa-solid idd fa-star"></i>`;
  return i.repeat(value) + igray.repeat(5 - value);
}

function userimg(data) {
  let profile = document.createElement("div");
  profile.classList.add("profile");
  profile.innerHTML = ` 
  <img class="avatar" scr="${data.avatar}" />
     <div>
        <h2>${data.name}</h2>
          <p>${data.email}</p>
        </div>
     `;
     profile2.append(profile)

}

fetchFunc();
