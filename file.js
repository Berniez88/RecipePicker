// const recepies = require("./ResturantPickerJSON.json");
// console.log(recipes);

//* This Works
// fetch("./Recipe.json")
//   .then((recepieData) => {
//     return recepieData.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function loadRecipes() {
  const response = await fetch("./Recipe.json");
  const data = await response.json();
  return data;
}

// document.addEventListener("DOMContentLoaded", async () => {
//   let recipes = [];
//   let allData = document.querySelector("#allData");
//   recipes = await loadRecipes();
//   for (let i in recipes) {
//     let pTag = document.createElement("p");
//     pTag.textContent = i;
//     console.log(i);
//     allData.appendChild(pTag);
//     for (let data in i) {
//       console.log(data[1]);
//     }
//   }
//   console.log(recipes);
// });

//* Working Code
export function addRecipes() {
  document.addEventListener("DOMContentLoaded", async () => {
    let recipes = [];
    console.log();
    let allData = document.querySelector("#allData");

    recipes = await loadRecipes();
    for (var k in recipes) {
      var temp = "";

      for (var entry in recipes[k]) {
        temp = temp + recipes[k][entry] + " | ";
      }
      var pTag = document.createElement("p");
      pTag.textContent = temp;
      allData.appendChild(pTag);
    }

    console.log(recipes);
  });
}
