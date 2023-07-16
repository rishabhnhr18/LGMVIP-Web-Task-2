                                  /* Using React..*/

                                  
let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="card-image">
            <img src="bg.jpg" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3 class="name">${element.first_name} ${element.last_name}</h3>
            <h3 class="userid">User ID: ${element.id}</h3>
            <h3 class="email">${element.email}</h3>
            
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};

let Btn = document.getElementById("btn");
Btn.addEventListener("click", () => {
  cards.innerHTML = `<h1 class='load'>Fetching Data...</h1>`;
  setTimeout(() => {
    API();
  }, 3000);
});