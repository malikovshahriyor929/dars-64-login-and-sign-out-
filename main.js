let BASE_URL = "https://api.escuelajs.co/api/v1/auth/login";
let form = document.querySelector("#form");
let login = document.querySelector(".btn");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let useremail = document.querySelector("#user").value;
  let password = document.querySelector("#password").value;
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: useremail, password: password }),
  }).then((data) => {
    localStorage.setItem(
      "access_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
    );
    check(data);
    console.log(data);
    
});
});

//    john@mail.com
//    changeme

function check(data) {
    if (data.status !== 401) {
        window.location.href = "./index.html";

    }
}